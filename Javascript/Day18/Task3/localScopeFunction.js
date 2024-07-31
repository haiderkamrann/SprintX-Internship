let myName = 'Haider: This is global scope'

function localScopeFunction() {
    let myName = 'Haider Kamran: This is local scope!'
    return myName;
}

console.log(localScopeFunction());
console.log(myName)

module.exports = localScopeFunction;