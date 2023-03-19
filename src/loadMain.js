import Svg from "./icon.svg";

const loadMain = () => {
  const mainContent = document.querySelector("#content");
  console.log("suh");
  const topPanel = document.createElement("div");
  topPanel.classList.add("top-panel");

  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");
  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.id = "menu-button";
  menuButton.textContent = "Menu";

  const storyButton = document.createElement("button");
  storyButton.classList.add("nav-button");
  storyButton.id = "story-button";
  storyButton.textContent = "Our Story";

  const logo = document.createElement("img");
  logo.id = "restaurant-icon";
  topPanel.appendChild(logo);

  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.id = "home-button";
  homeButton.textContent = "Home";
  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(storyButton);

  topPanel.appendChild(navBar);

  const contentPanel = document.createElement("div");
  contentPanel.classList.add("content-panel");

  mainContent.appendChild(topPanel);
  mainContent.appendChild(contentPanel);
  document.body.appendChild(mainContent);
};
export default loadMain;
