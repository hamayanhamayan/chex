import { getNextUrl } from '../chex/urlMaker';

test('get next url', () => {
  expect(getNextUrl('https://atcoder.jp/contests/abc158/tasks/abc158_a')).toBe('https://atcoder.jp/contests/abc158/tasks/abc158_b');
});