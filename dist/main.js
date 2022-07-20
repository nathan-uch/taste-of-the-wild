(()=>{"use strict";const e=(e,s,a)=>{const i=document.createElement(e);for(const e in s)i.setAttribute(e,s[e]);for(let e=0;e<a.length;e++)a[e]instanceof Node?i.appendChild(a[e]):i.appendChild(document.createTextNode(a[e]));return i},s=function(){return e("div",{class:"row home-page page"},[e("div",{class:"col-half hero-img"},[e("img",{src:"../src/assets/images/link.png",alt:"main character from Zelda video games, Link",class:"link-img"},[])]),e("div",{class:"col-half desc-container"},[e("p",{class:"description"},['"Taste of the Wild" is the highest rated restaurant in all of Hyrule, founded by the most experienced chef in all the kingdom, chef Link! \n                All ingredients are organic and locally sourced. Chef Link hunts, gathers, fishes and captures all ingredients used in all recipes.\n                Chef Link has previous experience as princess Zelda\'s personal cook! Step in to enjoy all the unique flavors of the wild.']),e("div",{class:"stars-container"},[e("h2",{class:"rating-header"},["Hyrule Stars",e("span",{class:"copyright"},["©"])]),e("img",{src:"../src/assets/images/star.webp",alt:"star rating 5 out of 5",class:"stars-rating"},[]),e("img",{src:"../src/assets/images/star.webp",alt:"star rating 5 out of 5",class:"stars-rating"},[]),e("img",{src:"../src/assets/images/star.webp",alt:"star rating 5 out of 5",class:"stars-rating"},[])]),e("p",{class:"quote"},["I've never tasted anything like this, the ingredients are incredibly fresh and the taste is exquisite.",e("span",{class:"quote-author"},["- Chef Moza"])])])])};!function(){const a=document.getElementById("content");a.appendChild(e("div",{class:"background-img"},[e("div",{class:"row"},[e("h1",{class:"col logo-text"},["Taste of the Wild"])]),e("div",{class:"row navbar-container"},[e("div",{class:"col navbar"},[e("a",{class:"page-link home-link selected",href:"#","data-view":"page-1"},[e("img",{src:"../src/assets/images/slate.webp",alt:"sheika slate icon",class:"slate-icon"},[]),"Home"]),e("a",{class:"page-link home-link",href:"#","data-view":"page-2"},[e("img",{src:"../src/assets/images/meat.webp",alt:"meat icon",class:"meat-icon"},[]),"Menu"]),e("a",{class:"page-link home-link",href:"#","data-view":"page-3"},[e("img",{src:"../src/assets/images/fairy.webp",alt:"fairy icon",class:"fairy-icon"},[]),"Contact"])])])])),document.querySelectorAll(".page-link");let i=null,c=null;const l=document.querySelector(".navbar");null===i&&(a.appendChild(s()),i=document.querySelector(".home-link")),l.addEventListener("click",(l=>{if("A"===l.target.tagName||"IMG"===l.target.tagName){i.classList.remove("selected"),c=l.target.closest(".page-link"),c.classList.add("selected");const t=document.querySelector(".page");"page-1"===c.getAttribute("data-view")&&i!==c?(a.removeChild(t),a.appendChild(s())):"page-2"===c.getAttribute("data-view")&&i!==c?(a.removeChild(t),a.appendChild(e("div",{class:"menu-page page"},[e("div",{class:"row appetizer-row"},[e("div",{class:"col-full appetizer-title"},["Appetizers"]),e("div",{class:"col-full appetizer-items"},[e("div",{class:"app-dish"},[e("img",{id:"app-img-1",src:"../src/assets/images/clam-chowder.webp",alt:"clam chowder soup"},[]),e("div",{class:"app-1"},[e("h3",{class:"app-name"},["Clam Chowder"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"8"])])]),e("div",{class:"app-dish"},[e("img",{id:"app-img-2",src:"../src/assets/images/meat-pie.webp",alt:"Meat Pie"},[]),e("div",{class:"app-2"},[e("h3",{class:"app-name"},["Meat Pie"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"9"])])]),e("div",{class:"app-dish"},[e("img",{id:"app-img-3",src:"../src/assets/images/spiced-meat-skewer.png",alt:"Spiced Meat Skewer"},[]),e("div",{class:"app-3"},[e("h3",{class:"app-name"},["Spiced Meat Skewer"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"12"])])])])]),e("div",{class:"row entree-row"},[e("div",{class:"col-full entree-title"},["Entrées"]),e("div",{class:"col-full entree-items"},[e("div",{class:"entree-dish"},[e("img",{id:"entree-img-1",src:"../src/assets/images/vegetable-risotto.png",alt:"vegetable risotto"},[]),e("div",{class:"entree-1"},[e("h3",{class:"entree-name"},["Vegetable Risotto"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"17"])])]),e("div",{class:"entree-dish"},[e("img",{id:"entree-img-2",src:"../src/assets/images/gourmet-meat-rice-bowl.webp",alt:"Meat and rice bowl"},[]),e("div",{class:"entree-2"},[e("h3",{class:"entree-name"},["Meat and Rice Bowl"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"18"])])]),e("div",{class:"entree-dish"},[e("img",{id:"entree-img-3",src:"../src/assets/images/mushroom-saute.webp",alt:"Mushroom Sauté (vegetarian)"},[]),e("div",{class:"entree-3"},[e("h3",{class:"entree-name"},["Mushroom Sauté"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"17"])])]),e("div",{class:"entree-dish"},[e("img",{id:"entree-img-4",src:"../src/assets/images/salt-grilled-crab.png",alt:"Salted grilled crab"},[]),e("div",{class:"entree-4"},[e("h3",{class:"entree-name"},["Salted Grilled Crab"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"22"])])]),e("div",{class:"entree-dish"},[e("img",{id:"entree-img-5",src:"../src/assets/images/grilled_sea_bass.webp",alt:"Grilled Sea Bass"},[]),e("div",{class:"entree-5"},[e("h3",{class:"entree-name"},["Grilled Sea Bass"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"20"])])]),e("div",{class:"entree-dish"},[e("img",{id:"entree-img-6",src:"../src/assets/images/grilled-gourmet-meat.png",alt:"Grilled Steak"},[]),e("div",{class:"entree-6"},[e("h3",{class:"entree-name"},["Grilled Steak"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"25"])])])])]),e("div",{class:"row dessert-row"},[e("div",{class:"col-full dessert-title"},["Desserts"]),e("div",{class:"col-full dessert-items"},[e("div",{class:"dessert-dish"},[e("img",{id:"dessert-img-1",src:"../src/assets/images/fruitcake.webp",alt:"fruitcake"},[]),e("div",{class:"dessert-1"},[e("h3",{class:"dessert-name"},["Fruitcake"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"6"])])]),e("div",{class:"dessert-dish"},[e("img",{id:"dessert-img-2",src:"../src/assets/images/pumpkin-pie.webp",alt:"Pumpkin pie"},[]),e("div",{class:"dessert-2"},[e("h3",{class:"dessert-name"},["Pumpkin Pie"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"7"])])]),e("div",{class:"dessert-dish"},[e("img",{id:"dessert-img-3",src:"../src/assets/images/wildberry_crepe.png",alt:"Wildberry Crepe"},[]),e("div",{class:"dessert-3"},[e("h3",{class:"dessert-name"},["Wildberry Crepe"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"7"])])])])]),e("div",{class:"row chef-specials-row"},[e("div",{class:"col-full chef-specials-title"},["Chef's Special"]),e("div",{class:"col-full chef-specials-items"},[e("div",{class:"chef-specials-dish"},[e("img",{id:"chef-specials-img-1",src:"../src/assets/images/monster-cake.webp",alt:"monster cake"},[]),e("div",{class:"chef-specials-1"},[e("h3",{class:"chef-specials-name"},["Monster Cake"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"8"])])]),e("div",{class:"chef-specials-dish"},[e("img",{id:"chef-specials-img-2",src:"../src/assets/images/rock-hard-food.webp",alt:"Rock hard food"},[]),e("div",{class:"chef-specials-2"},[e("h3",{class:"chef-specials-name"},["Rock Hard Food"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"9"])])]),e("div",{class:"chef-specials-dish"},[e("img",{id:"chef-specials-img-3",src:"../src/assets/images/dubious-food.png",alt:"dubious food"},[]),e("div",{class:"chef-specials-3"},[e("h3",{class:"chef-specials-name"},["Dubious Food"]),e("p",{class:"price"},[e("img",{src:"../src/assets/images/rupee.webp",alt:"Rupee Image",class:"currency"},[]),"12"])])])])])]))):"page-3"===c.getAttribute("data-view")&&i!==c&&(a.removeChild(t),a.appendChild(e("div",{class:"row contact-page page"},[e("div",{class:"col-full"},[e("div",{class:"contact-details"},[e("p",{class:"details"},["Headquarters Address: "]),e("p",{class:"details"},[" Temple of Time, Hyrule"])]),e("div",{class:"contact-details"},[e("p",{class:"details"},["Phone: "]),e("p",{class:"details"},[" +123 (45) 6789-1011"])]),e("div",{class:"contact-details"},[e("p",{class:"details"},["Email: "]),e("p",{class:"details"},[" contact@tasteofthewild.com"])]),e("h3",{class:"locations-title"},["Locations:"]),e("ul",{class:"locations-list"},[e("li",{},["Hateno Village"]),e("li",{},["Kakariko Village"]),e("li",{},["Tarrey Town"]),e("li",{},["Rito Village"]),e("li",{},["Lurelin Village"]),e("li",{},["Gerudo Town (women only)"]),e("li",{},[e("span",{class:"hyrule-castle"},["Hyrule Castle"])," (Permenantly Closed)"])]),e("h3",{class:"locations-title"},["Coming Soon"]),e("ul",{class:"coming-soon"},[e("li",{},["Korok Forest"]),e("li",{},["Zora's Domain"])])])]))),i=c}}))}()})();