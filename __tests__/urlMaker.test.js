import { getNextUrl, getPrevUrl } from '../chex/urlMaker';

test('get next url', () => {
  expect(getNextUrl('https://atcoder.jp/contests/abc158/tasks/abc158_a')).toBe('https://atcoder.jp/contests/abc158/tasks/abc158_b');
});

test('get prev url', () => {
    expect(getPrevUrl('https://atcoder.jp/contests/abc158/tasks/abc158_b')).toBe('https://atcoder.jp/contests/abc158/tasks/abc158_a');
  });