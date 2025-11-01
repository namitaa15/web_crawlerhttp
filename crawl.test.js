const {normalizeURL} = require('./crawl.js');
const {test,expect} = require('@jest/globals');

test('normalizeURL strip protocol', ()=> {
    const input = 'https://namita.buchku.dev/path'
    const actual = normalizeURL(input)
    const expected = 'namita.buchku.dev/path'
    expect(actual).toEqual(expected)


} );

test('normalizeURL strip traling slash', ()=> {
    const input = 'https://namita.buchku.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'namita.buchku.dev/path'
    expect(actual).toEqual(expected)
} );

test('normalizeURL capitals', ()=> {
    const input = 'https://NAMITA.buchku.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'namita.buchku.dev/path'
    expect(actual).toEqual(expected)
} );

test('normalizeURL strip http', ()=> {
    const input = 'http://namita.buchku.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'namita.buchku.dev/path'
    expect(actual).toEqual(expected)
} );
