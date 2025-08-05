 function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let minTimer = 50;
    let stepTime = Math.max(Math.floor(duration / range), minTimer);
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;

    function run() {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - (remaining * range));
      obj.innerHTML = value + (id === 'count2' ? "%" : "+");
      if (value === end) clearInterval(timer);
    }

    timer = setInterval(run, stepTime);
    run();
  }

  window.addEventListener('DOMContentLoaded', () => {
    animateValue("count1", 0, 80, 5000);
    animateValue("count2", 0, 98, 6000);
    animateValue("count3", 0, 10, 7000);
  });

  AOS.init({ duration: 1000 });

    const menuIcon = document.getElementById('menu-icon');
    const mobileNav = document.getElementById('mobile-nav');

    menuIcon.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });