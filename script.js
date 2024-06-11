const prices = document.querySelectorAll(".main__price");
const btn = document.querySelector(".header__btn");

priceMonth = [19.99, 24.99, 39.99]; 
priceAnnual = [199.99, 249.99, 399.99]
let btnClicked = false;

btn.addEventListener("click", () => {
    btn.classList.toggle("display");
    
    btnClicked = !btnClicked;
    prices.forEach((price, index) => {
        if (btnClicked) {
            price.innerHTML = priceMonth[index];
        } else {
            price.innerHTML = priceAnnual[index];
        }
        price.style.opacity = 0.8;
        setTimeout(() => {
            price.style.opacity = 1;
        }, 200);
        
    });


});
