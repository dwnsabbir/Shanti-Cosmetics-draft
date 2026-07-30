document.addEventListener("DOMContentLoaded", () => {

    // Enable horizontal scrolling with mouse wheel for product sliders
    const sliders = document.querySelectorAll('.product-slider');

    sliders.forEach(slider => {
        slider.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            slider.scrollLeft += evt.deltaY;
        });
    });

    // Simple Newsletter Form submission handler
    const subscribeForm = document.getElementById('subscribe-form');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = subscribeForm.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with: ${emailInput}\nYou will receive special discounts soon!`);
            subscribeForm.reset();
        });
    }
});
