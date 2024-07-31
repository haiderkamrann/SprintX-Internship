const { JSDOM } = require('jsdom');

let dom;
let input;

beforeAll(() => {
    const html = `
        <html>
            <body>
                <p>Logs the value in console as user types!</p>
                <input type="text" id="inputBox">
                <script>
                    // Event listener to log key presses
                    const input = document.getElementById('inputBox');
                    input.addEventListener('keydown', (e) => {
                        const keyString = e.key.toString();
                        console.log(keyString);
                    });
                </script>
            </body>
        </html>
    `;

    dom = new JSDOM(html, { runScripts: "dangerously" });

    const { window } = dom;
    global.document = window.document;
    global.window = window;
    input = document.getElementById('inputBox');
});

test('should output "a" on console on keypress', () => {
    console.log = jest.fn();
    const event = new window.KeyboardEvent('keydown', { key: 'a' });
    input.dispatchEvent(event);
    expect(console.log).toHaveBeenCalledWith('a');
});
