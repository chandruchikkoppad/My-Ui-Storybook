import { CSSProperties } from 'react';
type CardProperties = {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  boxShadow?: string;
  padding?: string;
  margin?: string;
  border?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

type HeaderContentProperties = {
  isHeader?: boolean;
  content?: JSX.Element;
};
type MidContentProperties = {
  isMidContent?: boolean;
  content?: JSX.Element;
};
type FooterContentProperties = {
  isFooter?: boolean;
  content?: JSX.Element;
};

export type CardProps = {
  cardProperties?: CardProperties;
  headerContent?: HeaderContentProperties;
  midContent: MidContentProperties;
  footerContent?: FooterContentProperties;
  isSkeleton?: boolean;
};
