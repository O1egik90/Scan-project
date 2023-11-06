export function smoothLink(e) {
    e.preventDefault();
    if (e.target.getAttribute('href') !== '') {
        const target = document.querySelector(`${e.target.getAttribute('href')}`);
        if (target) {
            const coords = target.getBoundingClientRect().top + scrollY - 100;
            scrollTo({
                behavior: 'smooth',
                top: coords,
            });
        }
    }
}
