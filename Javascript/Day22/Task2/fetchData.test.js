const fetchData = require('./fetchData');
global.fetch = jest.fn();

describe('fetchData', () => {
    afterEach(() => {
        fetch.mockClear();
    });

    it('should log and return data when the API response is successful', async () => {
        const mockData = { message: 'success' };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        console.log = jest.fn();

        const data = await fetchData('https://api.coindesk.com/v1/bpi/currentprice.json');
        expect(data).toEqual(mockData);
        expect(console.log).toHaveBeenCalledWith(mockData);
    });

    it('should throw an error and log it when the API response is unsuccessful', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            statusText: 'Not Found',
        });

        console.error = jest.fn();

        await expect(fetchData('https://api.coindesk.com/v1/bpi/currentprice.json')).rejects.toThrow(
            'Network response was not ok: Not Found'
        );

        expect(console.error).toHaveBeenCalledWith(
            'Fetch Error:',
            new Error('Network response was not ok: Not Found')
        );
    });

    it('should throw an error and log it when a network error occurs', async () => {
        const networkError = new Error('Network Error');
        fetch.mockRejectedValueOnce(networkError);

        console.error = jest.fn();

        await expect(fetchData('https://api.coindesk.com/v1/bpi/currentprice.json')).rejects.toThrow('Network Error');

        expect(console.error).toHaveBeenCalledWith('Fetch Error:', networkError);
    });

    it('should handle an empty response gracefully', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => null,
        });

        console.log = jest.fn();

        const data = await fetchData('https://api.coindesk.com/v1/bpi/currentprice.json');
        expect(data).toBeNull();
        expect(console.log).toHaveBeenCalledWith(null);
    });

});


