// document.addEventListener('DOMContentLoaded', function () {
//     let itemAdded = false; 

//     function addItem() {
//         const ul = document.getElementById('list');
//         if (ul) {
//             if (!itemAdded) { 
//                 const newLi = document.createElement('li');
//                 newLi.textContent = 'Jquery';
//                 ul.appendChild(newLi);
//                 itemAdded = true; 
//             } else {
//                 alert('Item has already been added.');
//             }
//         } else {
//             console.error('The unordered list element with id "list" does not exist.');
//         }
//     }

//     window.addItem = addItem;
// });

function addItem() {
    const ul = document.getElementById('list');
    if (ul) {
        const newLi = document.createElement('li');
        newLi.textContent = 'Jquery';
        ul.appendChild(newLi);
    }
}

module.exports = addItem;