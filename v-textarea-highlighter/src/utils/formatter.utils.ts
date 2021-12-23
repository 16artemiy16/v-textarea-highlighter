import { MARK_FOR_HIGHLIGHT_TAG_LEFT, MARK_FOR_HIGHLIGHT_TAG_RIGHT } from '@/constants/mark-for-highlight-tag.constant';

export const applyFormatter = (text: string, formatter: FormatterI): string => {
  const { regexp, styles, fn } = formatter;
  const styleString = Object
    .entries(styles)
    .map(([key, value]) => `${key}: ${value} !important`)
    .join(';');
  const styleAttribute = `style='${styleString}'`;

  if (regexp) {
    return text.replace(regexp, `<mark ${styleAttribute}>$&</mark>`);
  }

  if (fn) {
    const textWithMarks = fn(text);
    return textWithMarks
      .replace(MARK_FOR_HIGHLIGHT_TAG_LEFT, `<mark ${styleAttribute}>`)
      .replace(MARK_FOR_HIGHLIGHT_TAG_RIGHT, `</mark>`);
  }

  return text;
};

export const applyFormatters = (text: string, formatters: FormatterI[]): string => {
  let formattedText = text;
  formatters.forEach((f) => {
    formattedText = applyFormatter(formattedText, f);
  });
  return formattedText;
};
