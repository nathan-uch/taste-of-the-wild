import renderTop from './pages/top';
import renderHome from './pages/home';

renderPage();

function renderPage() {
    const content = document.getElementById('content');
    
    content.appendChild(renderTop());
    content.appendChild(renderHome());

    const $links = document.querySelectorAll('.page-link');
    const $navbar = document.querySelector('.navbar');
    $navbar.addEventListener('click', event => {
        if (event.target.tagName === 'A' || event.target.tagName === 'IMG'){
            $links.forEach((cur) => cur.classList.remove('selected'));
            event.target.closest('.page-link').classList.add('selected');
        }
    })
}