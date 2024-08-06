// Write a function that fetches data from a URL and handles errors appropriately.

async function fetchData() {
    try {
        let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if(!response.ok){
            throw new Error('Network response was not ok: Not Found');
        }
        let data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
}

fetchData();

module.exports = fetchData;