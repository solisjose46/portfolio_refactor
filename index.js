const menuItems = document.querySelectorAll(".menu-items");
function handleClick(target, elements){
    elements.forEach((element) => {
        console.log(element);
    });
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", ()=>{
        handleClick(menuItem, menuItems);
    });
});