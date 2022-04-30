// 메뉴 토글 버튼 - 클릭 시, 모바일 메뉴와 토글버튼 function
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.querySelector('.gnb');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('active');
    }else {
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('active');
    }
});

// 아코디언 메뉴
const main = document.querySelectorAll('.main');

for (let i = 0; i < main.length; i++){
    main[i].addEventListener('click', function(){
        // 다른 메뉴 클릭 시 기존 메뉴 비활성화
        for(let j = 0; j < main.length; j++){
            main[j].classList.remove('active');
            if(this !== main[j]){
                main[j].nextElementSibling.style.maxHeight = null;
            }
        };

        // 메뉴 클릭 시 서브메뉴 활성화
        this.classList.add('active');
        const sub = this.nextElementSibling;
        if(sub.style.maxHeight){
            sub.style.maxHeight = null;
        } else {
            sub.style.maxHeight = sub.scrollHeight + "px";
        }
    });
};

// search - 클릭, 포커즈, 블러 시 function
const searchEl = document.querySelector('.search-input');
const search = document.querySelector('.search span');
console.log(searchEl);
console.log(search);

search.addEventListener('click', function(){
    searchEl.classList.add('on');
});
searchEl.addEventListener('focus', function(){
    searchEl.setAttribute('placeholder', '검색어를 입력하세요');
    search.style.display = 'none';
});
searchEl.addEventListener('blur', function(){
    searchEl.classList.remove('on');
    searchEl.setAttribute('placeholder','');
    search.style.display = 'block';
});

// menu - scroll값 500이상이면 header 배경 생기게
const Header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if(this.scrollY > 500){
        Header.classList.add('scroll');
    }else{
        Header.classList.remove('scroll');
    }
});

// PC-menu 호버시 gnb-bg보이게
const menu = document.querySelector('.gnb-pc');
const menuBg = document.querySelector('.gnb-bg');

menu.addEventListener('mouseover', function(){
    menuBg.classList.add('down');
});
menu.addEventListener('mouseout', function(){
    menuBg.classList.remove('down');
});

const logo = document.querySelector('header h1');
console.log(logo);

//----------main visual 순차적 등장----------
const fadeEl = document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay : (index + 1)*0.8,
        opacity : 1
    });
});

//Magic Scroll----------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: 0.8,
    })    
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// TOP버튼 및 Ticket버튼
const topBTN = document.getElementById('to-top');
const ticketBTN = document.getElementById('ticket');

window.addEventListener('scroll', function(){
    if(this.scrollY > 300){
        topBTN.classList.add('show');
        ticketBTN.classList.add('show');
    } else {
        topBTN.classList.remove('show');
        ticketBTN.classList.remove('show');
    }
});

topBTN.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});