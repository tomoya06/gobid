const validPtns = [
  'AAA',
  'ABC',
  'ABB',
  'ABA',
  'AAB',
  'ABCD',
  'AAAA',
  'ABBB',
  'AABB',
  'AAAB',
  'ABAA',
  'AABA',
  'ABBA',
  'ABAB',
  'AABC',
  'ABCC',
  'ABBC',
  'AAAAA',
  'ABBBB',
  'AABBB',
  'AAABB',
  'AAAAB',
  'ABBBA',
  'ABAAA',
  'AABAA',
  'AAABA',
  'ABABA',
  'AAABC',
  'AABBC',
  'AABCC',
  'ABCCC',
  'ABBCC',
  'ABBBC',
  'ABCBA',
  'AAAAAA',
  'ABBBBB',
  'AABBBB',
  'AAABBB',
  'AAAABB',
  'AAAAAB',
  'ABBABB',
  'ABABAB',
  'AABBCC',
  'ABCCCC',
  'ABBBBC',
  'AAAABC',
  'ABCABC',
  'AAABBBB',
  'AAAABBBB',
  'ABBCBBA',
];

export const abcfunc: PatternFunc = (input) => {
  if (!/^\d+$/.test(input)) {
    return [];
  }

  const visited: Record<string, number> = {};
  let cnt = 1;
  let myptn = '';
  for (let i = 0; i < input.length; i++) {
    if (!visited[input.charAt(i)]) {
      visited[input.charAt(i)] = cnt++;
    }
    myptn += `${String.fromCharCode(visited[input.charAt(i)] + 64)}`;
  }

  if (validPtns.includes(myptn)) {
    return [myptn];
  }

  return [];
};
