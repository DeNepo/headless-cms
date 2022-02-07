async function createItemElement(itemData) {
  const itemEl = document.createElement("div");
  itemEl.className = "item";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", itemData.image.data.attributes.url);
  itemEl.appendChild(imgEl);

  const titleEl = document.createElement("div");
  titleEl.className = "itemTitle";
  titleEl.innerText = itemData.name;
  itemEl.appendChild(titleEl);

  const priceEl = document.createElement("div");
  priceEl.className = "price"; 
  if(itemData.outOfStock) {
    priceEl.innerHTML = '<div class="outOfStock">Out of stock</div>'; 
  } else {
    if (itemData.discount.data) {
      const discountAmount = itemData.discount.data.attributes.percentage;
      priceEl.innerHTML = `
            <div class="discount">${discountAmount}%</div>
            <div class="oldPrice">${itemData.price.toFixed(2)}€</div>
            <div class="newPrice">${(itemData.price * (1 - (discountAmount/100))).toFixed(2)}€</div>
      `;
    }else {
      const newPrice = document.createElement("div");
      newPrice.className = "newPrice";
      newPrice.innerText = itemData.price.toFixed(2) + "€";
      priceEl.appendChild(newPrice);
    }
  } 
  itemEl.appendChild(priceEl);

  const descriptionEl = document.createElement("div");
  descriptionEl.className = "itemDescription";
  descriptionEl.innerText = itemData.description.length > 100 ? itemData.description.substring(1, 100) + '...': itemData.description;
  itemEl.appendChild(descriptionEl);
  
  return itemEl;
}

async function createCategoryContainer(entry) {
  console.log(entry);
  const el = document.createElement("div");
  el.className = "categorycontainer";

  const titleEl = document.createElement("h1");
  titleEl.innerText = entry.attributes.name;
  el.appendChild(titleEl);

  const descriptionEl = document.createElement("span");
  descriptionEl.innerText = entry.attributes.description;
  descriptionEl.className = "categoryDiscription";
  el.appendChild(descriptionEl);

  const itemsContainer = document.createElement("div");
  itemsContainer.className = "items";
  entry.attributes.products.data.forEach(async itemEntry => {
    const itemEl = await createItemElement(itemEntry.attributes);
    itemEl.className = "item";
    itemsContainer.appendChild(itemEl);
  });
  el.appendChild(itemsContainer);

  return el;
}

async function loadProducts() {
  const response = await (await fetch("/api/categories?populate[products][populate][0]=discount&populate[products][populate][1]=image", {
    method: 'GET',
    headers: {
      'Authorization': `Bearer afaddde6fe34f2b035219d46d1b562bb14a0ec5a5c7e54b5a7bb48f8e32c1aef7427e4254f0a941476620095c249874dcfe68ef34ef1f4d1f1f1080ba6a0116868f9d1ca4f3de9ef172569653e6ddb2a0cae35c3dded89e679b8f28cb1b22b903866a1c2dc484cd47d3acead3ce7a92838f0e032d19586ed716c2e1b4e224ccc`
    }
  })).json();
  const body = document.getElementById("body");
  body.innerHTML = "";
  response.data.forEach(async entry => {
    const categoryContainer = await createCategoryContainer(entry); 
    body.appendChild(categoryContainer);
  });
}

loadProducts();