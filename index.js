
let secton=document.querySelector("#sction")
let menuicon=document.querySelector("#menuicon")
let closeicon=document.querySelector("#closeicon")

menuicon.addEventListener("click",()=>{
    console.log("yes")
    menuicon.style.display="none"
    closeicon.style.display="block"
    secton.style.transform="translateX(0%)"
    
})
closeicon.addEventListener("click",()=>{
    menuicon.style.display="block"
    closeicon.style.display="none"
    secton.style.transform="translateX(100%)"
    
})
let nav_link=document.querySelectorAll(".nav-link")
nav_link.forEach((navlinkelement)=>{
    navlinkelement.addEventListener("click",()=>{
        if(window.innerWidth<="912"){
            setTimeout(()=>{
                menuicon.style.display="block"
                closeicon.style.display="none"
                secton.style.transform="translateX(100%)"
            },500)
        }
    })

})

//--------------- darkmode and lightmode functionality-----------

let tooglebox=document.querySelector("#tooglebox")

tooglebox.addEventListener("click",()=>{
   
        document.body.classList.toggle("light_mode")
        

    
})
let resume_navber=document.querySelector("#resume-link-1")
let resume_btn =document.querySelector("#resume-button-2")


const pdfopen_download=()=>{
    console.log("click")
    pdfurl="./ShouvickBachhar-FullStackWebDeveloper-Rtxg.pdf"
    window.open(pdfurl,"_blank")
    
    let a_tag=document.createElement("a")
    a_tag.href=pdfurl
    a_tag.download=pdfurl
    document.body.append("a_tag")
    a_tag.click()
    

}
resume_btn.addEventListener("click",pdfopen_download)
const pdfdownload=()=>{
    
    pdfurl="./ShouvickBachhar-FullStackWebDeveloper-Rtxg.pdf"
    
    let a_tag=document.createElement("a")
    a_tag.href=pdfurl
    a_tag.download=pdfurl
    document.body.append("a_tag")
    a_tag.click()
    
    

}
resume_navber.addEventListener("click",pdfdownload)


let contact_github1=document.querySelector("#contact-github1")

contact_github1.addEventListener("click",()=>{
    window.open("https://github.com/Shouvick21","_blank")
})
let contact_linkedin1=document.querySelector("#contact-linkedin1")
contact_linkedin1.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/shouvickbachhar/","_blank")
})

let contact_twitter=document.querySelector("#contact-twitter")
contact_twitter.addEventListener("click",()=>{
    window.open("https://x.com/BachharShouvick","_blank")
})


let contact_facebook=document.querySelector("#contact-facebook").addEventListener("click",()=>{
    window.open("https://www.facebook.com/shouvick.bachhar","_blank")
})


// -----------------contact section-----------------

let contact_github=document.querySelector("#contact-github")

contact_github.addEventListener("click",()=>{
    window.open("https://github.com/Shouvick21","_blank")
})
let contact_linkedin=document.querySelector("#contact-linkedin")
contact_linkedin.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/shouvickbachhar/","_blank")
})

let phno=document.querySelector("#contact-phone")
phno.addEventListener("click",()=>{
    window.open("tel:"+"+916289858863","_blank")
})


let email=document.querySelector("#contact-email")
email.addEventListener("click",()=>{  
    window.open("mailto:"+"bachharshouvickp2@gmail.com","_blank")
})
// let submit=document.querySelector("#submit")
// submit.addEventListener("click",()=>{
//     window.open("index.html","_blank")
// })