const { JSDOM } = require('jsdom');
const addItem = require('./appendListItem');

beforeAll(() => {
    const html = `
        <html>
            <body>
                <ul id="list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <button onclick="addItem()">Add Item</button>
                <script>
                    function addItem() {
                        const ul = document.getElementById('list');
                            if (ul) {
                                const newLi = document.createElement('li');
                                newLi.textContent = 'Jquery';
                                ul.appendChild(newLi);
                    } 
                }
                </script>
            </body>
        </html>
    `;

    const dom = new JSDOM(html);
    global.document = dom.window.document;
});

test('should append a new item to the list when called for the first time', () => {
    addItem();

    const ul = document.getElementById('list');
    const items = ul.getElementsByTagName('li');
    const lastItem = items[items.length - 1].textContent;

    expect(lastItem).toBe('Jquery');
});
