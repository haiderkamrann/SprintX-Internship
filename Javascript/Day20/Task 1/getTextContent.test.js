const {JSDOM} = require('jsdom');
const getTextContent = require('./getTextContent')

// Setting up a mock DOM for testing
beforeAll(function () {
    const html = `
        <html>
            <body>
                <h3 class="methodTwo">getElementByClassName</h3>
                <h4 class="methodThree">This is another class</h4>
            </body>
        </html>
    `;
    const dom = new JSDOM(html);
    global.document = dom.window.document;
});

test('should return the text content of the element with the class name "methodTwo"', () => {
    expect(getTextContent('methodTwo')).toBe('getElementByClassName');
});

test('should return the text content of the first element with the class name "anotherClassName"', () => {
    expect(getTextContent('methodThree')).toBe('This is another class');
});
