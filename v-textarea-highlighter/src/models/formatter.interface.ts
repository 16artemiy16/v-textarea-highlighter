interface FormatterI {
  /** A regexp to find a piece should be highlighted.
   *  Everything that is matched will be subject for highlighting.
   **/
  regexp?: RegExp;

  /** A function to format the text should be highlighted.
   *  It takes the text as a parameter and should return the text with the pieces
   *  need to be highlighted wrapped to the tags `<--v-textarea-highlighter-->` `</--textarea-highlighter-->`.
   *
   *  You can use the markForHighlight() util to wrap the needed pieces.
   *
   *  @example
   *  const textMaxLength = 5;
   *  const text = 'Hello! This is a long string.';
   *
   *  const stripped = text.substr(0, textMaxLength);
   *  const excess = text.substr(textMaxLength);
   *
   *  return stripped + markForHighlight(excess);
   *  // or stripped + MARK_FOR_HIGHLIGHT_TAG_LEFT + excess + MARK_FOR_HIGHLIGHT_TAG_RIGHT;
   *  // or stripped + '<--v-textarea-highlighter-->' + excess + </--textarea-highlighter-->;
   *
   * @param str
   */
  fn?: (str: string) => string;

  /** Highlighting styles. */
  styles: {
    background?: string;
  }
}
