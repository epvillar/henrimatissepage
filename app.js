const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "1900",
    price: "La raya verde, Desnudo iluminado por el sol y La ribera",
    colors: [
      {
        code: "green",
        img: "./img/larayaverde.jpg",
        desc: "La raya verde",
      },
      {
        code: "red",
        img: "./img/desnudoiluminadoporelsol.jpg",
      },
      {
        code: "darkblue",
        img: "./img/larivera.jpg",
      },

    ],
  },
  {
    id: 2,
    title: "1910",
    price: "La ventana azul, Ventana francesa en Niza y el Pez dorado",
    colors: [
      {
        code: "green",
        img: "./img/laventanaazul.jpg",
      },
      {
        code: "red",
        img: "./img/ventanafrancesaenniza.jpg",
      },
      {
        code: "darkblue",
        img: "./img/pezdorado.jpg",
      },

    ],
  },
  {
    id: 3,
    title: "1920",
    price: "Mujer con sombrilla, La veneciana y La siesta",
    colors: [
      {
        code: "green",
        img: "./img/mujerconsombrilla.jpg",
      },
      {
        code: "red",
        img: "./img/laveneciana.jpg",
      },
      {
        code: "darkblue",
        img: "./img/lasiesta.jpg",
      },

    ],
  },
  {
    id: 4,
    title: "1930",
    price: "El abrigo de piel, Helena y La odalisca",
    colors: [
      {
        code: "green",
        img: "./img/elabrigodepiel.jpg",
      },
      {
        code: "red",
        img: "./img/helena.jpg",
      },
      {
        code: "darkblue",
        img: "./img/odalisca.jpg",
      },

    ],
  },
  {
    id: 5,
    title: "1940",
    price: "Dos jóvenes, Bailarina y Dos bailarines",
    colors: [
      {
        code: "green",
        img: "./img/dosjovenes.jpg",
      },
      {
        code: "red",
        img: "./img/bailarina.jpg",
      },
      {
        code: "darkblue",
        img: "./img/dosbailarines.jpg",
      },

    ],
  },
  {
    id: 5,
    title: "1950",
    price: "Desnudo azul, Desnudo con naranjas y Zulma",
    colors: [
      {
        code: "green",
        img: "./img/desnudoazul.jpg",
      },
      {
        code: "red",
        img: "./img/desnudoconnaranjas.jpg",
      },
      {
        code: "darkblue",
        img: "./img/zulma.jpg",
      },

    ],
  },

];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
/*const currentProductSizes = document.querySelectorAll(".size");*/

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
/*
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
*/
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
