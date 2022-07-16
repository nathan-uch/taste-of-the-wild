import createElement from "./render";

function renderHome () {
    const home = createElement('div', {class: 'row home-page'}, [
        createElement('div', {class: 'col-half'}, [
            createElement('img', {src: '../src/assets/images/link.png', alt:'main character from Zelda video games, Link', class:'link-img'}, [])
        ]),
        createElement('div', {class: 'col-half desc-container'}, [
            createElement('p', {class: 'description'}, [
                `"Taste of the Wild" is the highest rated restaurant in all of Hyrule, founded by the most experienced chef in all the kingdom, chef Link! 
                All ingredients are organic and locally sourced. Chef Link hunts, gathers, fishes and captures all ingredients used in all recipes.
                Chef Link has previous experience as princess Zelda's personal cook! Step in to enjoy all the unique flavors of the wild.`
            ]),
            createElement('div', {class: 'stars-container'}, [
                createElement('h2', {class: 'rating-header'}, ['Hyrule Stars']),
                createElement('img', {src: '../src/assets/images/star.webp', alt: 'star rating 5 out of 5', class: 'stars-rating'}, []),
                createElement('img', {src: '../src/assets/images/star.webp', alt: 'star rating 5 out of 5', class: 'stars-rating'}, []),
                createElement('img', {src: '../src/assets/images/star.webp', alt: 'star rating 5 out of 5', class: 'stars-rating'}, [])
            ]),
            createElement('p', {class: 'quote'}, [
                'I\'ve never tasted anything like this, the ingredients are incredibly fresh and the taste is exquisite.',
                createElement('span', {class: 'quote-author'}, [
                    '- Chef Moza'
                ])
            ])
        ])
    ])
    return home;
};

export default renderHome;