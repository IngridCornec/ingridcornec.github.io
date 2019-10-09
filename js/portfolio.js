let articles = [{
    image: "sirene.jpg",
    imageDescription: "Illustration sirene",
    link: "",
    types: [1, 99]
  },
  {
    image: "hair.png",
    imageDescription: "",
    link: "",
    types: [1, 99]
  },
  {
    image: "Sale-tronche-04.jpg",
    imageDescription: "",
    link: "",
    types: [1, 99]
  },
  {
    image: "mockup_cadastre-02.jpg",
    imageDescription: "",
    link: "",
    types: [3, 99]
  },
  {
    image: "logo mauvaises herbes-01.jpg",
    imageDescription: "",
    link: "",
    types: [1, 99]
  },
  {
    image: "mockup cho7-01.jpg",
    imageDescription: "",
    link: "article_Cho7.html",
    types: [3, 99]
  },
  {
    image: "ibp_capgemini_intro-01.jpg",
    imageDescription: "",
    link: "article-iBP.html",
    types: [1, 2, 99]
  },
  {
    image: "womensday_intro-02.jpg",
    imageDescription: "",
    link: "article_womensday.html",
    types: [4, 2, 99]
  },
  {
    image: "moi.png",
    imageDescription: "",
    link: "",
    types: [1, 99]
  },
  {
    image: "cap@hack-01.jpg",
    imageDescription: "",
    link: "article_caphack.html",
    types: [1, 2, 4, 99]
  },
  {
    image: "Sale tronche-03.jpg",
    imageDescription: "",
    link: "",
    types: [1, 99]
  },
  {
    image: "elsa-02.jpg",
    imageDescription: "",
    link: "",
    types: [1, 99]
  },
  {
    image: "Sale tronche-05.jpg",
    imageDescription: "",
    link: "",
    types: [1, 99]
  },
  

];

function displayPortfolio(selected) {
  let column1 = "";
  let column2 = "";
  let column3 = "";
  let currentColumn = 1;
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].types.includes(selected)) {
      switch (currentColumn) {
        case 1:
          column1 = addArticleInColomn(column1, articles[i]);
          break;
        case 2:
          column2 = addArticleInColomn(column2, articles[i]);
          break;
        case 3:
          column3 = addArticleInColomn(column3, articles[i]);
          break;
      }
      if (currentColumn == 3) {
        currentColumn = 1;
      } else {
        currentColumn++;
      }
    }
  }
  document.getElementById("column1").innerHTML = column1;
  document.getElementById("column2").innerHTML = column2;
  document.getElementById("column3").innerHTML = column3;

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].types.includes(selected)) {
      const article = articles[i];
      if(article.link === ""){
        addModal(articles[i]);
      }
    }
  }

}

function addModal(article) {
  // Get the modal
  let modal = document.getElementById('modal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  let idName = article.image.split('.')[0];
  let img = document.getElementById(idName);
  let modalImg = document.getElementById("image-modal");
  let captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }
}


function addArticleInColomn(column, article) {
  
  // hair.png -> hair png -> hair
  let idName = article.image.split('.')[0];

  if(article.link === "") {
    let image = '<img id="'.concat(idName)
    .concat('" class="image-porfolio" src="./images/')
    .concat(article.image)
    .concat('" alt="')
    .concat(article.imageDescription)
    .concat('" style="width:100%">');
    return column.concat(image);
  } else {
    let image = '<a href="./'.concat(article.link)
    .concat('"><img id="').concat(idName)
    .concat('" class="image-porfolio" src="./images/')
    .concat(article.image)
    .concat('" alt="')
    .concat(article.imageDescription)
    .concat('" style="width:100%"></a>');
    return column.concat(image);
  }
}

displayPortfolio(99);