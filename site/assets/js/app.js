const nav = document.querySelector('.navbar')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
});

const footer = document.querySelector('.footerbar')
fetch('footerbar.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
});


const othernav = document.querySelector('.other-nav')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    othernav.innerHTML=data
});

const get_nav = document.querySelector('.get-nav')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    get_nav.innerHTML=data
});

const exmaple_nav = document.querySelector('.example-nav')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    exmaple_nav.innerHTML=data
});

const button_nav = document.querySelector('.button-nav')
fetch('../../../site/content/docs/button_nav.html')
.then(res=>res.text())
.then(data=>{
    button_nav.innerHTML=data
});

const text_nav = document.querySelector('.text-nav')
fetch('../../../site/content/docs/texts_nav.html')
.then(res=>res.text())
.then(data=>{
    text_nav.innerHTML=data
});

const column_nav = document.querySelector('.column-nav')
fetch('../../../../site/content/docs/button_nav.html')
.then(res=>res.text())
.then(data=>{
    column_nav.innerHTML=data
});

