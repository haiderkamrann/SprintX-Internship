document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', search);
});

async function search(){
    const charName = document.getElementById('searchQuery').value;
    
    try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${charName}`)

        const data = await response.json();
        results(data)
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

function results(data) {
    const result = document.getElementById('results');
    result.innerHTML = '';

    const info = `
        <div class = "result-item">
            <h3>Character Name: ${data.results[0].name}</h3>
            <p>Gender: ${data.results[0].gender}</p>
        </div>
    `

    result.innerHTML = info;
}
