const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
    const target = +counter.dataset.target;
    let count = 0;
    const speed = 40;

    const update = () => {
        if (count < target) {
            count++;
            counter.innerText = count;
            setTimeout(update, speed);
        }
    };
    update();
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));