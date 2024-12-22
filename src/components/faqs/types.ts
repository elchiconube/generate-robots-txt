export interface CodeBlockProps {
  code: string;
  label?: string;
  isError?: boolean;
}

export interface ListItemsProps {
  items: string[];
  title?: string;
}

export interface Link {
  text: string;
  url: string;
}

export interface LinksProps {
  links: Link[];
}

export interface CodeBlockData {
  code: string;
  label: string;
  isError?: boolean;
}

export interface FaqItem {
  title: string;
  text: string;
  additionalText?: string;
  secondaryText?: string;
  secondaryCode?: string;
  code?: string;
  listTitle?: string;
  listItems?: string[];
  codeBlocks?: CodeBlockData[];
  links?: Link[];
}

export interface AnimatedFaqCardProps {
  faq: FaqItem;
  index: number;
}