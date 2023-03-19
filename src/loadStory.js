const loadStory = (panel) => {
  const storyPanel = document.createElement("div");
  storyPanel.classList.add("story-panel");

  const storyHeader = document.createElement("h1");
  storyHeader.classList.add("story-head");
  storyHeader.textContent = "Our Story";
  const storyParagraph = document.createElement("p");
  storyParagraph.classList.add("story-body");
  storyParagraph.innerHTML =
    " &emsp; Welcome to La Cucina, a farm-to-table Italian restaurant that has been a local favorite for over a decade.<br><br> &emsp;La Cucina was founded by Maria and Giovanni, a husband and wife team who shared a passion for traditional Italian cuisine and a commitment to using the freshest, highest-quality ingredients available.<br><br> &emsp; Maria grew up in Italy and learned to cook from her grandmother, who taught her the  importance of using simple, seasonal ingredients to create delicious, authentic meals.<br><br> &emsp; Giovanni, on the other hand, grew up on a farm and developed a deep appreciation for the hard work and dedication that goes into growing and harvesting fresh produce.Together, Maria and Giovanni opened La Cucina with the goal of bringing a taste of Italy to their community while supporting local farmers and producers.<br><br> &emsp; They work closely with a network of small-scale farmers and artisanal producers to source the freshest, most flavorful ingredients possible, from heirloom tomatoes to hand-crafted cheeses. At La Cucina, every dish is made from scratch and cooked with care, using traditional Italian techniques and recipes passed down through generations. <br><br> &emsp;<br> &emsp;From handmade pastas to slow-cooked ragus, every bite is a celebration of Italy's rich culinary heritage. We invite you to join us at La Cucina and taste the difference that fresh, local ingredients can make. Our commitment toquality and sustainability is at the heart of everything we do, and we look forward to sharing our passion for Italian cuisine with you.";

  storyPanel.appendChild(storyHeader);
  storyPanel.appendChild(storyParagraph);
  panel.appendChild(storyPanel);
};
export default loadStory;
