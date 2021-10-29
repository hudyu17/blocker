const items = [{"item": "espn.com"}];

const itemsStr = JSON.stringify(items);

localStorage.setItem('items', itemsStr);

function fetchItems(){
    const itemsList = document.querySelector('ul.items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try{
        var items = localStorage.getItem('items');
        var itemsArr = JSON.parse(items);
        for (var i = 0; i < itemsArr.length; i++) {
            newItemHTML += `<li>${itemsArr[i].item}</li>`;
        }

        itemsList.innerHTML = newItemHTML;
    } catch(e) {
    };
};

function saveItems(obj){
    var string = JSON.stringify(obj);
    localStorage.setItem('items', string);
};

fetchItems();