export const applyFormatter = (text: string, formatter: FormatterI): string => {
  const { regexp, styles } = formatter;
  const styleString = Object.entries(styles).map(([key, value]) => `${key}: ${value} !important`).join(';');
  const styleAttribute = `style='${styleString}'`;

  if (regexp) {
    return text.replace(regexp, `<mark ${styleAttribute}>$&</mark>`);
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
