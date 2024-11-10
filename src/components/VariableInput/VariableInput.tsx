import classNames from 'classnames';
import React, { useState, useRef, useEffect } from 'react';
import './VariableInput.scss';
import { VariableInputProps } from './types';
import Typography from '../Typography';

interface ParsedPart {
  text: string;
  textType: string;
}

const VariableInput = ({
  type = 'url',
  name = '',
  label,
  disabled = false,
  required = false,
  placeholder = '',
  value = '',
  error,
  className = '',
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  list=[],
  ...props
}: VariableInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [isAddingText, setIsAddingText] = useState<boolean>(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const undoStack = useRef<string[]>([]);
  const redoStack = useRef<string[]>([]);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const parseUrl = (url: string): ParsedPart[] => {
    const regex = /\$\{(\w+)\}/g; //checking the text variable or not
    const parts: ParsedPart[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(url)) !== null) {
      const [fullMatch, variable] = match;
      const isInList = list?.includes(variable ?? '');

      if (match.index > lastIndex) {
        parts.push({ text: url.slice(lastIndex, match.index), textType: 'normal' });
      }

      parts.push({
        text: fullMatch,
        textType: isInList ? 'variable' : 'nonVariable',
      });

      lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < url.length) {
      parts.push({ text: url.slice(lastIndex), textType: 'normal' });
    }

    return parts;
  };

  const updateContentEditable = () => {
    const parsedParts = parseUrl(inputValue);
    const contentEditableElement = contentEditableRef.current;

    if (contentEditableElement) {
      contentEditableElement.innerHTML = parsedParts
        .map((part) => {
          const varClassName = classNames({
            ['ff_var_red']: part.textType === 'nonVariable',
            ['ff_var_green']: part.textType === 'variable',
            ['ff_var_def_textType']:
              part.textType !== 'nonVariable' && part.textType !== 'variable',
          });

          return `<Typography class="${varClassName}">${part.text}</Typography>`;
        })
        .join('');
      restoreCursorPosition(contentEditableElement);
    }
  };

  const restoreCursorPosition = (element: HTMLDivElement) => {
    const selection = window.getSelection();
    const range = document.createRange();
    const textNodes = getTextNodes(element);

    if (textNodes.length > 0) {
      const lastNode = textNodes[textNodes.length - 1];
      const positionAdjustment = isAddingText ? 1 : -1;

      const newOffset = Math.max(
        0,
        Math.min(
          cursorPosition + positionAdjustment,
          (lastNode as Text).length || 0
        )
      );
      if (lastNode) {
        range.setStart(lastNode, newOffset);
      }
      range.collapse(true);
    } else {
      range.selectNodeContents(element);
      range.collapse(false);
    }

    selection?.removeAllRanges();
    selection?.addRange(range);
    element.focus();
  };

  const getTextNodes = (element: HTMLDivElement): Node[] => {
    const nodes: Node[] = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null
    );
    let node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
    }
    return nodes;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.innerText.split('\n').join('');
    setInputValue(text);
    undoStack.current.push(text);
    redoStack.current = [];

    if (required && !text.trim()) {
      e.currentTarget.classList.add('ff_required_empty');
    } else {
      e.currentTarget.classList.remove('ff_required_empty');
    }

    if (type === 'url') {
      const urlPattern = new RegExp(
        '^(https?://)?([\\w.-]+)\\.([a-zA-Z]{2,})(/([\\w.-]+|\\$\\{[\\w.-]+\\}))*/?$'
      );

      if (!urlPattern.test(text)) {
        e.currentTarget.classList.add('ff_invalid_input');
      } else {
        e.currentTarget.classList.remove('ff_invalid_input');
        e.currentTarget.classList.remove('ff_required_empty');
      }
    } else {
      e.currentTarget.classList.add('ff_invalid_input');
    }

    if (onChange) {
      onChange(text);
    }

    const match = /\$\{(\w*)$/.exec(text);
    if (match) {
      const query = match[1];
      const filteredSuggestions = list?.filter((item: string) =>
        item.startsWith(query ?? '')
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const cursorPos = getCursorPosition();
    setCursorPosition(cursorPos);
    setIsAddingText(true);

    const currentText = contentEditableRef.current
      ? contentEditableRef.current.textContent || ''
      : '';

    if (e.key === 'Backspace' || e.key === 'Delete') {
      setIsAddingText(false);
      if (!currentText.trim()) {
        e.preventDefault();
        if (contentEditableRef.current) {
          contentEditableRef.current.textContent = '';
          contentEditableRef.current.blur();
        }
        return;
      }
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      insertTextAtCursor('\n');
    } else if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
      undo();
    } else if (e.ctrlKey && e.key === 'y') {
      e.preventDefault();
      redo();
    }

    if (onKeyDown) {
      onKeyDown(e as React.KeyboardEvent<HTMLInputElement>);
    }
  };

  const getCursorPosition = (): number => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      return range.startOffset;
    }
    return 0;
  };

  const undo = () => {
    if (undoStack.current.length > 1) {
      redoStack.current.push(undoStack.current.pop()!);
      setInputValue(undoStack.current[undoStack.current.length - 1] ?? '');
      setIsAddingText(false);
    }
  };

  const redo = () => {
    if (redoStack.current.length > 0) {
      const textToRedo = redoStack.current.pop()!;
      setInputValue(textToRedo);
      undoStack.current.push(textToRedo);
      setIsAddingText(true);
    }
  };

  const insertTextAtCursor = (text: string) => {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    if (range) {
      range.deleteContents();
      const newTextNode = document.createTextNode(text);
      range.insertNode(newTextNode);

      const lineBreak = document.createElement('br');
      range.insertNode(lineBreak);

      range.setStartAfter(lineBreak);
      range.collapse(true);

      selection?.removeAllRanges();
      selection?.addRange(range);
      contentEditableRef.current?.focus();
      setInputValue(contentEditableRef.current?.innerText || '');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const newText = inputValue.replace(/\$\{\w*$/, `\$\{${suggestion}`);
    setInputValue(newText);
    setShowSuggestions(false);
  };

  useEffect(() => {
    updateContentEditable();
  }, [inputValue]);

  const inputClasses = classNames('ff_content_editable', {
    ['ff_placeholder']: !inputValue,
    ['ff_disabled']: disabled,
    ['ff_required']: required,
    ['ff_invalid_input']: error,
  });

  return (
    <div className={'ff_variable_input_container'}>
      {label && (
        <label
          htmlFor={name}
          className={classNames('ff_label_container', {
            ['ff_labelDanger']: error,
          })}
        >
          {required && (
            <Typography className={'ff_required_asterisk'}>*</Typography>
          )}
          <Typography
            className={classNames('ff_input_label', {
              ['ff_no_hover']: value,
              ['ff_disabled_label']: disabled,
              ['ff_danger_label']: error,
            })}
          >
            {label}
          </Typography>
        </label>
      )}
      <div
        id={name}
        contentEditable={!disabled}
        ref={contentEditableRef}
        onInput={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={(e) => {
          e.currentTarget.style.outline = 'none';
          if (onFocus) onFocus(e as React.FocusEvent<HTMLInputElement>);
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
          if (onBlur) onBlur(e as React.FocusEvent<HTMLInputElement>);

          if (required && !inputValue.trim()) {
            e.currentTarget.classList.add('ff_required_empty');
          } else {
            e.currentTarget.classList.remove('ff_required_empty');
          }
        }}
        className={inputClasses}
        suppressContentEditableWarning
        aria-required={required ? 'true' : 'false'}
        data-name={name}
        data-type={type}
        data-placeholder={placeholder}
        spellCheck={false}
        {...props}
      />
      {showSuggestions && (
        <ul className={'ff_suggestions'}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className={'ff_suggestion_item'}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VariableInput;
