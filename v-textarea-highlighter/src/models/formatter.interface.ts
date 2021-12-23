interface FormatterI {
  /** A regexp to find a piece should be highlighted.
   *  Everything that is matched will be subject for highlighting.
   **/
  regexp?: RegExp;

  fn?: (str: string) => string;

  /** Highlighting styles. */
  styles: {
    background?: string;
  }
}
