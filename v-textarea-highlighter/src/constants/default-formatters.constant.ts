import limitedLen from '@/formatters/limited-len.formatter';
import capitalLetter from '@/formatters/capital-letter.formatter';

const DEFAULT_FORMATTERS: FormatterI[] = [
  limitedLen('red', 50),
  capitalLetter('green')
];

export default DEFAULT_FORMATTERS;
