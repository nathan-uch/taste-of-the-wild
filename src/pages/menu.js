import createElement from "./render";

function renderMenu() {
    const menu = createElement('div', {class: 'row menu-page', [
        createElement('div', {}, [])
    ]}); 
    return menu;
}

export default renderMenu
