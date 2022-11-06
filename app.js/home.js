console.log("hello world");
let navList = document.querySelectorAll(".list-group-items");
let navFirstList = document.querySelector(".list-group-items:first-child");
console.log(navFirstList)
function navActive(){
    navList.forEach((items)=>{
        items.classList.remove("active");
    })
    this.classList.add("active")
};
navList.forEach((items)=>{
    items.addEventListener("click",navActive)
})

window.addEventListener("scroll",()=>{
    let header = document.querySelector(".header");
    header.classList.toggle("active-header" , window.scrollY > 0)
})
var contentProgressBar = document.querySelector(".content-progerss-bar");
window.onscroll = function(){
    let scrollTopValue = document.documentElement.scrollTop;
    let scrollHeightValue = document.documentElement.scrollHeight;
    let clientHeightValue = document.documentElement.clientHeight;
    let calScroll = scrollHeightValue - clientHeightValue;
    const progressWidth = Math.floor(scrollTopValue / calScroll * 100);
    // console.log(progressWidth);
    contentProgressBar.style.width = `${progressWidth}%`
}
let slideBtn = document.querySelector(".md-slide-btn");
let closeSlideBtn = document.querySelector(".slide-close-btn div");
let slideContainer = document.querySelector(".md-slide-container");
function slideBtnFun(){
    slideContainer.classList.toggle("md-open-slide-container");
    slideContainer.style.transition= "500ms";
}
closeSlideBtn.addEventListener("click",()=>{
    slideContainer.classList.remove("md-open-slide-container");
    slideContainer.style.transition= "500ms";
})
slideBtn.addEventListener("click",slideBtnFun);
let slideLiList = document.querySelectorAll(".md-slide-li-list");
slideLiList.forEach(function(slideLiList){
    // slideLiList.addEventListener("click",()=>{
    //     slideContainer.classList.remove("md-open-slide-container");
    //     slideContainer.style.transition= "500ms";
        
    // })
    slideLiList.addEventListener("click",function(){
        slideContainer.classList.remove("md-open-slide-container");
        slideContainer.style.transition= "500ms";
        console.log(this)
    })
})

let modelOpenBtn = document.querySelector(".section-right-img");
console.log(modelOpenBtn);
modelOpenBtn.addEventListener("click", e=()=>{
    document.querySelector(".service-2-model-box-container").style.transform = "scale(1)";
    // document.querySelector(".service-2-model-box-container").style.zIndex = "100";
    document.querySelector(".service-2-model-box-container").style.display = "grid";

});
let modelCloseBtn = document.querySelector(".model-close-btn");
modelCloseBtn.addEventListener("click", e=()=>{
    document.querySelector(".service-2-model-box-container").style.transform = "scale(0)";
    // document.querySelector(".service-2-model-box-container").style.zIndex = "-100";
    setTimeout(e=()=>{
        document.querySelector(".service-2-model-box-container").style.display = "none";
    },300);
});

let acctitles = document.querySelectorAll(".accordian-title");
let accContent = document.querySelectorAll(".accordian-content");
acctitles.forEach(function(acctitle ,idx){
    acctitle.addEventListener("click",function(){
        this.classList.toggle("accactive");
        let acccontent = this.nextElementSibling;
        let acccontentHeight = acccontent.scrollHeight;
        if(acccontent.style.height){
            acccontent.style.height = null;
        }else{
            acccontent.style.height = `${acccontentHeight}px`;
        }
    })
    if(acctitle.classList.contains("accactive")){
        accContent[idx].style.height = accContent[idx].scrollHeight +"px";
    }
})

// let accordians = document.querySelectorAll(".accordian");
// let accContent = document.querySelectorAll(".accordian-content");
// console.log(accordians)
// // function accFun(){
// //     accordians.forEach(function(item){
// //         item.classList.remove("accactive");
// //     })
// //     this.classList.add("accactive");
// //     if(this.classList.contains("accactive")){
// //         accContent.style.height = "auto";
// //     }
// // };
// accordians.forEach(function(item){
//     item.addEventListener("click", function(){
//         accordians.forEach(function(item){
//             item.classList.remove("accactive");
//         })
//         this.classList.add("accactive");
//     })

// });

