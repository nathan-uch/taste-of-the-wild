import createElement from "./render";

function renderContact() {
    const contact = createElement('div', {class: 'row contact-page page'}, [
        createElement('div', {class: 'col-full'}, [
            createElement('div', {class: 'contact-details'}, [
                createElement('p', {class: 'details'}, ['Headquarters Address: ']),
                createElement('p', {class: 'details'}, [' Temple of Time, Hyrule'])
            ]),
            createElement('div', {class: 'contact-details'}, [
                createElement('p', {class: 'details'}, ['Phone: ']),
                createElement('p', {class: 'details'}, [' +123 (45) 6789-1011'])
            ]),
            createElement('div', {class: 'contact-details'}, [
                createElement('p', {class: 'details'}, ['Email: ']),
                createElement('p', {class: 'details'}, [' contact@tasteofthewild.com'])
            ]),
            createElement('h3', {class: 'locations-title'}, ['Locations:']),
            createElement('ul', {class:'locations-list'}, [
                createElement('li', {}, ['Hateno Village']),
                createElement('li', {}, ['Kakariko Village']),
                createElement('li', {}, ['Tarrey Town']),
                createElement('li', {}, ['Rito Village']),
                createElement('li', {}, ['Lurelin Village']),
                createElement('li', {}, ['Gerudo Town (women only)']),
                createElement('li', {}, [
                    createElement('span', {class: 'hyrule-castle'}, ['Hyrule Castle']),
                    ' (Permenantly Closed)'
                ]),
            ]),
            createElement('h3', {class: 'locations-title'}, ['Coming Soon']),
            createElement('ul', {class:'coming-soon'}, [
                createElement('li', {}, ['Korok Forest']),
                createElement('li', {}, ['Zora\'s Domain']),
            ]),
            createElement('h3', {class:'credits-header'}, ['Credits']),
            createElement('div', {class: 'credits-details'}, [
                createElement('p', {class: 'credits'}, ['Font: ']),
                createElement('a', {class: 'credits', href:'https://artsyomni.com/hyliaserif/download'}, ['Hylia Serif by Omni Jacala'])
            ]),
            createElement('div', {class: 'credits-details'}, [
                createElement('p', {class: 'credits'}, ['Background Image: ']),
                createElement('a', {class: 'credits', href: 'https://wall.alphacoders.com/big.php?i=716166'}, ['AlphaCoders'])
            ]),
            createElement('div', {class: 'credits-details'}, [
                createElement('p', {class: 'credits'}, ['Item Images: ']),
                createElement('a', {class: 'credits', href:'https://zelda.fandom.com/wiki/Category:Breath_of_the_Wild_Sprites?fileuntil=BotW+Chillfin+Trout+Icon.png#mw-category-media'}, ['Zelda Fandom'])
            ])
        ])
    ]);
    return contact
}

export default renderContact;