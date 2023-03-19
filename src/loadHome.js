import homeimg from './img/HomeImage.png';

const loadHome=(panel)=>{
    const homePanel=document.createElement('div');
    homePanel.classList.add('home-panel');
    const imgPanel = document.createElement('div');
    imgPanel.classList.add('img-panel');
    const bigHeader= document.createElement('h2');
    bigHeader.textContent= 'La Cucina'
    bigHeader.id='big-header';

    const smallHeader= document.createElement('h2');
    smallHeader.textContent= 'Savor the taste of italy in every dish';
   const smallHeader2= document.createElement('h2');
   smallHeader2.textContent= 'Experience the delicious and wholesome flavors of italy, brought to your plate with locally sourced, fresh ingredients.';
  smallHeader.id='small-header';
  smallHeader2.id='small-header2'

      const homeImage = new Image();
    homeImage.id='home-image';
    homeImage.src=homeimg;
    imgPanel.appendChild(homeImage);
    const textBanner = document.createElement('div');
    textBanner.classList.add('text-banner');
    
   
    textBanner.appendChild(bigHeader);
    textBanner.appendChild(smallHeader);
    textBanner.appendChild(smallHeader2);
    homePanel.appendChild(imgPanel);
    homePanel.appendChild(textBanner);
    panel.appendChild(homePanel);
   


}
export default loadHome;