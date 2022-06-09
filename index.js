const menuItems = document.querySelectorAll(".menu-items");
const sections = document.querySelectorAll(".sections")
function handleClick(target, elements){
    const targetClasses = target.className; 
    let targetName = targetClasses.replace("menu-items", "");

    console.log(`clicked ${targetName}`);

    elements.forEach((element) => {
        let elementClasses = element.className; 
        let elementName = elementClasses.replace("sections", "");

        if(targetName === elementName){
            element.hidden = false;
        }
        else{
            element.hidden = true;
        }

        console.log(`iterating over ${elementName}`);
    });
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", ()=>{
        handleClick(menuItem, sections);
    });
});