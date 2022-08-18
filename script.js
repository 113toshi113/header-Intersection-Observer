window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const headerSect = document.querySelector('.header-observer');
  const doWhenIntersect = entries => {
    header.setAttribute('data-js-scroll', String(entries[0].isIntersecting));
  }
  const observer = new IntersectionObserver(doWhenIntersect, {});
  observer.observe(headerSect);
});