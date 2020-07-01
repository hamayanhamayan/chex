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
  
  expect(getNextUrl('https://codeforces.com/contest/1352/problem/A')).toBe('https://codeforces.com/contest/1352/problem/B');

  expect(getNextUrl('https://example.com/aabbtasks/test')).toBe('https://example.com/aabbtasks/test?page=2');
  expect(getNextUrl('https://example.com/aabbtasks/test?page=2')).toBe('https://example.com/aabbtasks/test?page=3');

  
  expect(getNextUrl('https://jp.redtube.com/hot?cc=jp')).toBe('https://jp.redtube.com/hot?cc=jp&page=2');
  expect(getNextUrl('https://www.xnxx.com/search/schoolgirl')).toBe('https://www.xnxx.com/search/schoolgirl/2');
  expect(getNextUrl('https://www.xnxx.com/search/schoolgirl/3')).toBe('https://www.xnxx.com/search/schoolgirl/4');

  expect(getNextUrl('https://www.xvideos.com/?k=jk')).toBe('https://www.xvideos.com/?k=jk&p=2');
  expect(getNextUrl('https://www.xvideos.com/?k=jk&p=2')).toBe('https://www.xvideos.com/?k=jk&p=3');
});

test('get prev url', () => {
    expect(getPrevUrl('https://atcoder.jp/contests/abc158/tasks/abc158_b')).toBe('https://atcoder.jp/contests/abc158/tasks/abc158_a');

    expect(getPrevUrl('https://jp.pornhub.com/video?page=2')).toBe('https://jp.pornhub.com/video');
    expect(getPrevUrl('https://jp.pornhub.com/video?page=3')).toBe('https://jp.pornhub.com/video?page=2');
    
    expect(getPrevUrl('https://yukicoder.me/problems/no/1012')).toBe('https://yukicoder.me/problems/no/1011');

    expect(getPrevUrl('https://ctftime.org/tasks/?page=3')).toBe('https://ctftime.org/tasks/?page=2');
    expect(getPrevUrl('https://ctftime.org/tasks/?page=2')).toBe('https://ctftime.org/tasks/');

    expect(getPrevUrl('https://codeforces.com/contest/1352/problem/B')).toBe('https://codeforces.com/contest/1352/problem/A');

    expect(getPrevUrl('https://example.com/aabbtasks/test?page=2')).toBe('https://example.com/aabbtasks/test');
    expect(getPrevUrl('https://example.com/aabbtasks/test?page=3')).toBe('https://example.com/aabbtasks/test?page=2');
    expect(getPrevUrl('https://jp.redtube.com/hot?cc=jp&page=2')).toBe('https://jp.redtube.com/hot?cc=jp');

    expect(getPrevUrl('https://www.xnxx.com/search/schoolgirl/4')).toBe('https://www.xnxx.com/search/schoolgirl/3');
    expect(getPrevUrl('https://www.xvideos.com/?k=jk&p=3')).toBe('https://www.xvideos.com/?k=jk&p=2');
});