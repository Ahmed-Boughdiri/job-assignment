// Navigating To The Search Page
const searchButton = document.querySelector("a[href='https://aarehomesforsale.realgeeks.com/agents/andy-parker/']");
searchButton.addEventListener("click", e =>{
    e.preventDefault();
    window.location.href = "https://aarehomesforsale.realgeeks.com/agents/andy-parker/"; 
});

// Adding The Subtitle

const title = document.querySelector("h2[class='text-2xl font-bold text-black border-b border-medium-gray mx-4 sm:mx-12 md:mx-0 pb-3 mb-6']");
const subtitle = document.createElement("h3");
subtitle.style.color = "#000";
subtitle.style.fontSize = "1rem";
subtitle.style.fontWeight = "400";

subtitle.innerText = "Listings We Think You'll Lobe";

title.appendChild(subtitle);

// Customizing The Card

// const cardsContainer = document.querySelector("div[class='mb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-4']");
// cardsContainer.classList.remove("grid-cols-1", "md:grid-cols-2", "xl:grid-cols-2" ,"gap-x-4");
// cardsContainer.style.gridTemplateColumns = "repeat(3, 1fr)";

// const cardsWrapper = document.querySelectorAll("div.mb-4 > div");
// cardsWrapper.forEach(cardWrapper =>{
//     cardWrapper.style.maxWidth = "390px"
//     const cardImage = cardWrapper.querySelector("img");
//     cardImage.removeAttribute("height");
//     cardImage.removeAttribute("width");
//     cardImage.style.width = "390px";
// });

const cardProperties = document.querySelectorAll("div.mb-4 > div > a:nth-child(1) > article:nth-child(1) > div:nth-child(3)")
cardProperties.forEach(cardProperty =>{
    cardProperty.style.transform = "translateY(50px)";
    cardProperty.style.color = "#fff";
    const spans = cardProperty.querySelectorAll("span");
    spans.forEach(span =>{
        span.classList.remove("text-black");
    });
    cardProperty.classList.remove("mb-8");
    cardProperty.style.marginTop = "-180px";

    // removing card bottom info
    const cardPropertyBottomInfo = 
        cardProperty.querySelector("div[class='w-full flex justify-between border-t border-medium-gray pt-2.5 px-4']");
    cardPropertyBottomInfo.remove();

});

// Removing The Description Of The Below Part Of The Homes List

const description = document.querySelector("#board-disclaimer");
description.remove();

// Remove The White Space Below Of The How Much Is…..

const howMuchIsYourHomeWorthSection = document.querySelector("section[data-cy='footer-valuation']");
howMuchIsYourHomeWorthSection.style.marginBottom = "-110px";
