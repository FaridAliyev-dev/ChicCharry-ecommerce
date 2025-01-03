import { products } from "./data.js";

console.log(products);

const card = document.querySelector(".productsBox");
console.log(card);
// function DisplayCards(arr) {
//   arr.forEach((product) => {
//     card.innerHTML += `
//                   <div class="productsItem1">
//               <div class="productStatus">
//                 <div class="status">
//                   <div class="activeSale"><p>30%</p></div>
//                   <div class="activeNew">New</div>
//                 </div>

//                 <div class="heartButton">
//                   <i class="fa-regular fa-heart"></i>
//                 </div>
//               </div>

//               <div class="productImage">
//                 <img
//                   src="${product.image}"
//                   alt=""
//                 />
//               </div>

//               <div class="productRating">
//                 <i class="fa-solid fa-star" style="color: #ffdd45"></i>
//                 <i class="fa-solid fa-star" style="color: #ffdd45"></i>
//                 <i class="fa-solid fa-star" style="color: #ffdd45"></i>
//                 <i class="fa-solid fa-star" style="color: #ffdd45"></i>
//                 <i class="fa-solid fa-star" style="color: #ffdd45"></i>
//               </div>

//               <div class="productText">
//                 <p class="productName">${product.title}</p>
//                 <p class="productPrice">$ 130.00</p>
//               </div>

//               <div class="productButton">
//                 <button>Add to cart</button>
//               </div>
//             </div>
//               `;
//   });
// }

function DisplayCards(arr) {
  arr.forEach((product) => {
    // Create the main product item container
    const productItem = document.createElement("div");
    productItem.classList.add("productsItem1");

    // Create the product status container
    const productStatus = document.createElement("div");
    productStatus.classList.add("productStatus");

    const status = document.createElement("div");
    status.classList.add("status");

    const activeSale = document.createElement("div");
    activeSale.classList.add("activeSale");
    const saleText = document.createElement("p");
    saleText.textContent = product.discount + "%";
    activeSale.appendChild(saleText);

    const activeNew = document.createElement("div");
    activeNew.classList.add("activeNew");
    activeNew.textContent = "New";

    status.appendChild(activeSale);
    status.appendChild(activeNew);
    productStatus.appendChild(status);

    // Create the heart button
    const heartButton = document.createElement("div");
    heartButton.classList.add("heartButton");
    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-regular", "fa-heart");
    heartButton.appendChild(heartIcon);

    productStatus.appendChild(heartButton);
    productItem.appendChild(productStatus);

    // Create the product image container
    const productImage = document.createElement("div");
    productImage.classList.add("productImage");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = "";
    productImage.appendChild(img);
    productItem.appendChild(productImage);

    // Create the product rating container
    const productRating = document.createElement("div");
    productRating.classList.add("productRating");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa-solid", "fa-star");
      star.style.color = "#ffdd45";
      productRating.appendChild(star);
    }

    productItem.appendChild(productRating);

    // Create the product text container
    const productText = document.createElement("div");
    productText.classList.add("productText");
    const productName = document.createElement("p");
    productName.classList.add("productName");
    productName.textContent = product.title;

    const productPrice = document.createElement("p");
    productPrice.classList.add("productPrice");
    productPrice.textContent = "$" + product.oldPrice;

    productText.appendChild(productName);
    productText.appendChild(productPrice);
    productItem.appendChild(productText);

    // Create the product button container
    const productButton = document.createElement("div");
    productButton.classList.add("productButton");
    const button = document.createElement("button");
    button.textContent = "Add to cart";
    productButton.appendChild(button);
    productItem.appendChild(productButton);

    // Append the product item to the card container (assuming card is defined elsewhere)
    card.appendChild(productItem);
  });
}

DisplayCards(products);
