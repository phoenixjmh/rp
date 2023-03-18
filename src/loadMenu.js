const loadMenuItem = (menuFrame,dishName,dishDesc)=>{
const contentPanel=document.querySelector('content-panel');

const menuItem = document.createElement('div');
menuItem.classList.add('menu-item');

const dishHead=document.createElement('h1');
dishHead.classList.add('dish-name');

const dishPara=document.createElement('p');
dishPara.classList.add('dish-desc');

dishHead.textContent=dishName;
dishPara.textContent=dishDesc;

menuItem.appendChild(dishHead);
menuItem.appendChild(dishPara);

menuFrame.appendChild(menuItem);





}

const loadMenu =(panel)=>{
    const menuFrame=document.createElement('div');
    menuFrame.classList.add('menu-frame');
    loadMenuItem(
      menuFrame,
      "Pasta Primavera",
      "Fresh seasonal vegetables sautéed in garlic and olive oil, served over linguine pasta."
    );
    loadMenuItem(menuFrame, "Spaghetti Carbonara", "Traditional pasta dish made with creamy egg sauce, crispy pancetta, and Parmesan cheese.");
    loadMenuItem(
      menuFrame,
      "Margherita Pizza",
      "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil."
    );
    loadMenuItem(
      menuFrame,
      "Caprese Salad",
      "Fresh mozzarella, ripe tomatoes, and fragrant basil drizzled with extra-virgin olive oil and balsamic glaze."
    );
    loadMenuItem(
      menuFrame,
      "Osso Buco",
      "Braised veal shank in a rich tomato-based sauce served with creamy polenta."
    );
    loadMenuItem(
      menuFrame,
      "Chicken Marsala",
      "Sautéed chicken breasts in a flavorful Marsala wine sauce with mushrooms and garlic."
    );
    loadMenuItem(
      menuFrame,
      "Tiramisu",
      "Classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder."
    );
    panel.appendChild(menuFrame);
}
export default loadMenu;