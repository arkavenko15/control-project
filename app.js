// MENU
let hamburgerMenu = document.querySelector(".hamburger-menu")
console.log(hamburgerMenu);
let dropDownMenu = document.querySelector(".drop-down-menu1");
hamburgerMenu.addEventListener("click",function()
{
    hamburgerMenu.classList.toggle("pop-up-menu");
    if(hamburgerMenu.classList.contains("pop-up-menu"))
    {
        dropDownMenu.classList.add("tablet-menu");
        dropDownMenu.classList.remove("drop-down-menu1")
    }
    else
    {
        dropDownMenu.classList.remove("tablet-menu");
        dropDownMenu.classList.add("drop-down-menu1")

    }
})
let hamburgerMobileMenu = document.querySelector(".hamburger-mobile-menu")


console.log(hamburgerMenu);
hamburgerMobileMenu.addEventListener("click",function()
{
    hamburgerMobileMenu.classList.toggle("pop-up-menu");
    if(hamburgerMobileMenu.classList.contains("pop-up-menu"))
    {
        dropDownMenu.classList.add("tablet-menu");
        dropDownMenu.classList.remove("drop-down-menu1")
    }
    else
    {
        dropDownMenu.classList.remove("tablet-menu");
        dropDownMenu.classList.add("drop-down-menu1")

    }
})


// DROP DOWN TABLET MENU
dropDownTabletMenu = document.querySelector(".drop-down-tablet-menu");
arrowDownIcon = document.querySelector(".arrow-down-icon");
arrowDownIcon.addEventListener("click", function()
{
    arrowDownIcon.classList.toggle("clicked-arrow");
    if(arrowDownIcon.classList.contains("clicked-arrow"))
    {
        dropDownTabletMenu.classList.add("clicked-arrow");
    }
    else
    {
        dropDownTabletMenu.classList.remove("clicked-arrow");  
    }
})


// SLIDER BUTTON
let switchButton = document.querySelector(".switch-btn");
let sliderRoundLeft = document.querySelector(".slider-round-left");
let hiddenPrice = document.querySelectorAll(".hidden-price");
let visiblePrice = document.querySelectorAll(".visible-price");
switchButton.addEventListener("click",function()
{

    for(let i=0;i<hiddenPrice.length;i++)
    {
        sliderRoundLeft.classList.toggle("slider-round-right")
        if(sliderRoundLeft.classList.contains("slider-round-left"))
        {
            sliderRoundLeft.classList.remove("slider-round-left")
            sliderRoundLeft.classList.add("slider-round-right")
        }
        else
        {
            sliderRoundLeft.classList.add("slider-round-left")
            sliderRoundLeft.classList.remove("slider-round-right")
        }
        if(hiddenPrice[i].classList.contains("hidden-price"))
        {
            hiddenPrice[i].classList.remove("hidden-price")
            hiddenPrice[i].classList.add("show-hidden-price")
        }
        else
        {
            hiddenPrice[i].classList.add("hidden-price")
            hiddenPrice[i].classList.remove("show-hidden-price")
        }
        if(visiblePrice[i].classList.contains("visible-price"))
        {
            visiblePrice[i].classList.remove("visible-price")
            visiblePrice[i].classList.add("hidden-price")
        }
        else
        {
            visiblePrice[i].classList.add("visible-price")
            visiblePrice[i].classList.remove("hidden-price")
        }
    }


})
