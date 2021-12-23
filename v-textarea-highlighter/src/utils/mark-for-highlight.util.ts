import { MARK_FOR_HIGHLIGHT_TAG_LEFT, MARK_FOR_HIGHLIGHT_TAG_RIGHT } from '@/constants/mark-for-highlight-tag.constant';

const markForHighlight = (str: string): string => MARK_FOR_HIGHLIGHT_TAG_LEFT + str + MARK_FOR_HIGHLIGHT_TAG_RIGHT;

export default markForHighlight;
