const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// nav section 
//variables for the Navigation Section
let navItemOne = document.querySelector("a:nth-of-type(1)");
let navItemTwo = document.querySelector("a:nth-of-type(2)");
let navItemThree = document.querySelector("a:nth-of-type(3)");
let navItemFour = document.querySelector("a:nth-of-type(4)");
let navItemFive = document.querySelector("a:nth-of-type(5)");
let navItemSix = document.querySelector("a:nth-of-type(6)");
//created an array so I can loop through the data
let navArr = [navItemOne, navItemTwo, navItemThree, navItemFour, navItemFive, navItemSix]

// ------------------------------------




// call to actin section 
let ctaH1 = document.querySelector("h1:nth-of-type(1)");
ctaH1.innerHTML = siteContent.cta['h1'];
let ctaButton = document.querySelector("button:nth-of-type(1)");
ctaButton.innerHTML = siteContent.cta['button'];
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent.cta['img-src']);

// ------------------------------------

// main content section 
let mainContentOne = document.querySelector(".top-content h4:nth-of-type(1)");
mainContentOne.innerHTML = siteContent["main-content"]["features-h4"];
let mainContentTwo = document.querySelector(".top-content p:nth-of-type(1)");
mainContentTwo.innerHTML = siteContent["main-content"]["features-content"];


let mainContentThree = document.querySelector(".top-content div:nth-of-type(2) h4:nth-of-type(1)");
mainContentThree.innerHTML = siteContent["main-content"]["about-h4"];
let mainContentFour = document.querySelector(".top-content div:nth-of-type(2) p:nth-of-type(1)");
mainContentFour.innerHTML = siteContent["main-content"]["about-content"];
let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let mainContentSix = document.querySelector(".bottom-content h4:nth-of-type(1)");
mainContentSix.innerHTML = siteContent["main-content"]["services-h4"];
let mainContentSeven = document.querySelector(".bottom-content p:nth-of-type(1)");
mainContentSeven.innerHTML = siteContent["main-content"]["services-content"];


let mainContentEight = document.querySelector(".bottom-content div:nth-of-type(2) h4:nth-of-type(1)");
mainContentEight.innerHTML = siteContent["main-content"]["product-h4"];
let mainContentNine = document.querySelector(".bottom-content div:nth-of-type(2) p:nth-of-type(1)");
mainContentNine.innerHTML = siteContent["main-content"]["product-content"];


let mainContentTen = document.querySelector(".bottom-content div:nth-of-type(3) h4:nth-of-type(1)");
mainContentTen.innerHTML = siteContent["main-content"]["vision-h4"];
let mainContentEleven = document.querySelector(".bottom-content div:nth-of-type(3) p:nth-of-type(1)");
mainContentEleven.innerHTML = siteContent["main-content"]["vision-content"];

// ------------------------------------



// contact section 

let contactOne = document.querySelector(".contact h4:nth-of-type(1)");
contactOne.innerHTML = siteContent["contact"]["contact-h4"];
let contactTwo = document.querySelector(".contact p:nth-of-type(1)");
contactTwo.innerHTML = siteContent["contact"]["address"];
let contactThree = document.querySelector(".contact p:nth-of-type(2)");
contactThree.innerHTML = siteContent["contact"]["phone"];
let contactFour = document.querySelector(".contact p:nth-of-type(3)");
contactFour.innerHTML = siteContent["contact"]["email"];

// ------------------------------------


// footer section 

let footer = document.querySelector("footer:nth-of-type(1)");
footer.innerHTML = siteContent.footer["copyright"];

// ------------------------------------





//this fucntion loops through the navigation Arryay and returns each value
function fillNav (item) {
  let n = 1;
  item.forEach( el => {
    if (el) {
      el.innerHTML=siteContent.nav[`nav-item-${n}`];
      n = n+1;
    }
  })
  return item;
}

// function fillCta (item) {
//   let n = 1;
//   item.forEach( el => {
//     if (el) {
//       el.innerHTML=siteContent.nav[`nav-item-${n}`];
//       n = n+1;
//     }
//   })
//   return item;
// }

// function fillMainContent (item) {
//   let n = 1;
//   item.forEach( el => {
//     if (el) {
//       el.innerHTML=siteContent.nav[`nav-item-${n}`];
//       n = n+1;
//     }
//   })
//   return item;
// }

// function fillContact (item) {
//   let n = 1;
//   item.forEach( el => {
//     if (el) {
//       el.innerHTML=siteContent.nav[`nav-item-${n}`];
//       n = n+1;
//     }
//   })
//   return item;
// }

// function fillFooter (item) {
//   let n = 1;
//   item.forEach( el => {
//     if (el) {
//       el.innerHTML=siteContent.nav[`nav-item-${n}`];
//       n = n+1;
//     }
//   })
//   return item;
// }
fillNav(navArr);
