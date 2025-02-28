export interface IconRadioItem {
    /**
     * The unique name for the icon, used to load the corresponding icon.
     */
    iconName: string;
  
    /**
     * The display label for the icon. This can be used for accessibility purposes.
     */
    iconLabel: string;
  
    /**
     * Flag to determine if the icon option is disabled.
     */
    disabled?: boolean;
  
    /**
     * Message to display when the option is disabled.
     */
    disableMessage?: string;
  }
  
  export interface IconRadioGroupProps {
    /**
     * Array of icon items that make up the radio button group.
     */
    items: IconRadioItem[];
  
    /**
     * Callback function called when a button/icon is clicked. 
     * It returns the selected item.
     */
    onButtonClick: (selectedItem: IconRadioItem) => void;
  
    /**
     * The currently selected icon value
     */
    selectedValue?: string | null;
  
    /**
     * Callback function to notify parent of selection change.
     */
    onChange?: (selected: string | null) => void;
  
    /**
     * Optional className for custom styling
     */
    className?: string;
  }
  