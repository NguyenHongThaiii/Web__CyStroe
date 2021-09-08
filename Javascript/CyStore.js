const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// SubHeader
const div1 = $('.header-menuWrapper1')
const div2 = $('.header-menuWrapper2')
const subHeader = $('.subHeader')

div1.onclick = function(){
    div1.classList.remove('active')
    subHeader.classList.add('active')
    div2.classList.add('active')
}
div2.onclick = function(){
    div2.classList.remove('active')
    subHeader.classList.remove('active')
    div1.classList.add('active')
}
// Slide Show
const slides = Array.from($$('.slick'))
const next = $('.next')
const prev = $('.prev')
let length = slides.length-5
let count =0
const width = $('.slick').clientWidth
console.log($('.slick').clientWidth)
next.onclick = function(e){
    if(count < length){
        slides.forEach(function(slide){
            slide.style.transform += `translateX(${-width+'px'})`
        })
        count+=1;
        console.log(count)
    }
    else e.preventDefault()
}

prev.onclick = function(e){
    if(count > 0){
        slides.forEach(function(slide){
            slide.style.transform += `translateX(${width+'px'})`
        })
        count-=1;
        console.log(count)
    }
    else e.preventDefault()
}
// Scroll
const scrollBar = $('.scroll')
document.onscroll = function(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if(scrollTop > 100){
        scrollBar.style.display = 'block'
    }
    else {
        setTimeout(function(){
            scrollBar.style.display = 'none'
        },10)
    }
}
// Menu - close Mobile
const menuMobile = $('.menuMobile')
const closeMobile = $('.menuMobile2')
const modalMobile = $('.modalMoblie')
menuMobile.onclick = function(){
    menuMobile.classList.remove('active')
    closeMobile.classList.add('active')
    modalMobile.classList.add('active')
}
closeMobile.onclick = function(){
    closeMobile.classList.remove('active')
    modalMobile.classList.remove('active')
    menuMobile.classList.add('active')
}

// Handel list item Header Mobile
const list = $$('.wrapContent-list')
const titles = Array.from($$('.wrapContent-home'))

titles.forEach(function(title,index){
    title.onclick = function(){
        list[index].classList.toggle('active')
    }
})
// Mobile Search
const search = $('.header-search')
const searchMobile = $('.searchMobile')
const closeSearch = $('.modalSearch-icon')
search.onclick = function(){
    searchMobile.classList.add('active')
}
closeSearch.onclick = function(){
    searchMobile.classList.remove('active')

}
