import createElement from "./render";

function renderMenu() {
    const menu = createElement('div', {class: 'menu-page page'}, [
        createElement('div', { class: 'row menu-header'}, [
            createElement('div', {class: 'col-full menu-title'}, ['Menu'])
        ]),
        createElement('div', {class: 'row appetizer-row'}, [
            createElement('div', {class: 'col-full appetizer-title'}, ['Appetizers']),
            createElement('div', { class: 'col-full appetizer-items'}, [
                createElement('div', {id: 'appetizer-1'}, [
                    createElement('img', {id: 'app-img-1', href:'../src/assets/images/clam-chowder.webp', alt:'clam chowder soup'}, []),
                    createElement('div', {class: 'app-1'}, [
                        createElement('h3', {class: 'app-name'}, ['Clam Chowder']),
                        createElement('p', {class: 'app-price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '13'
                        ])
                    ])
                ])
            ])
        ]) 
    ]); 
    return menu;
}

export default renderMenu
