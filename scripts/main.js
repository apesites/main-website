const packageButtons = document.querySelectorAll('.package-button');
    packageButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const packageDeal = button.closest('.package').querySelector('.package-deal');
            const packageName = packageDeal.querySelector('h1').textContent;
            const packagePrice = packageDeal.querySelector('h2').textContent;

            const message = `hello, I'm interested in the ${packageName}  which costs ${packagePrice}.`;

            const phoneNumber = '27765766604';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });



const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav-menu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});



    