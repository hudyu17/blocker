function page(){
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

page();