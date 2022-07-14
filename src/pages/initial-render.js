import createElement from './render';

const initialRender = (() => {
    
    function renderSkeleton() {
        const ele = createElement('div', { class: 'background-img' }, [
            createElement('div', {class: 'row'}, [
                createElement('h1', {class: 'logo-text'}, ['Taste of the Wild'])
            ]),
            createElement('div', {class: 'row navbar-container'}, [
                createElement('div', {class: 'col navbar'}, [
                    createElement('a', {class: 'page-link home-link', href: '#'}, [
                        createElement('img', {src: '../src/assets/images/slate.webp', alt:'sheika slate icon', class:'slate-icon'}, ['Home']),
                        createElement('img', {src: '../src/assets/images/meat.webp', alt:'meat icon', class:'meat-icon'}, ['Menu']),
                        createElement('img', {src: '../src/assets/images/sheika.webp', alt:'fairy icon', class:'fairy-icon'}, ['Contact']),
                    ]),
                ]),
            ]),
            createElement('div', {class: 'row home-page'}, [
                createElement('div', {class: 'col'}, [
                    createElement('p', {class: 'description'}, ['The best restaurant in the kingdom of Hyrule by the most experienced cook, Link! All ingredients are organic and naturally sourced by the very own cook. He has previously cooked for the royal princess of Hyrule.'])
                ])
            ])
        ])
        return ele;
    };

    return {
        renderSkeleton
    }
})();