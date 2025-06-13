import { ColorPaletteType } from './types';

const ColorPalette: ColorPaletteType = [
  { name: 'Brand Color', colorCode: '#71347b', variable: '--brand-color' },
  { name: 'Text Color', colorCode: '#1e161f', variable: '--text-color' },
  {
    name: 'Description Text',
    colorCode: '#7a7a7a',
    variable: '--description-text',
  },
  {
    name: 'Clickable Text Color',
    colorCode: '#71347b',
    variable: '--click-able-text-color',
  },
  {
    name: 'Icons Default Color',
    colorCode: '#71347b',
    variable: '--icons-default-color',
  },
  { name: 'Border Color', colorCode: '#f0e7f4', variable: '--border-color' },
  {
    name: 'Disable Color',
    colorCode: '#71347b',
    opacity: 0.5,
    variable: '--disable-color',
  },
  { name: 'Hover Color', colorCode: '#f7ebff', variable: '--hover-color' },
  {
    name: 'Pop-up Background Blur',
    colorCode: '#14041c',
    opacity: 0.1,
    variable: '--pop-up-background-blur',
  },
  {
    name: 'Drawer Footer Background',
    colorCode: '#ffffff',
    border: '#f0e7f4',
    variable: '--drawer-footer-bg',
  },
  {
    name: 'Slider Table Color',
    colorCode: '#efe1f9',
    opacity: 1,
    variable: '--slider-table-color',
  },
  {
    name: 'Text bg Highlight',
    colorCode: '#f5fb00',
    variable: '--text-bg-highlight',
  },

  {
    name: 'Tooltip Bg Color',
    colorCode: '#1e161f',
    variable: '--tooltip-bg-color',
  },
  {
    name: 'Tooltip Text Color(default)',
    colorCode: '#ffffff',
    variable: '--tooltip-text-color',
  },
  {
    name: 'Toggle Strip Color(default)',
    colorCode: '#cfd1e2',
    dropShadow: 'drop-shadow(0 0 2px #00000025)',
    variable: '--toggle-strip-color',
  },
  {
    name: 'Tooltip Text Color(Active)',
    colorCode: '#ffffff',
    variable: '--tooltip-text-color',
  },
  {
    name: 'Toggle Strip Color(Active)',
    colorCode: '#71347b',
    dropShadow: 'drop-shadow(0 0 2px #00000025)',
    variable: '--toggle-strip-active',
  }, // todo  drop shadow
  {
    name: 'Primary Button Color',
    colorCode:
      'linear-gradient(90deg, rgba(113, 52, 123, 1) 100%, rgba(70, 22, 77, 1) 100%)',
    variable: '--primary-button-color',
  },
  {
    name: 'Primary Button Hover',
    colorCode:
      'linear-gradient(90deg, rgba(141, 59, 154, 1) 100%, rgba(120, 31, 134, 1) 100%)',
    variable: '--primary-button-hover',
  },
  {
    name: 'Primary Button Disable',
    colorCode:
      'linear-gradient(90deg, rgba(113, 52, 123, 1) 100%, rgba(113, 52, 123, 1) 100%)',
    opacity: 0.5,
    variable: '--primary-button-disable',
  },
  {
    name: 'Primary Button Text Color',
    colorCode: '#ffffff',
    variable: '--primary-button-text-color',
  },
  {
    name: 'Secondary Button Icon Color (default)',
    colorCode: 'rgba(113, 52, 123, 1)',
    variable: '--secondary-icon-color',
  },
  {
    name: 'Secondary Button (Hover)',
    colorCode:
      'linear-gradient(90deg, rgba(113, 52, 123, 0.05) 100%, rgba(70, 22, 77, 0.05) 100%)',
    variable: '--secondary-button-hover',
  },
  {
    name: 'Secondary Button (Disabled)',
    colorCode: 'rgba(113, 52, 123, 1)',
    opacity: 0.5,
    variable: '--disable-color',
  },
  {
    name: 'Tertiary Button (default)',
    colorCode:
      'linear-gradient(90deg, rgba(70, 22, 77, 0.05) 100%, rgba(113, 52, 123, 0.05) 100%)',
    variable: '--tertiary-button-color',
  },
  {
    name: 'Tertiary Button (Hover)',
    colorCode:
      'linear-gradient(90deg, rgba(70, 22, 77, 0.1) 100%, rgba(113, 52, 123, 0.1) 100%)',
    variable: '--tertiary-button-hover',
  },
  {
    name: 'Tertiary Button (Disabled)',
    colorCode:
      'linear-gradient(90deg, rgba(70, 22, 77, 0.05) 100%, rgba(113, 52, 123, 0.05) 100%)',
    opacity: 0.5,
    variable: '--tertiary-button-color',
  },
  {
    name: 'Delete Button Color',
    colorCode:
      'linear-gradient(90deg, rgba(228, 37, 37, 1) 100%, rgba(201, 0, 0, 1) 100%)',
    variable: '--delete-button-color',
  },
  {
    name: 'Delete Button Hover',
    colorCode:
      'linear-gradient(90deg, rgba(233, 81, 81, 1) 100%, rgba(212, 52, 52, 1) 100%)',
    variable: '--delete-button-hover',
  },
  {
    name: 'Delete Button Disabled',
    colorCode:
      'linear-gradient(90deg, rgba(233, 81, 81, 1) 100%, rgba(212, 52, 52, 1) 100%)',
    opacity: 0.5,
    variable: '--delete-button-disable',
  },
  {
    name: 'Primary Button Text Color',
    colorCode: '#ffffff',
    variable: '--primary-button-text-color',
  },
  {
    name: 'Overlay Background',
    colorCode: '#1e161f',
    opacity: 0.1,
    variable: '--overlay-bg',
  },
  {
    name: 'Avatar background color',
    colorCode: '#71347b',
    variable: '--avatar-background-color',
  },
  {
    name: 'Avatar icon color',
    colorCode: '#ffffff',
    variable: '--avatar-icon-color',
  },
  {
    name: 'Sub Header Primary Color',
    colorCode: '#301349',
    variable: '--sub-header-primary',
  },
  {
    name: 'Icon Hover BG Color',
    colorCode: '#f7ecf8',
    variable: '--ff-icon-hover-bg-color',
  },
  {
    name: 'Modal Background Color',
    colorCode: '#12121233',
    variable: '--modal-background-color',
  },
  {
    name: 'Modal Alert Header Color',
    colorCode: '#db1919',
    variable: '--modal-alert-header-color',
  },
  {
    name: 'Line Number Color',
    colorCode: '#ffffff',
    variable: '--ff-line-number-color',
  },
  {
    name: 'Editor Border Color',
    colorCode: '#f0e7f4',
    variable: '--ff-editor-border-color',
  },
  {
    name: 'Status Card Text Color',
    colorCode: '#ffffff',
    variable: '--ff-status-card-text-color',
  },
  {
    name: 'Card Status Text Color',
    colorCode: '#8a8a8a',
    variable: '--ff-card-status-text-color',
  },
  {
    name: 'Card Passed Status BG Color',
    colorCode: '#179c5f',
    variable: '--ff-card-passed-status-bg-color',
  },
  {
    name: 'Card Failed Status BG Color',
    colorCode: '#9c1732',
    variable: '--ff-card-failed-status-bg-color',
  },
  {
    name: 'Card Warning Status BG Color',
    colorCode: '#e2750f',
    variable: '--ff-card-warning-status-bg-color',
  },
  {
    name: 'Card Skipped Status BG Color',
    colorCode: '#a83fc4',
    variable: '--ff-card-skipped-status-bg-color',
  },
  {
    name: 'Card Flaky Status BG Color',
    colorCode: '#3f5ac4',
    variable: '--ff-card-flaky-status-bg-color',
  },
  {
    name: 'Search filed color',
    colorCode: '#F7ECF8',
    variable: '--ff-search-field-hover-color',
  },
  {
    name: 'Search filed background color',
    colorCode: '#F7ECF8',
    variable: '--ff-search-filed-bg-color',
  },
  {
    name: 'All Projects dropdown default color',
    colorCode: '#FFFFFF33',
    variable: '--ff-all-projects-default-color',
  },
  {
    name: 'confirm tick color',
    colorCode: '#5ca700',
    variable: 'confirm-tick-icon-color',
  },
  {
    name: 'Dynamic card border color',
    colorCode: '#eeeaf2',
    variable: ' dynamic-card-border-color',
  },
  {
    name: 'Card header background color',
    colorCode: '#592f7c1a',
    variable: 'card-header-bg-color',
  },
  {
    name: "InputWithDropdown's dropdown background color",
    colorCode: '#71347b27',
    variable: 'dropdown-bg-color',
  },
  {
    name: 'info modal background color',
    colorCode:
      'linear-gradient(94.23deg,rgba(113, 52, 123, 0.4) 16.33%,rgba(70, 22, 77, 0.4) 80.07%) ',
    variable: 'brand-color-border',
  },
  {
    name: 'alert modal background color',
    colorCode:
      'linear-gradient(94.23deg,rgba(228, 37, 37, 0.4) 16.33%,rgba(201, 0, 0, 0.4) 80.07%) ',
    variable: 'alert-modal-background-color',
  },
  {
    name: 'Progress bar bg color',
    colorCode: 'rgba(240, 240, 240, 1)',
    variable: 'ff-progress-bar-bg-color',
  },
  {
    name: 'License expires soon',
    colorCode: '#ba7422',
    variable: 'license_expires_soon_color',
  },
  {
    name: 'Primary Color',
    colorCode: '#29102d',
    variable: '--ff-primary-color',
  },
  {
    name: 'Primary Text',
    colorCode: '#0a2540',
    variable: '--ff-primary-text-color',
  },
  {
    name: 'Secondary Color',
    colorCode: '#0a2540',
    variable: '--ff-secondary-text-color',
  },
  {
    name: 'Background Color',
    colorCode: '#f7f9fc',
    variable: '--ff-background-color',
  },
  {
    name: 'Primary 600 Color',
    colorCode: '#461f4c',
    variable: '--ff-primary-600-color',
  },
  {
    name: 'Gradient Light Color',
    colorCode:
      'radial-gradient(59.43% 50% at 50% 50%, #c6c6c6 0%, #71347b 51%)',
    variable: '--ff-gradient-light-color',
  },
  {
    name: 'Gradient 20 Color',
    colorCode:
      'linear-gradient(90deg, rgba(198, 84, 255, 0.12) 0%, rgba(252, 246, 255, 0) 70.74%)',
    variable: '--ff-gradient-20-color',
  },
  {
    name: 'Primary 10 Color',
    colorCode: '#fcf6ff',
    variable: '--ff-primary-10-color',
  },
  {
    name: 'Primary 20 color',
    colorCode: '#f6e4ff',
    variable: '--ff-primary-20-color',
  },
  { name: 'White Color', colorCode: '#ffffff', variable: '--ff-white-color' },
  {
    name: 'plugins header bg color',
    colorCode: 'rgba(89, 47, 124, 0.1)',
    variable: 'plugins-header-bg-color',
  },
  {
    name: 'follow-user-icon-red',
    colorCode: '#922B3E',
    variable: 'follow-user-icon-red_color',
  },
  {
    name: 'follow-user-icon-orange',
    colorCode: '#ED760E',
    variable: 'follow-user-icon-orange_color',
  },
  {
    name: 'follow-user-icon-black',
    colorCode: '#0A0A0A',
    variable: 'follow-user-icon-black_color',
  },
  {
    name: 'follow-user-icon-pink',
    colorCode: '#E63244',
    variable: 'follow-user-icon-pink_color',
  },
  {
    name: 'follow-user-icon-blue',
    colorCode: '#3B83BD',
    variable: 'follow-user-icon-blue_color',
  },
  {
    name: 'follow-user-icon-navy',
    colorCode: '#20214F',
    variable: 'follow-user-icon-navy_color',
  },
  {
    name: 'follow-user-icon-lightGreen',
    colorCode: '#BDECB6',
    variable: 'follow-user-icon-lightGreen_color',
  },
  {
    name: 'follow-user-icon-gray',
    colorCode: '#D9D9D9',
    variable: 'follow-user-icon-gray_color',
  },
  {
    name: 'follow-user-icon-yellow',
    colorCode: '#CDA434',
    variable: 'follow-user-icon-yellow_color',
  },
  {
    name: 'follow-user-icon-salmon',
    colorCode: '#D36E70',
    variable: 'follow-user-icon-salmon_color',
  },
  {
    name: 'status-skipped-text-color',
    colorCode: '#3c3838',
    variable: '--status-skipped-text-color',
  },
  {
    name: 'text-editor-in-focus-border-color',
    colorCode: '#71347b',
    variable: 'text-editor-in-focus-border-color',
  },
  {
    name: 'prompt-serialnumber',
    colorCode: '#edd4ff',
    variable: 'ff-prompt-number-bg-color',
  },
  {
    name: 'prompt-switch-container',
    colorCode: '#b637ca',
    variable: 'ff-ai-toggle-bg-color',
  },
  {
    name: 'prompt-switch-button-Active',
    colorCode: '#6b83b2',
    variable: 'ff-ai-toggle-text-color',
  },
  {
    name: 'ChatBot Background',
    colorCode: '#F8F3FB',
    variable: '--prompt-bg-color',
  },
  {
    name: 'ChatBot Box Shadow',
    colorCode: '#592f7c33',
    variable: '--prompt-shadow-color',
  },
  {
    name: 'Default Chip With Count Background',
    colorCode: '#f4e7f4',
    variable: '--default-chip-count-background-color',
  },
  {
    name: 'Select chart highlight color',
    colorCode: '#00000066',
    variable: '--select-chart-highlight-color',
  },
  {
    name: 'Partially Failures',
    colorCode: '#FFE207',
    variable: '--partially-failures',
  },
  {
    name: 'Top Failures Bar Color',
    colorCode: '#52A2F2',
    variable: '--top-failures-bar-color',
  },
  {
    name: 'Chip Drop Shadow Inner Color',
    colorCode: '#57575733',
    variable: '--ff-chips-shadow-color-two',
  },
  {
    name: 'Chip Drop Shadow Outer Color',
    colorCode: ' #ffffff33',
    variable: '--ff-chip-bg-two',
  },
  {
    name: 'Ai testcase background color',
    colorCode: '#FBFCFD',
    variable: 'testcase-bg',
  },
  {
    name: 'Ai testcase status color',
    colorCode: '#B73E3E',
    variable: 'testcase-status-color',
  },
  {
    name: 'Ai prompt list background color',
    colorCode: '#fbf5ff',
    variable: 'ai-prompt-bg',
  },
  {
    name: 'line-chart-data',
    colorCode: ' #4c90ff',
    variable: 'line-chart-data_color',
  },
  {
    name: 'vertical-line-separate',
    colorCode: ' #D4B0E4',
    variable: 'vertical-separate-color',
  },
  {
    name: 'step group disclaimer background color',
    colorCode: ' #FF8B0033',
    variable: 'step-group-disclaimer-background',
  },
  {
    name: 'state dropdown bg color',
    colorCode: ' #dcd1e5',
    variable: 'state-dropdown-bg-color',
  },
  {
    name: 'checkbox hover box shadow color',
    colorCode: ' #c6bccc',
    variable: 'checkbox-hover-box-shadow-color',
  },
  {
    name: 'disable icon btn bg color',
    colorCode: ' #9747FF',
    variable: 'state-dropdown-bg-color',
  },
  {
    name: 'media preview corner gradient',
    colorCode: 'linear-gradient(to left bottom, #5e5e5e 0%, #c4c4c400 45%)',
    variable: 'media-preview-corner-gradient',
  },
  {
    name: 'Ai-prompt-input-bg-shadow',
    colorCode: '#71347b99',
    variable: 'ai-prompt-input-bg-shadow',
  },
  {
    name: 'Ai-prompt-input-border',
    colorCode: '#a98db5',
    variable: 'ai-prompt-input-border',
  },
  {
    name: 'selenium-icon-color',
    colorCode: ' #2cb134',
    variable: 'selenium-icon-color',
  },
  {
    name: 'line-loader-bg',
    colorCode: '#191919',
    variable: '--line-loader-bg',
  },
  {
    name: 'ff-bg-pearl-gray-color',
    colorCode: '#e0dfdf',
    variable: '--ff-bg-pearl-gray-color',
  },
  {
    name: 'ff-bg-lavender-light-color',
    colorCode: '#fbddff',
    variable: '--ff-bg-lavender-light-color',
  },
  {
    name: 'line-loader-bg-overlay',
    colorCode: '#14041c33',
    variable: '--line-loader-background-overlay',
  },
  {
    name: 'nlp-header-bg-color',
    colorCode: '#F4EDF9',
    variable: '--nlp-header-bg-color',
  },
];

export default ColorPalette;
