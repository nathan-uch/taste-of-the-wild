import createElement from './render';

function renderTop() {
    const ele = createElement('div', { class: 'background-img' }, [
        createElement('div', {class: 'row'}, [
            createElement('h1', {class: 'col logo-text'}, ['Taste of the Wild'])
        ]),
        createElement('div', {class: 'row navbar-container'}, [
            createElement('div', {class: 'col navbar'}, [
                createElement('a', {class: 'page-link home-link selected', href: '#'}, [
                    createElement('img', {src: '../src/assets/images/slate.webp', alt:'sheika slate icon', class:'slate-icon'}, []),
                'Home']),
                createElement('a', {class: 'page-link home-link', href: '#'}, [
                    createElement('img', {src: '../src/assets/images/meat.webp', alt:'meat icon', class:'meat-icon'}, []),
                'Menu']),
                createElement('a', {class: 'page-link home-link', href: '#'}, [
                    createElement('img', {src: '../src/assets/images/fairy.webp', alt:'fairy icon', class:'fairy-icon'}, []),
                'Contact'])
            ])
        ])
    ])
    return ele;
};


export default renderTop;