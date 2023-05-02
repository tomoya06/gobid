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
  // 'ABCDE',
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

const fn: PatternFunc = (input) => {
  const visited: Record<string, number> = {};
  let cnt = 0;
  let myptn = '';
  for (let i = 0; i < input.length; i++) {
    if (!visited[input.charAt(i)]) {
      visited[input.charAt(i)] = cnt++;
    }
    myptn += `${String.fromCharCode(visited[input.charAt(i)] + 65)}`;
  }

  if (validPtns.includes(myptn)) {
    return [myptn];
  }

  return [];
};
