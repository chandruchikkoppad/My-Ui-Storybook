export interface RichTextEditorProps {
  convertedContent: string;
  label?:string;
  setConvertedContent: (content: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  toolbarHidden?: boolean;
  toolbarOptions?: string[];
  mode?: 'view' | 'edit';
  analyticsClasses?: boolean;
  descriptionContentNotEditable?: boolean;
  required?: boolean;
  helperText?:string;
}

export default RichTextEditorProps;
