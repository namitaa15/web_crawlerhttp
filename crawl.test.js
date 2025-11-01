const {normalizeURL,getURLsfromHTML} = require('./crawl.js');
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

test('getURLsfromHTML', ()=> {
    const inputHTMLBody =
    `
    <html>
        <body>
        <a href="https://namita.buchku.dev/">
        Namita Blog
        </a>
        </body>
    </html>
    `
    const inputBaseURL = "http://namita.buchku.dev"
    const actual = getURLsfromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://namita.buchku.dev/"]
    expect(actual).toEqual(expected)
} );

test('getURLsfromHTML absolute', ()=> {
    const inputHTMLBody =
    `
    <html>
        <body>
        <a href="https://namita.buchku.dev/path/">
        Namita Blog
        </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://namita.buchku.dev/path/"
    const actual = getURLsfromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://namita.buchku.dev/path/"]
    expect(actual).toEqual(expected)
} );

test('getURLsfromHTML relative', ()=> {
    const inputHTMLBody =
    `
    <html>
        <body>
        <a href="/path/">
        Namita Blog
        </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://namita.buchku.dev"
    const actual = getURLsfromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://namita.buchku.dev/path/"]
    expect(actual).toEqual(expected)
} );

test('getURLsfromHTML both', ()=> {
    const inputHTMLBody =
    `
    <html>
        <body>
        <a href="/path1/">
        Namita Blog path 1
        </a>
        <a href="https://namita.buchku.dev/path2/">
        Namita Blog
        </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://namita.buchku.dev"
    const actual = getURLsfromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://namita.buchku.dev/path1/","https://namita.buchku.dev/path2/"]
    expect(actual).toEqual(expected)
} );

test('getURLsfromHTML invalid', ()=> {
    const inputHTMLBody =
    `
    <html>
        <body>
        <a href="invalid">
        Invalid url
        </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://namita.buchku.dev"
    const actual = getURLsfromHTML(inputHTMLBody,inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
} );