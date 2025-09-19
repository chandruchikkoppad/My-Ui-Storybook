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
import { DynamicObj } from '../CreateVariable/types';

const Editor = forwardRef<any, EditorProps>(
  (
    {
      width = '100%',
      height = '100%',
      VariableDropdownHeight = '160px',
      readOnly = false,
      value = '',
      handleChange,
      setValue,
      variableOptionsList = [],
      addForloopPrefix = false,
      language = 'json',
      theme = 'light',
      isRequisiteType = false,
      onPaste,
      showVariableDropdown = true,
      defaultValue,
      customOptions = {},
    },
    ref
  ) => {
    const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
    const decorationsRef = useRef<string[]>([]);
    const varRef = useRef<number | null>(null);
    const filterVarRef = useRef<string | null>(null);
    const [currentLine, setCurrentLine] = useState<number>(0);
    const [isTextSelected, setIsTextSelected] = useState(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [dropdownPosition, setDropdownPosition] =
      useState<dropdownPositionType>({ top: 0, left: 0 });
    const [filteredVariableOptions, setFilteredVariableOptions] = useState<
      DyanamicObj[]
    >([]);

    const variableOptionsRef = useRef<DyanamicObj[]>(variableOptionsList);

    useEffect(() => {
      variableOptionsRef.current = variableOptionsList;
    }, [variableOptionsList]);

    const handleEditorDidMount: OnMount = (editor: any, monaco) => {
      editorRef.current = editor;

      // Track caret line
      editor.onDidChangeCursorPosition((e: any) => {
        setCurrentLine(e.position.lineNumber);
      });

      editor.onMouseDown(() => {
        setShowDropdown(false);
      });

      // Track selection changes (user highlighting text)
      editor.onDidChangeCursorSelection(() => {
        const selections = editor.getSelections?.() || [];
        const hasSelection = selections.some(
          (sel: DynamicObj) =>
            sel.startLineNumber !== sel.endLineNumber ||
            sel.startColumn !== sel.endColumn
        );
        setIsTextSelected(hasSelection);
      });

      // Model content listener (variable trigger, etc.)
      editor.onDidChangeModelContent(() => {
        const content = editor.getValue();
        setValue(content);
        const position = editor.getPosition();
        const model = editor.getModel();
        if (!position || !model) return;

        const currentLineContent = model.getLineContent(position.lineNumber);
        const columnIndex = position.column - 2;
        if (currentLineContent[varRef.current ?? columnIndex] === '$') {
          if (varRef.current === null) {
            varRef.current = columnIndex;
          }
          filterVarRef.current = currentLineContent.slice(
            varRef.current + 1,
            columnIndex
          );
          const filteredVariable = variableOptionsRef.current.filter((e) => {
            const variableName =
              e.type === '_startforloop' && addForloopPrefix
                ? `FLV_for:${e.name}`
                : e.name;
            return variableName
              .toLowerCase()
              .includes(filterVarRef.current?.toLowerCase());
          });
          if (filteredVariable.length) {
            setFilteredVariableOptions(filteredVariable);
          } else {
            setFilteredVariableOptions([]);
            if (
              varRef?.current !== columnIndex &&
              currentLineContent[columnIndex] === ' '
            ) {
              varRef.current = null;
              filterVarRef.current = null;
              setShowDropdown(false);
            }
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

          if (
            dropdownTop + dropdownHeight >
            editorHeight - dropdownHeight + 100
          ) {
            dropdownTop -= Math.floor(dropdownHeight / 2) + dropdownHeight - 25;
          } else {
            dropdownTop -= 5;
          }

          if (left > editorRect.width * 0.75) {
            dropdownLeft -= dropdownHeight;
          } else if (left < editorRect.width * 0.5 + dropdownHeight) {
            dropdownLeft = dropdownLeft + 35;
          }
          setDropdownPosition({ top: dropdownTop, left: dropdownLeft });
          setShowDropdown(true);
        } else {
          setShowDropdown(false);
          varRef.current = null;
          filterVarRef.current = null;
        }
      });

      // Detect paste events
      editor.onDidPaste(() => {
        const pastedText = editor.getValue();

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
      const editor = editorRef.current;
      if (!editor || !currentLine) return;

      const decorations = [];
      const lineNumberDecorations = [];

      // Only push the background decoration when NO selection
      if (!isTextSelected) {
        decorations.push({
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
        });
      }

      lineNumberDecorations.push({
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
      });

      decorationsRef.current = editor.deltaDecorations(decorationsRef.current, [
        ...decorations,
        ...lineNumberDecorations,
      ]);
    }, [currentLine, isTextSelected]);

    const handleSelectSuggestion = (suggestion: string, type: string) => {
      if (editorRef.current) {
        const editor = editorRef.current;
        const position = editor.getPosition();
        if (position) {
          const val = `{${type}${type === 'FLV_for:' ? '' : '_'}${suggestion}}`;
          const currentPostion = varRef?.current ?? 0;
          editor.executeEdits('', [
            {
              range: {
                startLineNumber: position.lineNumber,
                startColumn: currentPostion + 2,
                endLineNumber: position.lineNumber,
                endColumn: currentPostion + (position.column - currentPostion),
              },
              text: val,
              forceMoveMarkers: true,
            },
          ]);
          filterVarRef.current = null;
          varRef.current = null;
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
          const currentPostion = varRef?.current ?? 0;

          editor.executeEdits('', [
            {
              range: {
                startLineNumber: position.lineNumber,
                startColumn: currentPostion + 1,
                endLineNumber: position.lineNumber,
                endColumn: currentPostion + (position.column - currentPostion),
              },
              text: textToInsert,
              forceMoveMarkers: true,
            },
          ]);
          filterVarRef.current = null;
          varRef.current = null;
          setShowDropdown(false);
        }
      } else {
        // Existing flow for variable insertion
        handleSelectSuggestion(
          option?.type === 'DATAPROVIDER'
            ? option?.dpName + ':' + option?.varname
            : option?.name,
          option.parentVariableType === 'STEPGROUP'
            ? 'SGV'
            : option?.type === 'GLOBAL'
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
            comma_first: false,
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
            comma_first: false,
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
            ...customOptions,
          }}
          onMount={handleEditorDidMount}
          onChange={(newValue, event) => handleChange(newValue, event)}
          theme={theme}
        />
        {showDropdown && dropdownPosition && showVariableDropdown && (
          <VariableDropdown
            position="absolute"
            width="300px"
            height={VariableDropdownHeight}
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
