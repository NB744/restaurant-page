import "../css/contact_us.css";

export const contactUsPageLoad = (() => {
    
    const pageContentElem = document.querySelector("#content");
    
    function renderPage(){    
        const mainContElem = document.createElement("main");
        
        const contactSectionElem = document.createElement("section");
        contactSectionElem.classList.add('contact-section');

        const headerTwoElem = document.createElement("h2");
        headerTwoElem.textContent = "Contact Us";
        
        const contactContElem = document.createElement("div");
        contactContElem.id = "contact-us-ul-container";

        const ulElem = document.createElement("ul");
        
        const liElemOne = document.createElement("li");
        const paraElemOne = document.createElement("p");

        const strongElemOne = document.createElement("strong");
        strongElemOne.textContent = "Address: ";

        paraElemOne.appendChild(strongElemOne);
        paraElemOne.append("123 Gourmet Lane, Flavor Town, USA");

        liElemOne.appendChild(paraElemOne);
        ulElem.appendChild(liElemOne);

        const liElemTwo = document.createElement("li");
        const paraElemTwo = document.createElement("p");

        const strongElemTwo = document.createElement("strong");
        strongElemTwo.textContent = "Phone: ";

        paraElemTwo.appendChild(strongElemTwo);
        paraElemTwo.append("(123) 456-7890");

        liElemTwo.appendChild(paraElemTwo);
        ulElem.appendChild(liElemTwo);

        const liElemThree = document.createElement("li");
        const paraElemThree = document.createElement("p");

        const strongElemThree = document.createElement("strong");
        strongElemThree.textContent = "Email: ";

        paraElemThree.appendChild(strongElemThree);
        paraElemThree.append("contact@justanotherrestaurant.com");

        liElemThree.appendChild(paraElemThree);
        ulElem.appendChild(liElemThree);
        
        contactContElem.appendChild(ulElem);
        contactSectionElem.appendChild(headerTwoElem);
        contactSectionElem.appendChild(contactContElem);


        mainContElem.appendChild(contactSectionElem);
        pageContentElem.appendChild(mainContElem);
    }
    return {
        renderPage,
    }
})();