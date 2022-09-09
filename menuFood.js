
// set datetime
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('dt').value = now.toISOString().slice(0, 16);

// food-menu

function openMenu(evt, namefood){
    var i, tabfoods, foods
    foods = document.getElementsByClassName('food')
    for(i = 0; i < foods.length; i++){
        foods[i].style.display = 'none'  
    }
    tabfoods =document.getElementsByClassName('tabfood')
    for(i = 0; i < foods.length; i++){
        tabfoods[i].className = tabfoods[i].className.replace(' back-color','')
    }
    document.getElementById(namefood).style.display = 'block'
    evt.currentTarget.className += ' back-color'
}
