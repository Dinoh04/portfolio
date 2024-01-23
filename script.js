
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const tabs = document.querySelectorAll('[data-target]'),
   tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContent.forEach(tabContents =>  {
            tabContents.classList.remove('skills_active');
        })
        target.classList.add('skills_active');

        tabs.forEach(tab =>  {
            tab.classList.remove('skills_active');
        })
        tab.classList.add('skills_active');
    })
})

ScrollReveal({
  //reset: true,
  distance : '60px',
  duration : 2500,
  delay : 400
});
ScrollReveal().reveal('.home-content', { delay: 600, origin : 'left' });
ScrollReveal().reveal('.social-media a, .container, .services-box, .portfolio-box,.contact_info,.social_icon i', { delay: 500, origin : 'bottom', interval: 200 });
ScrollReveal().reveal('.about-img,.skills_container', { delay: 600, origin : 'bottom' });
ScrollReveal().reveal('.about-content p, .about-col,.about-content h3', { delay: 700, origin : 'right' });
ScrollReveal().reveal('.input_box, textarea,.menu a', { delay: 500, origin : 'right', interval : 200 });
ScrollReveal().reveal('.heading', { delay: 600, origin : 'top' });
