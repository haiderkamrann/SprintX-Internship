// Write a script that uses fetch to get data from a public API and logs the response.

function fetchData() {
    try {
        let url = 'https://api.coindesk.com/v1/bpi/currentprice.json' //Public API OF COINDESK - View the Bitcoin Price Index (BPI) in real-time.

        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ERROR: ${response.status}`);
            }
            return response;
        }).then((data) => {
            console.log(data);
        })
    } catch (error) {
        console.log(error)
    }
}

fetchData();