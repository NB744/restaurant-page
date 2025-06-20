import "../css/restaurant.css";
import { menuPageLoad } from "./menu";
import { contactUsPageLoad } from "./contact_us";

console.log("Restaurant Home Page JS");


const pageLoad = (function homePageLoad(){
    
    const pageContentElem = document.querySelector("#content");
    const navbarBtns = document.querySelectorAll(".site-navbar-btn");

    function clearPage(){
        pageContentElem.textContent = "";
    }

    function renderPage(){    
        clearPage();    
        const mainContElem = document.createElement("main");
        mainContElem.classList.add('home');
        
        const firstSectionElem = document.createElement("section");
        firstSectionElem.classList.add('hero');

        const headerTwoElem = document.createElement("h2");
        headerTwoElem.textContent = "Welcome to Just Another Restaurant";
        
        const paraElem = document.createElement("p");
        paraElem.textContent = "Delicious food. Clean design. Honest ingredients.";

        firstSectionElem.appendChild(headerTwoElem);
        firstSectionElem.appendChild(paraElem);
        
        const secondSectionElem = document.createElement("section");
        secondSectionElem.classList.add('intro-text');

        const secondParaElem = document.createElement("p");
        secondParaElem.textContent = "At Just Another Restaurant, we believe in simplicity and authenticity. Our dishes are crafted with the freshest ingredients and a deep respect for tradition, served in a space that reflects our commitment to clean, modern aesthetics. Whether you're here for a quiet lunch or a celebratory dinner, we aim to provide an experience that nourishes both body and soul."

        secondSectionElem.appendChild(secondParaElem);

        mainContElem.appendChild(firstSectionElem);
        mainContElem.appendChild(secondSectionElem);
        pageContentElem.appendChild(mainContElem);
    }

    function setNavBtnListeners(){
        navbarBtns.forEach((eachNavBarBtn) => {
            eachNavBarBtn.addEventListener('click', () => {
                pageLoad.clearPage();
                let eachNavBarBtnId = eachNavBarBtn.getAttribute("id");
                console.log(eachNavBarBtnId);
                switch (eachNavBarBtnId) {
                    case 'home-navbar-btn':
                    default:
                        console.log(eachNavBarBtn);
                        document.querySelector("#home-navbar-btn").classList.add('active');
                        document.querySelector("#menu-navbar-btn").classList.remove('active');
                        document.querySelector("#contact-us-navbar-btn").classList.remove('active');
                        pageLoad.renderPage();
                        break;

                    case 'menu-navbar-btn':
                        eachNavBarBtn.classList.add('active');
                        document.querySelector("#home-navbar-btn").classList.remove('active');
                        document.querySelector("#menu-navbar-btn").classList.add('active');
                        document.querySelector("#contact-us-navbar-btn").classList.remove('active');
                        menuPageLoad.renderPage();
                        break;

                    case 'contact-us-navbar-btn':
                        document.querySelector("#home-navbar-btn").classList.remove('active');
                        document.querySelector("#menu-navbar-btn").classList.remove('active');
                        document.querySelector("#contact-us-navbar-btn").classList.add('active');
                        contactUsPageLoad.renderPage();
                        break;

                }
            });
        })
    }

    return {
        renderPage,
        clearPage,
        setNavBtnListeners,
    }
})();

pageLoad.setNavBtnListeners();
pageLoad.renderPage();

