import loadMain from './loadMain.js';
import loadStory from './loadStory.js';
import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';

const clear =element=>element.innerHTML='';

console.log('boy');
loadMain();
const contentPanel=document.querySelector('.content-panel');
loadHome(contentPanel);

const menuButton = document.querySelector('#menu-button');
const storyButton = document.querySelector('#story-button');
const homeButton = document.querySelector('#home-button');




storyButton.addEventListener('click', ()=>{
clear(contentPanel);
loadStory(contentPanel);
});
homeButton.addEventListener('click', ()=>{
    clear(contentPanel);
    loadHome(contentPanel);
    });

    menuButton.addEventListener("click", () => {
      clear(contentPanel);
      loadMenu(contentPanel);
    });
