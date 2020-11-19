const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling then tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }

    // change active button [start]
    // var ndList = navbarMenu.children; 
    // for (var i = 0; i < ndList.length; i++) 
    // {
    //     ndList[i].classList.remove("active");
    // };
    // target.classList.toggle('active');
    //change active button [end]
    const active = document.querySelector('.navbar__menu__item.active');
    active.classList.remove('active');
    event.target.classList.add('active');

    scrollIntoView(link);
});


//Handle click on "Contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
});


// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight *1.2;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY >homeHeight){
        arrowUp.classList.add('visible');
    } else{
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click' ,()=>{
    scrollIntoView('#home');
})

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(event)=>{

    const filter = event.target.dataset.filter 
                    || event.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    //Remove selection from previous item and select the new one
    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');

    const target = event.target.nodeName ==='BUTTON' ? event.target: event.target.parentNode;
    target.classList.add('active');

    projectContainer.classList.add('anim-out');

    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter == project.dataset.type || filter =='*' ){
                project.classList.remove('invisible');
            } else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);

})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}
