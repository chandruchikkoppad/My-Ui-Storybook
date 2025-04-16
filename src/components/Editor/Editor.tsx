import {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import MonacoEditor, { OnMount } from '@monaco-editor/react';
import { js as beautifyJS, html as beautifyHTML } from 'js-beautify';
import { dropdownPositionType, EditorProps, DyanamicObj } from './types';
import './Editor.scss';
import VariableDropdown from './VariableDropdown';

const Editor = forwardRef<any, EditorProps>(
  (
    {
      width = '100%',
      height = '100%',
      readOnly = false,
      value = '',
      handleChange,
      setValue,
      variableOptionsList = [],
      language = 'json',
      theme = 'light',
      isRequisiteType = false,
      onPaste,
      showVariableDropdown = true,
      defaultValue,
    },
    ref
  ) => {
    const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
    const decorationsRef = useRef<string[]>([]);
    const [currentLine, setCurrentLine] = useState<number>(0);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [dropdownPosition, setDropdownPosition] =
      useState<dropdownPositionType>({ top: 0, left: 0 });
    const [filteredVariableOptions, setFilteredVariableOptions] =
      useState<DyanamicObj[]>(variableOptionsList);

    const handleEditorDidMount: OnMount = (editor: any, monaco) => {
      editorRef.current = editor;

      editor.onDidChangeCursorPosition((e: any) => {
        setCurrentLine(e.position.lineNumber);
      });

      editor.onDidChangeModelContent(() => {
        const content = editor.getValue();
        setValue(content);
        const position = editor.getPosition();
        const model = editor.getModel();
        if (!position || !model) return;

        const currentLineContent = model.getLineContent(position.lineNumber);
        const columnIndex = position.column - 2;

        if (currentLineContent[columnIndex] === '$') {
          const match = currentLineContent.match(
            /ff\.(GLOBAL|PROJECT_ENVIRONMENT)\.(get|set)\(\$/
          );
          if (isRequisiteType) {
            editor.executeEdits('', [
              {
                range: new monaco.Range(
                  position.lineNumber,
                  position.column - 1,
                  position.lineNumber,
                  position.column
                ),
                text: '',
              },
            ]);
          }

          if (match) {
            const variableScope = match[1];
            setFilteredVariableOptions(
              variableOptionsList.filter((v) => v.type === variableScope)
            );
          } else {
            setFilteredVariableOptions(variableOptionsList);
          }

          const visiblePosition = editor.getScrolledVisiblePosition(position);
          const editorDomNode = editor.getDomNode();
          if (!visiblePosition || !editorDomNode) return;

          const { top, left } = visiblePosition;
          const editorRect = editorDomNode.getBoundingClientRect();
          const editorHeight = editorDomNode.clientHeight;
          const dropdownHeight = 150;

          let dropdownTop = top;
          let dropdownLeft = left;

          if (dropdownTop + dropdownHeight > editorHeight) {
            dropdownTop -= dropdownHeight;
          } else {
            dropdownTop += 20;
          }

          if (left > editorRect.width * 0.75) {
            dropdownLeft -= 150;
          } else if (left < editorRect.width * 0.25) {
            dropdownLeft += 20;
          }

          setDropdownPosition({ top: dropdownTop, left: dropdownLeft });
          setShowDropdown(true);
        } else {
          setShowDropdown(false);
        }
      });

      // Detect paste events
      editor.onDidPaste(() => {
        const pastedText = editor.getValue();

        // Perform an action when pasting (example: beautify the pasted content)
        if (pastedText) {
          const beautifiedText = beautifyContent(pastedText, language);
          editor.setValue(beautifiedText);
          if (onPaste) {
            onPaste(beautifiedText);
          }
        }
      });

      monaco.languages.registerCompletionItemProvider(language, {
        triggerCharacters: ['.'],
        provideCompletionItems: (model, position) => {
          const textUntilPosition = model.getValueInRange({
            startLineNumber: position.lineNumber,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column,
          });

          const wordRange = model.getWordAtPosition(position);
          const range = wordRange
            ? new monaco.Range(
                position.lineNumber,
                wordRange.startColumn,
                position.lineNumber,
                wordRange.endColumn
              )
            : new monaco.Range(
                position.lineNumber,
                position.column,
                position.lineNumber,
                position.column
              );

          const suggestions = [];

          if (textUntilPosition.endsWith('ff.')) {
            suggestions.push(
              {
                label: 'getVariable',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: 'getVariable(${1:variableName})',
                insertTextRules:
                  monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                detail: 'Get a variable value',
                range,
              },
              {
                label: 'setVariable',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: 'setVariable(${1:variableName}, ${2:value})',
                insertTextRules:
                  monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                detail: 'Set a variable value',
                range,
              },
              {
                label: 'sendRequest',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText:
                  'sendRequest({\n        method: "GET",//add your method\n        url: "https://fakestoreapi.com/products",//enter your url\n        headers: {  },//add your headers,\n        params: params,//add your params,\n        data: body,//add your request body,\n      })',
                insertTextRules:
                  monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                detail: 'Make your http requests',
                range,
              }
            );
          }

          // Add other conditions similarly...

          return { suggestions };
        },
      });
    };

    useEffect(() => {
      if (editorRef.current && currentLine) {
        const decorations = [
          {
            range: {
              startLineNumber: currentLine,
              startColumn: 1,
              endLineNumber: currentLine,
              endColumn: 1,
            },
            options: {
              isWholeLine: true,
              className: 'current-line-background',
            },
          },
        ];

        const lineNumberDecorations = [
          {
            range: {
              startLineNumber: currentLine,
              startColumn: 1,
              endLineNumber: currentLine,
              endColumn: 1,
            },
            options: {
              isWholeLine: false,
              linesDecorationsClassName: 'active-line-number',
            },
          },
        ];

        decorationsRef.current = editorRef.current.deltaDecorations(
          decorationsRef.current,
          [...decorations, ...lineNumberDecorations]
        );
      }
    }, [currentLine]);

    const handleSelectSuggestion = (suggestion: string, type: string) => {
      if (editorRef.current) {
        const editor = editorRef.current;
        const position = editor.getPosition();
        if (position) {
          editor.executeEdits('', [
            {
              range: {
                startLineNumber: position.lineNumber,
                startColumn: position.column,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
              },
              text: `{${type}${
                type === '_startforloop' ? '' : '_'
              }${suggestion}}`,
            },
          ]);
          setShowDropdown(false);
        }
      }
    };

    const handleSelectVariable = (option: DyanamicObj) => {
      if (isRequisiteType && editorRef.current) {
        const editor = editorRef.current;
        const position = editor.getPosition();
        if (position) {
          const textToInsert = `'${option.name}'`;

          editor.executeEdits('', [
            {
              range: {
                startLineNumber: position.lineNumber,
                startColumn: position.column,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
              },
              text: textToInsert,
            },
          ]);
          setShowDropdown(false);
        }
      } else {
        // Existing flow for variable insertion
        handleSelectSuggestion(
          option.parentVariableType === 'STEPGROUP' ? 'SGV' : option?.name,
          option?.type === 'GLOBAL'
            ? 'GV'
            : option?.type === 'LOCAL'
            ? 'LV'
            : option?._id?.includes('PARAMETER')
            ? 'SGP'
            : option?.type === '_startforloop'
            ? 'FLV_for:'
            : option?.type === 'DATAPROVIDER'
            ? 'DPV'
            : 'PEV'
        );
      }
    };

    const beautifyContent = (content: string, language: string): string => {
      switch (language) {
        case 'json':
          return beautifyJS(content, {
            indent_size: 4,
            indent_char: ' ',
            max_preserve_newlines: 5,
            preserve_newlines: true,
            keep_array_indentation: true,
            break_chained_methods: true,
            brace_style: 'collapse',
            space_before_conditional: true,
            unescape_strings: true,
            jslint_happy: true,
            end_with_newline: true,
            wrap_line_length: 0,
            comma_first: true,
            e4x: true,
            indent_empty_lines: true,
          });
        case 'javascript':
          return beautifyJS(content, {
            indent_size: 4,
            indent_char: ' ',
            max_preserve_newlines: 5,
            preserve_newlines: true,
            keep_array_indentation: true,
            break_chained_methods: true,
            brace_style: 'collapse',
            space_before_conditional: true,
            unescape_strings: true,
            jslint_happy: true,
            end_with_newline: true,
            wrap_line_length: 0,
            comma_first: true,
            e4x: true,
            indent_empty_lines: true,
          });
        case 'html':
          return beautifyHTML(content, {
            indent_size: 4,
            indent_char: ' ',
            max_preserve_newlines: 5,
            preserve_newlines: true,
            end_with_newline: true,
            wrap_line_length: 0,
            indent_empty_lines: true,
          });
        case 'xml':
          return beautifyHTML(content, {
            indent_size: 4,
            indent_char: ' ',
            max_preserve_newlines: 5,
            preserve_newlines: true,
            end_with_newline: true,
            wrap_line_length: 0,
            indent_empty_lines: true,
          });
        case 'plain text':
          return content;
        default:
          return content;
      }
    };

    // Expose editorRef and helper functions to parent via forwarded ref
    useImperativeHandle(ref, () => ({
      getEditorInstance: () => editorRef.current,
      beautify: () => {
        if (editorRef.current) {
          const content = editorRef.current.getValue();
          const language = editorRef.current.getModel()?.getLanguageId();
          const beautifiedContent = beautifyContent(
            content,
            language || 'json'
          );
          editorRef.current.setValue(beautifiedContent);
        }
      },
    }));

    return (
      <div style={{ width, height }} className="ff-editor-container">
        <MonacoEditor
          defaultValue={defaultValue}
          height={height}
          width={width}
          language={language}
          value={value}
          options={{
            lineNumbers: 'on',
            wordWrap: 'on',
            autoClosingBrackets: 'always',
            scrollBeyondLastLine: false,
            readOnly,
          }}
          onMount={handleEditorDidMount}
          onChange={(newValue, event) => handleChange(newValue, event)}
          theme={theme}
        />
        {showDropdown && dropdownPosition && showVariableDropdown && (
          <VariableDropdown
            position="absolute"
            width="300px"
            height="300px"
            optionsList={filteredVariableOptions}
            onSelectVariable={handleSelectVariable}
            dropdownPosition={dropdownPosition}
          />
        )}
      </div>
    );
  }
);

export default Editor;
