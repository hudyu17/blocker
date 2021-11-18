var itemsStorage = localStorage.getItem('items');

if (itemsStorage == null) {
    const items = [];
    const itemsStr = JSON.stringify(items);
    localStorage.setItem('items', itemsStr);
};


//create-todo <- create todo button onclick open ".new-item"
//new-item <- if button pressed it save & hide "new-item"

document.querySelector('.create-todo').addEventListener('click',function(){
    document.querySelector('.new-item').style.display='block';
});
  
document.querySelector('.new-item button').addEventListener('click',function(){
    var itemName = document.querySelector('.new-item input').value;

    if(itemName != ''){    
        var itemsStorage = localStorage.getItem('items');
        var itemsArr = JSON.parse(itemsStorage);
        console.log(itemsArr);
        itemsArr.push({"item":itemName});
        saveItems(itemsArr);
        fetchItems();
        document.querySelector('.new-item input').value='';
        document.querySelector('.new-item').style.display='none';
        // chrome.runtime.reload() // this is janky; reloads the extension so background script refreshes but not ideal
    }
});

function fetchItems(){
    const itemsList = document.querySelector('ul.items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try{
        var itemsStorage = localStorage.getItem('items');
        var itemsArr = JSON.parse(itemsStorage);
        for (var i = 0; i < itemsArr.length; i++) {
            console.log(itemsArr[i]);
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