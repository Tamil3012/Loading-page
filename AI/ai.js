const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})




const leftElements = document.querySelectorAll('.left');
const rightElements = document.querySelectorAll('.right');
const homecrd1Elements = document.querySelectorAll('.home-crd-1');
const homecrd2Elements = document.querySelectorAll('.home-crd-2');
const homecrd3Elements = document.querySelectorAll('.home-crd-3');
const homecrd4Elements = document.querySelectorAll('.home-crd-4');
const homecrd5Elements = document.querySelectorAll('.home-crd-5');
const homecrd6Elements = document.querySelectorAll('.home-crd-6');
const ouroneElements = document.querySelectorAll('.our-cul-1');
const ourtwoElements = document.querySelectorAll('.our-cul-2');
const ourthreeElements = document.querySelectorAll('.our-cul-3');
const ourfourElements = document.querySelectorAll('.our-cul-4');
leftElements.forEach((el) => observer.observe(el));
rightElements.forEach((el) => observer.observe(el));
homecrd1Elements.forEach((el) => observer.observe(el));
homecrd2Elements.forEach((el) => observer.observe(el));
homecrd3Elements.forEach((el) => observer.observe(el));
homecrd4Elements.forEach((el) => observer.observe(el));
homecrd5Elements.forEach((el) => observer.observe(el));
homecrd6Elements.forEach((el) => observer.observe(el));
ouroneElements.forEach((el) => observer.observe(el));
ourtwoElements.forEach((el) => observer.observe(el));
ourthreeElements.forEach((el) => observer.observe(el));
ourfourElements.forEach((el) => observer.observe(el));