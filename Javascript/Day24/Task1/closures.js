// Write a closure that keeps track of a counter variable and can increment or decrement it

function counter () {
    let count = 1; 

    function increment () {
        for(let i =0; i < count; i++ ){
            count = count + count[i];
        }
        console.log('Count: ', count)
    }

    function decrement () {
        count--;
        console.log('Count Decrement: ', count)
    }
    return {increment, decrement}
}

const getCount = counter();

getCount.increment();
getCount.decrement();

