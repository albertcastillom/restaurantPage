let homePage = function(){

    let content = document.querySelector("#content");

    let homeName = document.createElement("h1");
    homeName.textContent = "LuLu Burgers";

    content.appendChild(homeName);

    let homePara = document.createElement("p");
    homePara.textContent = " CASUAL DINING & A FUN RETRO ATMOSPHERE ON THE WATERFRONT";

    content.appendChild(homePara);

    let hourDiv = document.createElement("div");

    let hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours";
    let hours = document.createElement("p");
    hours.innerHTML = 'MON-TUES 11 AM - 8:30 PM<br> WED-THURS 11 AM - 9:00 PM<br>SUNDAY 9:30 AM - 8:30 PM<br>FRIDAY 11 AM - 10 PM<br>SATURDAY 9:30 AM - 10 PM';

    hourDiv.appendChild(hoursHeader);
    hourDiv.appendChild(hours);

    content.appendChild(hourDiv);

    let hashtag = document.createElement("h3");
    hashtag.textContent = "#KEEPINGITLOCAL";

};

export {homePage};