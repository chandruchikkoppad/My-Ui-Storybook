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
];

export default ColorPalette;
