const DEFAULT_FORMATTERS: FormatterI[] = [
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
  }
];

export default DEFAULT_FORMATTERS;
