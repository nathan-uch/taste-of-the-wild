import createElement from "./render";

function renderMenu() {
    const menu = createElement('div', {class: 'menu-page page'}, [
        createElement('div', {class: 'row appetizer-row'}, [
            createElement('div', {class: 'col-full appetizer-title'}, ['Appetizers']),
            createElement('div', { class: 'col-full appetizer-items'}, [
                createElement('div', {class: 'app-dish'}, [
                    createElement('img', {id: 'app-img-1', src:'../src/assets/images/clam-chowder.webp', alt:'clam chowder soup'}, []),
                    createElement('div', {class: 'app-1'}, [
                        createElement('h3', {class: 'app-name'}, ['Clam Chowder']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '8'
                        ])
                    ])
                ]),
                createElement('div', {class: 'app-dish'}, [
                    createElement('img', {id: 'app-img-2', src:'../src/assets/images/meat-pie.webp', alt:'Meat Pie'}, []),
                    createElement('div', {class: 'app-2'}, [
                        createElement('h3', {class: 'app-name'}, ['Meat Pie']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '9'
                        ])
                    ])
                ]),
                createElement('div', {class: 'app-dish'}, [
                    createElement('img', {id: 'app-img-3', src:'../src/assets/images/spiced-meat-skewer.png', alt:'Spiced Meat Skewer'}, []),
                    createElement('div', {class: 'app-3'}, [
                        createElement('h3', {class: 'app-name'}, ['Spiced Meat Skewer']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '12'
                        ])
                    ])
                ])
            ])
        ]),
        createElement('div', {class: 'row entree-row'}, [
            createElement('div', {class: 'col-full entree-title'}, ['Entrées']),
            createElement('div', { class: 'col-full entree-items'}, [
                createElement('div', {class: 'entree-dish'}, [
                    createElement('img', {id: 'entree-img-1', src:'../src/assets/images/vegetable-risotto.png', alt:'vegetable risotto'}, []),
                    createElement('div', {class: 'entree-1'}, [
                        createElement('h3', {class: 'entree-name'}, ['Vegetable Risotto']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '17'
                        ])
                    ])
                ]),
                createElement('div', {class: 'entree-dish'}, [
                    createElement('img', {id: 'entree-img-2', src:'../src/assets/images/gourmet-meat-rice-bowl.webp', alt:'Meat and rice bowl'}, []),
                    createElement('div', {class: 'entree-2'}, [
                        createElement('h3', {class: 'entree-name'}, ['Meat and Rice Bowl']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '18'
                        ])
                    ])
                ]),
                createElement('div', {class: 'entree-dish'}, [
                    createElement('img', {id: 'entree-img-3', src:'../src/assets/images/mushroom-saute.webp', alt:'Mushroom Sauté (vegetarian)'}, []),
                    createElement('div', {class: 'entree-3'}, [
                        createElement('h3', {class: 'entree-name'}, ['Mushroom Sauté']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '17'
                        ])
                    ])
                ]),
                createElement('div', {class: 'entree-dish'}, [
                    createElement('img', {id: 'entree-img-4', src:'../src/assets/images/salt-grilled-crab.png', alt:'Salted grilled crab'}, []),
                    createElement('div', {class: 'entree-4'}, [
                        createElement('h3', {class: 'entree-name'}, ['Salted Grilled Crab']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '22'
                        ])
                    ])
                ]),
                createElement('div', {class: 'entree-dish'}, [
                    createElement('img', {id: 'entree-img-5', src:'../src/assets/images/grilled_sea_bass.webp', alt:'Grilled Sea Bass'}, []),
                    createElement('div', {class: 'entree-5'}, [
                        createElement('h3', {class: 'entree-name'}, ['Grilled Sea Bass']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '20'
                        ])
                    ])
                ]),
                createElement('div', {class: 'entree-dish'}, [
                    createElement('img', {id: 'entree-img-6', src:'../src/assets/images/grilled-gourmet-meat.png', alt:'Grilled Steak'}, []),
                    createElement('div', {class: 'entree-6'}, [
                        createElement('h3', {class: 'entree-name'}, ['Grilled Steak']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '25'
                        ])
                    ])
                ])
            ])
        ]),
        createElement('div', {class: 'row dessert-row'}, [
            createElement('div', {class: 'col-full dessert-title'}, ['Desserts']),
            createElement('div', { class: 'col-full dessert-items'}, [
                createElement('div', {class: 'dessert-dish'}, [
                    createElement('img', {id: 'dessert-img-1', src:'../src/assets/images/fruitcake.webp', alt:'fruitcake'}, []),
                    createElement('div', {class: 'dessert-1'}, [
                        createElement('h3', {class: 'dessert-name'}, ['Fruitcake']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '6'
                        ])
                    ])
                ]),
                createElement('div', {class: 'dessert-dish'}, [
                    createElement('img', {id: 'dessert-img-2', src:'../src/assets/images/pumpkin-pie.webp', alt:'Pumpkin pie'}, []),
                    createElement('div', {class: 'dessert-2'}, [
                        createElement('h3', {class: 'dessert-name'}, ['Pumpkin Pie']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '7'
                        ])
                    ])
                ]),
                createElement('div', {class: 'dessert-dish'}, [
                    createElement('img', {id: 'dessert-img-3', src:'../src/assets/images/wildberry_crepe.png', alt:'Wildberry Crepe'}, []),
                    createElement('div', {class: 'dessert-3'}, [
                        createElement('h3', {class: 'dessert-name'}, ['Wildberry Crepe']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '7'
                        ])
                    ])
                ])
            ])
        ]),
        createElement('div', {class: 'row chef-specials-row'}, [
            createElement('div', {class: 'col-full chef-specials-title'}, ['Chef\'s Special']),
            createElement('div', { class: 'col-full chef-specials-items'}, [
                createElement('div', {class: 'chef-specials-dish'}, [
                    createElement('img', {id: 'chef-specials-img-1', src:'../src/assets/images/monster-cake.webp', alt:'monster cake'}, []),
                    createElement('div', {class: 'chef-specials-1'}, [
                        createElement('h3', {class: 'chef-specials-name'}, ['Monster Cake']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '8'
                        ])
                    ])
                ]),
                createElement('div', {class: 'chef-specials-dish'}, [
                    createElement('img', {id: 'chef-specials-img-2', src:'../src/assets/images/rock-hard-food.webp', alt:'Rock hard food'}, []),
                    createElement('div', {class: 'chef-specials-2'}, [
                        createElement('h3', {class: 'chef-specials-name'}, ['Rock Hard Food']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '9'
                        ])
                    ])
                ]),
                createElement('div', {class: 'chef-specials-dish'}, [
                    createElement('img', {id: 'chef-specials-img-3', src:'../src/assets/images/dubious-food.png', alt:'dubious food'}, []),
                    createElement('div', {class: 'chef-specials-3'}, [
                        createElement('h3', {class: 'chef-specials-name'}, ['Dubious Food']),
                        createElement('p', {class: 'price'}, [
                            createElement('img', {src:'../src/assets/images/rupee.webp', alt:'Rupee Image', class: 'currency'}, []),
                            '12'
                        ])
                    ])
                ])
            ])
        ])
    ]); 
    return menu;
}

export default renderMenu
