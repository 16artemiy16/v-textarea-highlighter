import { createRegexpFormatter } from '@/utils/create-formatter.utils';

const capitalLetter = (background: string): FormatterI => {
  return createRegexpFormatter(background, /[A-Z]/g);
};

export default capitalLetter;
