// Write a function that creates a JavaScript object and converts it to a JSON string.

function convertToJson(obj) {
    console.log('JS Object: ', obj)
    try {
        const result = JSON.stringify(obj);
        if (result === undefined) {
            return "error";
        }
        console.log('js object to json string: ', result)
        return result;
    } catch (e) {
        return "error";
    }
}

convertToJson({
    name:'haider',
    age: 23
})

module.exports = convertToJson;