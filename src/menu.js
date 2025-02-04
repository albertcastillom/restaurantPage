let menuPage = function(){

    let content = document.querySelector("#content");

    let header = document.createElement("h1");
    header.textContent = "LULU MENU";
    content.appendChild(header);

    let menuDiv = document.createElement("div");

    let sharedMenu = document.createElement("div");
    let sharedMenuHeader = document.createElement("h3");
    sharedMenuHeader.textContent = "SHARED PLATES";
    let sharedMenuItems = document.createElement("p");
    sharedMenuItems.innerHTML = "DEEP FRIED PICKLES / 7 / lemon aiilo <br> "
    + "HAND CUT POTATO CRISPS + DIPS / 12.9 / house-made guacamole, smoked steelhead dip, pimento cheese<br>"
    + "COCONUT SHRIMP / 14.9 / coconut, sriracha aioli<br>";

    sharedMenu.appendChild(sharedMenuHeader);
    sharedMenu.appendChild(sharedMenuItems);

    menuDiv.appendChild(sharedMenu);

    let soupSaladMenu = document.createElement("div");
    let soupSaladMenuHeader = document.createElement("h3");
    soupSaladMenuHeader.textContent = "SOUP + SALAD";
    let soupSaladItems = document.createElement("p");
    soupSaladItems.innerHTML = "FARMSTAND / 16.9 / apple, celery, baby spinach,<br> radicchio, dried cranberries, candied pecans, blue cheese<br>"
    + "CAESAR / 11.9 / 14.9 / romaine, house croutons, parmesan cheese,<br> Cindy’s Caesar dressing <br>"
    +"TOMATO BASIL SOUP / 9.9 / 11.9 / tomato, basil, onion, chicken <br>broth, cream, parsley<br>";

    soupSaladMenu.appendChild(soupSaladMenuHeader);
    soupSaladMenu.appendChild(soupSaladItems);

    menuDiv.appendChild(soupSaladMenu);

    let burgerMenu = document.createElement("div");
    let burgerMenuHeader = document.createElement("h3");
    burgerMenuHeader.textContent = "BURGERS";
    let burgerMenuItems = document.createElement("p");
    burgerMenuItems.innerHTML ="GREEN CHILI CHEESEBURGER * / 17.9 / pepperjack, roasted green <br>chilies, lettuce, tomato, onions, chipotle mayo, tortilla strips<br>"
    + "CLASSIC CHEESEBURGER * / 16.9 / American cheese, lettuce,<br> tomato, onions, drive-in burger sauce<br>"
    +"DOUBLE BACON * / 19.9 / bacon jalapeño relish, candied bacon, blue<br> cheese, horseradish aioli, lettuce, tomato, onions<br>"
    +"PIMENTO CHEESE + BACON JAM * / 17.9 / pimento cheese, bacon<br>jam, lettuce, tomato, onion, drive-in burger sauce<br>";

    burgerMenu.appendChild(burgerMenuHeader);
    burgerMenu.appendChild(burgerMenuItems);

    menuDiv.appendChild(burgerMenu);

    content.appendChild(menuDiv);

};

export {menuPage};