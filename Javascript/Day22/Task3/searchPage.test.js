const { JSDOM } = require('jsdom');
const searchData = require('./searchPage');

global.fetch = jest.fn(() => {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
    });
});

let dom;

beforeEach(() => {
    fetch.mockClear();

    dom = new JSDOM(`
        <input id='searchQuery' value='London' /> 
        <button id="searchButton">Search</button>
        <div id="results"></div>
    `);

    global.document = dom.window.document;
    global.window = dom.window;

    global.results = jest.fn();

    document.addEventListener('DOMContentLoaded', () => {
        const searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', searchData);
    });
});

describe('searchData', () => {
    it('should fetch data successfully', async () => {
        const mockData = {
            name: 'London',
            sys: { country: 'GB' },
            main: { temp: 15, humidity: 80 },
            weather: [{ description: 'clear sky' }]
        };

        fetch.mockImplementationOnce(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData),
        }));

        await searchData();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7098d82d960697ea4654e8027c192b7c');

        expect(global.results).toHaveBeenCalledWith(mockData);
    });

    it('no result found', async () => {
        const mockData = {};

        fetch.mockImplementationOnce(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockData),
        }));

        await searchData();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7098d82d960697ea4654e8027c192b7c');

        expect(global.results).toHaveBeenCalledWith(mockData);
    })

    it('api error', async () => {
        fetch.mockImplementationOnce(() => Promise.reject(new Error('API error')));
    
        try {
            await searchData();
        } catch (error) {
            console.log('error', error.message)
        }
    
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7098d82d960697ea4654e8027c192b7c');
    
        expect(global.results).not.toHaveBeenCalled();
    });
    
});
