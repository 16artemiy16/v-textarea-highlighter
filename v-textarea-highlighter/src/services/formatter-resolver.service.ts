import capitalLetter from '@/formatters/capital-letter.formatter';
import limitedLen from '@/formatters/limited-len.formatter';

export const CAPITAL = 'capital';
export const LIMITED = 'limited';

export default {
  resolveList(formatters: any[]) {
    const resolved = [];
    formatters.forEach((item) => {
      const [name, ...args] = item;
      resolved.push(this.resolve(name, ...args));
    });
    return resolved;
  },
  resolve(name: string, ...args: any[]) {
    const [background, ...subArgs] = args

    if (name === CAPITAL) {
      return capitalLetter(background);
    }
    if (name === LIMITED) {
      const [len] = subArgs;
      if (!len) {
        throw Error(`The len parameter should be set for ${LIMITED} formatter.`)
      }
      return limitedLen(background, len)
    }

    throw Error(`The formatter does not exist - ${name}. Available: ${[CAPITAL, LIMITED].join(',')}`);
  }
};
