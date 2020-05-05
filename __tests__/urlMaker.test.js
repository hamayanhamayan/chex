import { getNextUrl, getPrevUrl } from '../chex/urlMaker';

test('get next url', () => {
  expect(getNextUrl('https://atcoder.jp/contests/abc158/tasks/abc158_a')).toBe('https://atcoder.jp/contests/abc158/tasks/abc158_b');

  expect(getNextUrl('https://jp.pornhub.com/video')).toBe('https://jp.pornhub.com/video?page=2');
  expect(getNextUrl('https://jp.pornhub.com/video?page=2')).toBe('https://jp.pornhub.com/video?page=3');
  expect(getNextUrl('https://jp.pornhub.com/video?c=111&o=cm&page=3')).toBe('https://jp.pornhub.com/video?c=111&o=cm&page=4');
  expect(getNextUrl('https://jp.pornhub.com/video?o=ht&cc=jp')).toBe('https://jp.pornhub.com/video?o=ht&cc=jp&page=2');

  expect(getNextUrl('https://yukicoder.me/problems/no/1011')).toBe('https://yukicoder.me/problems/no/1012');

  expect(getNextUrl('https://ctftime.org/tasks/')).toBe('https://ctftime.org/tasks/?page=2');
  expect(getNextUrl('https://ctftime.org/tasks/?page=2')).toBe('https://ctftime.org/tasks/?page=3');
});

test('get prev url', () => {
    expect(getPrevUrl('https://atcoder.jp/contests/abc158/tasks/abc158_b')).toBe('https://atcoder.jp/contests/abc158/tasks/abc158_a');

    expect(getPrevUrl('https://jp.pornhub.com/video?page=2')).toBe('https://jp.pornhub.com/video');
    expect(getPrevUrl('https://jp.pornhub.com/video?page=3')).toBe('https://jp.pornhub.com/video?page=2');
    
    expect(getPrevUrl('https://yukicoder.me/problems/no/1012')).toBe('https://yukicoder.me/problems/no/1011');

    expect(getPrevUrl('https://ctftime.org/tasks/?page=3')).toBe('https://ctftime.org/tasks/?page=2');
    expect(getPrevUrl('https://ctftime.org/tasks/?page=2')).toBe('https://ctftime.org/tasks/');
});