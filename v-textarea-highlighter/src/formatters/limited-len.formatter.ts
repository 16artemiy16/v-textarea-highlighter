import markForHighlight from '@/utils/mark-for-highlight.util';
import { createFnFormatter } from '@/utils/create-formatter.utils';

const limitedLen = (background: string, len: number): FormatterI => {
  return createFnFormatter(background, (text) => {
    const stripped = text.substr(0, len);
    const excess = text.substr(len);

    return stripped + markForHighlight(excess);
  });
};

export default limitedLen;
