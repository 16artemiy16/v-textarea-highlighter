import markForHighlight from '@/utils/mark-for-highlight.util';

const DEFAULT_FORMATTERS: FormatterI[] = [
  {
    fn: (text) => {
      const textMaxLength = 15;

      const stripped = text.substr(0, textMaxLength);
      const excess = text.substr(textMaxLength);

      return stripped + markForHighlight(excess);
    },
    styles: {
      background: 'pink',
    },
  },
  /** Every word starting from capital letter. **/
  {
    regexp: /[A-Z].*?\b/g,
    styles: {
      background: 'yellow',
    },
  },
  /** Every capital letter **/
  {
    regexp: /[A-Z]/g,
    styles: {
      background: 'lightpink'
    }
  },
];

export default DEFAULT_FORMATTERS;
