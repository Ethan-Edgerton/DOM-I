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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// NAV with forEach with volor change

let navBar = document.querySelectorAll("a");
navBar.forEach((b, i) => {
  b.textContent = siteContent["nav"] [`nav-item-${i+1}`]
  b.style.color = `green`;
});


//Append/Prepend

// newNavItem[] will the array-like not work because querySelector was not used?

const newNavItem = document.createElement(`a`);
newNavItem.textContent = `Home`;
newNavItem.setAttribute(`href`, [`#`])
const parentElement = document.querySelector(`nav`)
parentElement.prepend(newNavItem);


const newNavItem2 = document.createElement(`a`);
newNavItem2.textContent = `Other Home`;
newNavItem2.setAttribute(`href`, [`https://www.google.com/`])
const parentElement2 = document.querySelector(`nav`)
parentElement2.appendChild(newNavItem2);


newNavItem.style.color = `black`;
newNavItem2.style.color = `black`;


// CTA div

let ctaH1 = document.querySelector("h1");
ctaH1.innerText = (siteContent ["cta"]["h1"]);

let ctaButton = document.querySelector("button");
ctaButton.textContent = (siteContent["cta"]["button"]);

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute(`src`, siteContent["cta"] ["img-src"]);



// Main Content (old way)

// let feature = document.querySelectorAll(`.top-content .text-content h4`);
// feature.textContent = (siteContent["main-content"] ["features-h4"]);

// let featureText = document.querySelector("p");
// featureText.textContent = (siteContent["main-content"] ["features-content"]);

// let about = document.querySelector("h4");
// about.textContent = (siteContent["main-content"] ["about-h4"]);


// Main Content Headers (better way)

let mainH4 = document.querySelectorAll('.main-content .text-content h4');
  mainH4[0].textContent = (siteContent['main-content']['features-h4']);
  mainH4[1].textContent = (siteContent['main-content']['about-h4']);
  mainH4[2].textContent = (siteContent[`main-content`] [`services-h4`]);
  mainH4[3].textContent = (siteContent[`main-content`] [`product-h4`]); 
  mainH4[4].textContent = (siteContent[`main-content`] [`vision-h4`]);


  // Main Content Paragraphs

let mainP = document.querySelectorAll(`.main-content .text-content p`);
  mainP[0].textContent = (siteContent[`main-content`] [`features-content`]);
  mainP[1].textContent = (siteContent[`main-content`] [`about-content`]);
  mainP[2].textContent = (siteContent[`main-content`] [`services-content`]);
  mainP[3].textContent = (siteContent[`main-content`] [`product-content`]);
  mainP[4].textContent = (siteContent[`main-content`] [`vision-content`]);


// MainContent middle img

let middleImg = document.querySelector(`.middle-img`);
  middleImg.setAttribute (`src`, siteContent[`main-content`] [`middle-img-src`]);


  // Contact Header

let contact = document.querySelectorAll(`.contact h4`);
  contact[0].textContent = (siteContent[`contact`] [`contact-h4`]);


// Contact Paragraphs

let contactP = document.querySelectorAll(`.contact p`);
  contactP[0].textContent = (siteContent[`contact`] [`address`]);
  contactP[1].textContent = (siteContent[`contact`] [`phone`]);
  contactP[2].textContent = (siteContent[`contact`] [`email`]);