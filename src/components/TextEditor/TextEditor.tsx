import { FC, useEffect, useState, ComponentType } from 'react';

import {
  EditorState,
  ContentState,
  convertFromRaw,
  convertToRaw,
} from 'draft-js';
import { Editor as DraftEditor, EditorProps } from 'react-draft-wysiwyg';
import './TextEditor.scss';
import RichTextEditorProps from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Typography from '../Typography';

const TextEditor: FC<RichTextEditorProps> = ({
  convertedContent,
  setConvertedContent,
  readOnly,
  toolbarHidden,
  toolbarOptions,
  label,
  required = false,
  onBlur,
  mode,
  helperText,
  analyticsClasses = false,
}) => {
  const [editorState, setEditorState] = useState<any>(null);
  const [focusState, setFocusState] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const defaultToolBarOptions = [
    'inline',
    'blockType',
    'fontSize',
    'fontFamily',
    'list',
    'textAlign',
    'colorPicker',
    'link',
    'emoji',
    'image',
    'remove',
    'history',
  ];

  const parseContent = (content: string | undefined) => {
    if (!content) return null;
    try {
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === 'object' && parsed.blocks) {
        return parsed;
      }
      return convertToRaw(ContentState.createFromText(content));
    } catch (e) {
      return convertToRaw(ContentState.createFromText(content));
    }
  };

  useEffect(() => {
    let newEditorState: EditorState;

    try {
      if (!checkEmpty(convertedContent)) {
        const content = parseContent(convertedContent);
        newEditorState = EditorState.createWithContent(convertFromRaw(content));
      } else {
        newEditorState =
          mode === 'view'
            ? EditorState.createWithContent(ContentState.createFromText('---'))
            : EditorState.createEmpty();
      }
    } catch (e) {
      console.error('Error creating editor state:', e);
      newEditorState = EditorState.createWithContent(
        ContentState.createFromText(convertedContent || 'Invalid content')
      );
    }

    setEditorState(newEditorState);
  }, [convertedContent, mode]);

  useEffect(() => {
    let editorState = null;
    if (convertedContent.length === 0) {
      if (mode === 'view') {
        const content = ContentState.createFromText('---');
        editorState = EditorState.createWithContent(content);
      } else {
        editorState = EditorState.createEmpty();
      }
      setEditorState(editorState);
    }
  }, [convertedContent]);

  const handleEditorChange = (state: any) => {
    setEditorState(state);
    const currentContentAsRaw = convertToRaw(state.getCurrentContent());
    if (currentContentAsRaw?.blocks[0]?.text !== '') {
      setError(false);
    }
  };
  const handleEditorBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const currentContentAsRaw = convertToRaw(editorState.getCurrentContent());
    setConvertedContent(JSON.stringify(currentContentAsRaw));

    if (currentContentAsRaw?.blocks[0]?.text === '') {
      setError(true);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const EditorComponent = DraftEditor as unknown as ComponentType<EditorProps>;
  return (
    <div className="ff-textEditor-container">
      <div className="ff-textEditor-label-asterisk-container">
        {required && <Typography className="required-asterisk">* </Typography>}
        {label && (
          <Typography lineHeight="10px" fontWeight="medium" fontSize="12px">
            {label}
          </Typography>
        )}
      </div>
      <EditorComponent
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapperClass"
        editorClassName={`ff-heading-TextEditor-style ${
          analyticsClasses ? 'fontSm' : 'fontMd'
        }`}
        editorStyle={
          mode !== 'view'
            ? !focusState
              ? {
                  border:
                    '1px solid var(--text-editor-out-focus-border-color) ',
                  borderRadius: '5px',
                }
              : {
                  border: '1px solid var(--text-editor-in-focus-border-color)',
                  borderRadius: '5px',
                }
            : { border: 'none' }
        }
        onFocus={() => {
          setFocusState(true);
        }}
        onBlur={handleEditorBlur}
        readOnly={readOnly}
        toolbarHidden={toolbarHidden}
        toolbarClassName="ff-toolbarClass"
        handlePastedText={() => false}
        toolbar={{
          options:
            Array.isArray(toolbarOptions) && toolbarOptions?.length > 0
              ? toolbarOptions
              : defaultToolBarOptions,
          fontFamily: {
            options: [
              'Arial',
              'Georgia',
              'Impact',
              'OpenSans-Regular',
              'Tahoma',
              'Times New Roman',
              'Verdana',
              'poppins',
            ],
          },
        }}
      />
      {required && error && (
        <Typography
          fontSize={10}
          className={'ff-textEditor-error-msg'}
          as="span"
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};
export default TextEditor;
