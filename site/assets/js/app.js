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
fetch('nav.html')
.then(res=>res.text())
.then(data=>{
    othernav.innerHTML=data
});

const get_nav = document.querySelector('.get-nav')
fetch('get_nav.html')
.then(res=>res.text())
.then(data=>{
    get_nav.innerHTML=data
});

const exmaple_nav = document.querySelector('.example-nav')
fetch('docs_nav.html')
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

const column_nav = document.querySelector('.column-nav')
fetch('../../../../site/content/docs/button_nav.html')
.then(res=>res.text())
.then(data=>{
    column_nav.innerHTML=data
});

