let navbarDiv = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 500 
    || document.documentElement.scrollTop > 500){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng')
    }
});