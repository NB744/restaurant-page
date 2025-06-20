import "../css/menu.css";

export const menuPageLoad = (function (){
    
    const pageContentElem = document.querySelector("#content");
    
    function renderPage(){    
        const mainContElem = document.createElement("main");
        
        const menuSectionElem = document.createElement("section");
        menuSectionElem.classList.add('menu-section');

        // APPETIZERS --- START
        const menuCategoryAppElem = document.createElement("div");
        menuCategoryAppElem.classList.add('menu-category');

        const menuHeaderAppElem = document.createElement("h3");
        menuHeaderAppElem.textContent = "Appetizers";

        const menuItemAppOneElem = document.createElement("div");
        menuItemAppOneElem.classList.add('menu-item');

        const menuItemAppSpanOneElem = document.createElement("span");
        menuItemAppSpanOneElem.textContent = "Bruschetta";

        const menuItemAppSpanOnePriceElem = document.createElement("span");
        menuItemAppSpanOnePriceElem.textContent = "$8";

        menuItemAppOneElem.appendChild(menuItemAppSpanOneElem);
        menuItemAppOneElem.appendChild(menuItemAppSpanOnePriceElem);

        const menuItemAppTwoElem = document.createElement("div");
        menuItemAppTwoElem.classList.add('menu-item');

        const menuItemAppSpanTwoElem = document.createElement("span");
        menuItemAppSpanTwoElem.textContent = "Stuffed Mushrooms";

        const menuItemAppSpanTwoPriceElem = document.createElement("span");
        menuItemAppSpanTwoPriceElem.textContent = "$9";

        menuItemAppTwoElem.appendChild(menuItemAppSpanTwoElem);
        menuItemAppTwoElem.appendChild(menuItemAppSpanTwoPriceElem);

        menuCategoryAppElem.appendChild(menuHeaderAppElem);
        menuCategoryAppElem.appendChild(menuItemAppOneElem);
        menuCategoryAppElem.appendChild(menuItemAppTwoElem);
        // APPETIZERS --- END


        
        // Main Course --- START
        const menuCategoryMainElem = document.createElement("div");
        menuCategoryMainElem.classList.add('menu-category');

        const menuHeaderMainElem = document.createElement("h3");
        menuHeaderMainElem.textContent = "Main Course";

        const menuItemMainOneElem = document.createElement("div");
        menuItemMainOneElem.classList.add('menu-item');

        const menuItemMainSpanOneElem = document.createElement("span");
        menuItemMainSpanOneElem.textContent = "Grilled Salmon with Lemon Butter";

        const menuItemMainSpanOnePriceElem = document.createElement("span");
        menuItemMainSpanOnePriceElem.textContent = "$22";

        menuItemMainOneElem.appendChild(menuItemMainSpanOneElem);
        menuItemMainOneElem.appendChild(menuItemMainSpanOnePriceElem);

        const menuItemMainTwoElem = document.createElement("div");
        menuItemMainTwoElem.classList.add('menu-item');

        const menuItemMainSpanTwoElem = document.createElement("span");
        menuItemMainSpanTwoElem.textContent = "Spaghetti Aglio e Olio";

        const menuItemMainSpanTwoPriceElem = document.createElement("span");
        menuItemMainSpanTwoPriceElem.textContent = "$18";

        menuItemMainTwoElem.appendChild(menuItemMainSpanTwoElem);
        menuItemMainTwoElem.appendChild(menuItemMainSpanTwoPriceElem);

        const menuItemMainThreeElem = document.createElement("div");
        menuItemMainThreeElem.classList.add('menu-item');

        const menuItemMainSpanThreeElem = document.createElement("span");
        menuItemMainSpanThreeElem.textContent = "Chicken Parmigiana";

        const menuItemMainSpanThreePriceElem = document.createElement("span");
        menuItemMainSpanThreePriceElem.textContent = "$$20";

        menuItemMainThreeElem.appendChild(menuItemMainSpanThreeElem);
        menuItemMainThreeElem.appendChild(menuItemMainSpanThreePriceElem);

        menuCategoryMainElem.appendChild(menuHeaderMainElem);
        menuCategoryMainElem.appendChild(menuItemMainOneElem);
        menuCategoryMainElem.appendChild(menuItemMainTwoElem);
        menuCategoryMainElem.appendChild(menuItemMainThreeElem);
        // Main Course --- END


        // Dessert -- START
        const menuCategoryDesElem = document.createElement("div");
        menuCategoryDesElem.classList.add('menu-category');

        const menuHeaderDesElem = document.createElement("h3");
        menuHeaderDesElem.textContent = "Desserts";

        const menuItemDesOneElem = document.createElement("div");
        menuItemDesOneElem.classList.add('menu-item');

        const menuItemDesSpanOneElem = document.createElement("span");
        menuItemDesSpanOneElem.textContent = "Tiramisu";

        const menuItemDesSpanOnePriceElem = document.createElement("span");
        menuItemDesSpanOnePriceElem.textContent = "$7";

        menuItemDesOneElem.appendChild(menuItemDesSpanOneElem);
        menuItemDesOneElem.appendChild(menuItemDesSpanOnePriceElem);

        const menuItemDesTwoElem = document.createElement("div");
        menuItemDesTwoElem.classList.add('menu-item');

        const menuItemDesSpanTwoElem = document.createElement("span");
        menuItemDesSpanTwoElem.textContent = "Lemon Tart";

        const menuItemDesSpanTwoPriceElem = document.createElement("span");
        menuItemDesSpanTwoPriceElem.textContent = "$6";

        menuItemDesTwoElem.appendChild(menuItemDesSpanTwoElem);
        menuItemDesTwoElem.appendChild(menuItemDesSpanTwoPriceElem);

        menuCategoryDesElem.appendChild(menuHeaderDesElem);
        menuCategoryDesElem.appendChild(menuItemDesOneElem);
        menuCategoryDesElem.appendChild(menuItemDesTwoElem);
        // Dessert -- END


        // Beverages -- START
        const menuCategoryBevElem = document.createElement("div");
        menuCategoryBevElem.classList.add('menu-category');

        const menuHeaderBevElem = document.createElement("h3");
        menuHeaderBevElem.textContent = "Beverages";

        const menuItemBevOneElem = document.createElement("div");
        menuItemBevOneElem.classList.add('menu-item');

        const menuItemBevSpanOneElem = document.createElement("span");
        menuItemBevSpanOneElem.textContent = "Fresh Orange Juice";

        const menuItemBevSpanOnePriceElem = document.createElement("span");
        menuItemBevSpanOnePriceElem.textContent = "$4";

        menuItemBevOneElem.appendChild(menuItemBevSpanOneElem);
        menuItemBevOneElem.appendChild(menuItemBevSpanOnePriceElem);

        const menuItemBevTwoElem = document.createElement("div");
        menuItemBevTwoElem.classList.add('menu-item');

        const menuItemBevSpanTwoElem = document.createElement("span");
        menuItemBevSpanTwoElem.textContent = "Espresso";

        const menuItemBevSpanTwoPriceElem = document.createElement("span");
        menuItemBevSpanTwoPriceElem.textContent = "$3";

        menuItemBevTwoElem.appendChild(menuItemBevSpanTwoElem);
        menuItemBevTwoElem.appendChild(menuItemBevSpanTwoPriceElem);

        menuCategoryBevElem.appendChild(menuHeaderBevElem);
        menuCategoryBevElem.appendChild(menuItemBevOneElem);
        menuCategoryBevElem.appendChild(menuItemBevTwoElem);
        // Beverages -- END


        menuSectionElem.appendChild(menuCategoryAppElem);
        menuSectionElem.appendChild(menuCategoryMainElem);
        menuSectionElem.appendChild(menuCategoryDesElem);
        menuSectionElem.appendChild(menuCategoryBevElem);
        
        mainContElem.appendChild(menuSectionElem);
        pageContentElem.appendChild(mainContElem);
    }
    return {
        renderPage,
    }
})();
