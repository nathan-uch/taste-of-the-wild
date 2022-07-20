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
            ])
        ])
    ]);
    return contact
}

export default renderContact;