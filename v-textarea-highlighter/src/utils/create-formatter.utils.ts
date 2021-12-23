export const createFnFormatter = (background: string, fn: (str: string) => string): FormatterI => {
  return {
    fn,
    styles: { background },
  };
};

export const createRegexpFormatter = (background: string, regexp: RegExp): FormatterI => {
  return {
    regexp,
    styles: { background },
  };
};
