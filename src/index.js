import renderTop from './pages/top';
import renderHome from './pages/home';
import renderMenu from './pages/menu';
import renderContact from './pages/contact';
renderPage();

function renderPage() {
    const content = document.getElementById('content');
    
    content.appendChild(renderTop());

    const $links = document.querySelectorAll('.page-link');
    let lastLink = null;
    let curLink = null;
    const $navbar = document.querySelector('.navbar');

    if (lastLink === null) {
        content.appendChild(renderHome());
        lastLink = document.querySelector('.home-link');
    }

    $navbar.addEventListener('click', event => {
        if (event.target.tagName === 'A' || event.target.tagName === 'IMG'){
            lastLink.classList.remove('selected');
            curLink = event.target.closest('.page-link');
            curLink.classList.add('selected');
            const page = document.querySelector('.page');
            if (curLink.getAttribute('data-view') === 'page-1' && lastLink !== curLink) {
                content.removeChild(page);
                content.appendChild(renderHome());
            } else if (curLink.getAttribute('data-view') === 'page-2' && lastLink !== curLink) {
                content.removeChild(page);
                content.appendChild(renderMenu());
            } else if (curLink.getAttribute('data-view') === 'page-3' && lastLink !== curLink) {
                content.removeChild(page);
                content.appendChild(renderContact());
            }
            lastLink = curLink;
        }
    })
}