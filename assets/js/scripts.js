const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilterVegan = document.querySelector(".filter-vegan");

function showAll(productsArray) {
  let myLi = "";

  productsArray.forEach((product) => {
    myLi += `
     <li>
         <img src="${product.src}">
         <p>${product.name}</p>
         <p class="item-price">R$ ${(product.price).toFixed(2).replace('.', ',')}</p>
     </li>
   `;
  });
  list.innerHTML = myLi;
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: (product.price * 0.9),
  }));

  showAll(newPrices);
  
}

function sumAll() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  
  list.innerHTML = `  
   <li>
    <p>O valor total dos itens é de: R$ ${totalValue.toFixed(2).replace('.', ',')}</p>
   </li>
   <li>
    <p>O valor total dos itens com desconto é de: <br> R$ ${(totalValue * 0.9).toFixed(2).replace('.', ',')}</p>
   </li>
`;
}

function filterVegan() {
  const filterJustVegan = menuOptions.filter( product => product.vegan)
  showAll(filterJustVegan)
}


buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
buttonSumAll.addEventListener("click", sumAll);
buttonFilterVegan.addEventListener("click", filterVegan);
