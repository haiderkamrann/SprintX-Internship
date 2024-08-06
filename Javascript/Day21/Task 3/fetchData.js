// Write an async function that fetches data from an API and logs the results.

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok: Not Found');
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
    }
}

fetchData();

module.exports = fetchData;