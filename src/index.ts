import * as allfuncs from './patterns/index';

function getBaseInput(name: string): string {
  return /^(.+)\.bit$/.exec(name)?.[1] || '';
}

export function detectPatterns(name: string): Set<string> {
  const output = new Set<string>();
  const input = getBaseInput(name);
  if (!input) {
    return output;
  }

  const funcs = Object.keys(allfuncs);
  for (const func of funcs) {
    const res = (allfuncs as { [key: string]: PatternFunc })[func](input);
    res.forEach((r) => output.add(r));
  }

  return output;
}
