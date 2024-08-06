//Write a script that parses a JSON string and logs the resulting object.

// async function jsonParsing() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//         if (!response.ok) {
//             throw new Error('Error in fetching data!');
//         }

//         const data = await response.json();
//         const JSONstringify = JSON.stringify(data); // This will convert the data into string, the data from api is in json. 
//         console.log('JSON Object to String: ', JSONstringify);

//         const JSONparse = JSON.parse(JSONstringify);
//         console.log('JSON String to Object: ', JSONparse);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

function jsonParsing(){
    const jsonStr =  '{"name":"haider","age":23}' ;
    console.log('JSON STRING: ', jsonStr)
    let jsonObj = JSON.parse(jsonStr)
    console.log('OBJECT: ', jsonObj)
    return jsonObj;
}

jsonParsing();

module.exports = jsonParsing;