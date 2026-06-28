const products = [
  {
    name: "Bathrobe",
    description: "High-Quality unisex Bathrobe in 100% Pure cotton fabric",
    price: "₹1,050",
    image: "bath_robe.png"
  },
  {
    name: "Bedcover 5pc set",
    description: "A complete bed decor set,<br>1 Bedcover + 2 Pillow covers+ 2 Cushion with filler ",
    price: "₹1,599",
    image: "comfort.png"
  },
  {
    name: "Cushion",
    description: "High quality Embroidery cushion set with filler",
    price: "₹750",
    image: "cushion.png"
  },
  {
    name: "Polo Bedsheet",
    description: "Polo Embroidery Solid bedsheet Set.<br>Premium Glace Cotton Fabric",
    price: "₹980",
    image: "polo.png"
  },

  {
    name: "Toy cum Blanket",
    description: "A soft Teddy with a Blanket. Soft flannel AC blanket.\nBlanket Size: 48*68 inches",
    price: "₹800",
    image: "toy.png"
  },
];

const cardContainer = document.getElementById("cardContainer");


cardContainer.innerHTML =  
products.map(
    (product) => 
      `
        <div class="card">
            <img src="${product.image}" alt="${product.name}" class="card-img">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <h3>Price</h3>
            <p class="price">${product.price}</p>
        </div>
    `
  ).join('');