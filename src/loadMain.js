import bannerimg from './img/banner.jpg';
 const loadMain=()=>{
     const mainContent = document.querySelector('#content');
     console.log('suh');
     const topPanel=document.createElement('div');
     topPanel.classList.add('top-panel');
     
     const bannerImage = new Image();
    bannerImage.id='banner-image';
    bannerImage.src=bannerimg;
    topPanel.appendChild(bannerImage);

    const bannerText=document.createElement('h1');
    bannerText.classList.add('banner');
    bannerText.textContent='Restaurant Name';
    topPanel.appendChild(bannerText);

    const navBar=document.createElement('div');
    navBar.classList.add('nav-bar');
        const reservationsButton=document.createElement('button');
        reservationsButton.classList.add('nav-button');
        reservationsButton.id='reservations-button';
        reservationsButton.textContent='Reservations';
        navBar.appendChild(reservationsButton);

        const storyButton=document.createElement('button');
        storyButton.classList.add('nav-button');
        storyButton.id='story-button';
        storyButton.textContent='Our Story';
        navBar.appendChild(storyButton);


        const employmentButton=document.createElement('button');
        employmentButton.classList.add('nav-button');
        employmentButton.id='employment-button';
        employmentButton.textContent='Employment';
        navBar.appendChild(employmentButton);

    topPanel.appendChild(navBar);
    const contentPanel=document.createElement('div');
    contentPanel.classList.add('content-panel');
    
    mainContent.appendChild(topPanel);
    mainContent.appendChild(contentPanel);
    document.body.appendChild(mainContent);
  
}
export default loadMain;