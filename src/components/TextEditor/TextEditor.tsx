import { FC, useEffect, useState, ComponentType, useRef } from 'react';
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
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import useClickOutside from '../../hooks/useClickOutside';

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
  error,
  editableTextEditor = false,
  onSubmit,
}) => {
  const [editorState, setEditorState] = useState<any>(null);
  const [focusState, setFocusState] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [initialContent, setInitialContent] = useState<string | undefined>(
    convertedContent
  );
  const editorRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

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
          mode === 'view' || (editableTextEditor && !isEditing)
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
    setInitialContent(convertedContent);
  }, [convertedContent, mode, isEditing, editableTextEditor]);

  useEffect(() => {
    let editorState = null;
    if (convertedContent?.length === 0) {
      if (mode === 'view' || (editableTextEditor && !isEditing)) {
        const content = ContentState.createFromText('---');
        editorState = EditorState.createWithContent(content);
      } else {
        editorState = EditorState.createEmpty();
      }
      setEditorState(editorState);
    }
  }, [convertedContent, mode, isEditing, editableTextEditor]);

  const handleEditorChange = (state: any) => {
    setEditorState(state);
    const currentContentAsRaw = convertToRaw(state.getCurrentContent());
    if (isEditing && currentContentAsRaw?.blocks[0]?.text === '' && required) {
      setErrorMsg(true);
    } else if (currentContentAsRaw?.blocks[0]?.text !== '') {
      setErrorMsg(false);
    }
  };

  const handleClickOutside = () => {
    if (editableTextEditor && isEditing && !errorMsg) {
      setIsEditing(false);
      setConvertedContent(initialContent || '');
      const content = parseContent(initialContent);
      const newEditorState = content
        ? EditorState.createWithContent(convertFromRaw(content))
        : EditorState.createWithContent(ContentState.createFromText('---'));
      setEditorState(newEditorState);
    }
  };

  useClickOutside(editorRef, handleClickOutside, [buttonsRef]);

  const handleEditorBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!editableTextEditor) {
      const currentContentAsRaw = convertToRaw(editorState.getCurrentContent());
      setConvertedContent(JSON.stringify(currentContentAsRaw));
      if (currentContentAsRaw?.blocks[0]?.text === '') {
        setErrorMsg(true);
      }
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleDoubleClick = () => {
    if (editableTextEditor && !isEditing) {
      setIsEditing(true);
      setInitialContent(convertedContent);
      const content = parseContent(convertedContent);
      const isDashContent = content?.blocks[0]?.text === '---';
      const newEditorState = isDashContent
        ? EditorState.createEmpty()
        : content
        ? EditorState.createWithContent(convertFromRaw(content))
        : EditorState.createEmpty();
      setEditorState(newEditorState);
    }
  };

  const handleSubmit = () => {
    if (errorMsg) {
      return;
    }
    const currentContentAsRaw = convertToRaw(editorState.getCurrentContent());
    let contentString = JSON.stringify(currentContentAsRaw);
    if (currentContentAsRaw?.blocks[0]?.text === '') {
      contentString = JSON.stringify(
        convertToRaw(ContentState.createFromText('---'))
      );
    }
    setConvertedContent(contentString);
    if (onSubmit) {
      onSubmit(contentString);
    }
    setInitialContent(contentString);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setConvertedContent(initialContent || '');
    const content = parseContent(initialContent);
    const newEditorState = content
      ? EditorState.createWithContent(convertFromRaw(content))
      : EditorState.createWithContent(ContentState.createFromText('---'));
    setEditorState(newEditorState);
    setErrorMsg(false);
  };

  const EditorComponent = DraftEditor as unknown as ComponentType<EditorProps>;

  return (
    <div className="ff-textEditor-container">
      <div className="ff-title-button">
        <div className="ff-textEditor-label-asterisk-container">
          {required && (
            <Typography className="required-asterisk">* </Typography>
          )}
          {label && (
            <Typography lineHeight="10px" fontWeight="medium" fontSize="12px">
              {label}
            </Typography>
          )}
        </div>
        {editableTextEditor && isEditing && (
          <div ref={buttonsRef} className="ff-textEditor-buttons">
            <Tooltip title="Update" placement="bottom">
              <Icon
                name="update_icon"
                color="var(--label-edit-confirm-icon)"
                height={20}
                width={20}
                hoverEffect
                onClick={handleSubmit}
              />
            </Tooltip>
            <Tooltip title="Cancel" placement="bottom">
              <Icon
                name="close"
                color="var(--label-edit-cancel-icon)"
                height={20}
                width={20}
                onClick={handleCancel}
                hoverEffect
              />
            </Tooltip>
          </div>
        )}
      </div>
      <div ref={editorRef} onDoubleClick={handleDoubleClick}>
        <EditorComponent
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapperClass"
          editorClassName={`ff-heading-TextEditor-style ${
            analyticsClasses ? 'fontSm' : 'fontMd'
          }`}
          editorStyle={
            mode !== 'view' && (!editableTextEditor || isEditing)
              ? !focusState
                ? {
                    border:
                      '1px solid var(--text-editor-out-focus-border-color) ',
                    borderRadius: '4px',
                  }
                : {
                    border:
                      '1px solid var(--text-editor-in-focus-border-color)',
                    borderRadius: '4px',
                  }
              : { border: 'none' }
          }
          onFocus={() => {
            setFocusState(true);
          }}
          onBlur={handleEditorBlur}
          readOnly={editableTextEditor ? !isEditing : readOnly}
          toolbarHidden={editableTextEditor ? !isEditing : toolbarHidden}
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
      </div>
      {(required && errorMsg) || (helperText && error) ? (
        <Typography
          fontSize={10}
          className={'ff-textEditor-error-msg'}
          as="span"
        >
          {helperText}
        </Typography>
      ) : null}
    </div>
  );
};

export default TextEditor;
