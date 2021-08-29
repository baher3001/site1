// navbar btn 
// selectors  here 
let burgerBtn = document.querySelector('.burger');



let Navbar = document.querySelector('nav ul');
let Nav = document.querySelector('nav')
burgerBtn.addEventListener('click',()=>{
    // Nanbar 
    // Navbar.classList.toggle('nav-active');

   
    // Nav.classList.toggle('navbar');


    if(Navbar.classList.contains("nav-active"))
    {
        Navbar.classList.remove("nav-active");
        Nav.classList.toggle('navbar');
        burgerBtn.innerHTML ="<i class='fas fa-bars'></i>"

    }else
    {
        Navbar.classList.add("nav-active");
        Nav.classList.toggle('navbar');
        burgerBtn.innerHTML= "<i class='fas fa-times'></i>"
    }
}); 

// btn Navbar links 
// selectors 
let Who =  document.querySelector('#who');
// let Cv =  document.querySelector('#who');
let Contact  =  document.querySelector('#contact');
/*
Who.addEventListener('click',()=>{

    // document.querySelector("nav ul").classList.toggle('.ul-active');
    // Who.href="";
});

Contact.addEventListener('click',()=>{

  
 //   document.querySelector("nav ul").classList.toggle("ul-active");
 
    
});*/

// end navbar btn 

// spinner page here 
window.addEventListener('load',()=>{

    document.querySelector(".loader").classList.add('fade');
    document.querySelector('.connection').style.display="none";

});


var time = setTimeout(()=>{

    document.querySelector(".loader").remove();
},800)


// end spinner page here 


// Offline 
window.addEventListener("offline",()=>{
let div = document.createElement('div');
div.className = "connection";
let icon = document.createElement('i');
//img.src="img/connection.gif";
icon.className="fas fa-wifi";
div.appendChild(icon);
document.body.appendChild(div);



});

// online 
window.addEventListener("online",()=>{

    // document.querySelector(".connection").style.display="none";
    //document.querySelector(".connection").classList.remove("con-off")

    document.querySelector('.connection').style.display="none";
});

// scroll 
window.addEventListener('scroll',()=>{
  let Nav = document.querySelector("nav");
    if(this.scrollY >= 25)
    {
        Nav.style.opacity= 0.8;
        // console.log('it is okay here ')
    }
    else
    {
        Nav.style.opacity= 1;
        // console.log('it is not  okay here ')

    }

    // scroll btn
    let BtnScroll = document.querySelector(".scroll-btn");  
     // alert-img 
     let alertImage  = document.querySelector(".alert-img");
    if(this.scrollY >= 650)
    {
        BtnScroll.classList.add("show-bb");
        alertImage.classList.add("active");

        
    }
    else
    {
        BtnScroll.classList.remove('show-bb');
        alertImage.classList.remove("active");

    }


});

// prevent inspect here 
window.addEventListener('contextmenu',(e)=>
{
    e.preventDefault();
})


$(document).ready(function(){

    $('#number').counterUp({
        delay:10,
        time:1200
    });
});





// ani.... text 
var typed = new Typed(".typing",{
    strings:['','مطور وجهه الاماميه','مطور وجهه الخلفية ','مطور ويب'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});



// ani.... text  for popup who
var typed1 = new Typed(".typing1",{
    strings:['','مطور وجهه الاماميه','مطور وجهه الخلفية ','مطور ويب'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});



// start code-popup 






const changeTextBtn = document.querySelector(".changeText");
const ReadTextBtn = document.querySelector(".readText");
const code = document.querySelector("#code");
const input = document.querySelector(".userInput  input");
const SubmitBtn  = document.querySelector(" .userInput  .btn");




changeTextBtn.addEventListener("click",()=>{


    code.textContent = createCaptha();



});


window.addEventListener("load",()=>{

    code.textContent = createCaptha();

});


function createCaptha()
{
    let latters  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];


    let a = latters[Math.floor(Math.random() * latters.length)];
    let b = latters[Math.floor(Math.random() * latters.length)];
    let c = latters[Math.floor(Math.random() * latters.length)];
    let d = latters[Math.floor(Math.random() * latters.length)];
    let e = latters[Math.floor(Math.random() * latters.length)];
    let f = latters[Math.floor(Math.random() * latters.length)];
    let g = latters[Math.floor(Math.random() * latters.length)];


    let Code = a + b + c + d + e + f + g;


    return Code;
}


SubmitBtn.addEventListener("click",()=>{
    let val = input.value;
    if(val == '')
    {       
        // alert("please Enter the text ");
        document.querySelector(".n1").style.display="block";
        document.querySelector(".n1").innerHTML = "رجاء ادخل رمز الصحيح  ";
        document.querySelector(".n1").style.backgroundColor="red";


    }else if(val ===code.textContent)
    {
        // location.href = "https://www.google.com";
        document.querySelector(".n1").style.display="block";
        document.querySelector(".n1").innerHTML = "تم ادخل رمز بشكل صحيح ";
        document.querySelector(".n1").style.backgroundColor="green";


    }else
    {
        // alert("Invaid Code ");


        document.querySelector(".n1").style.display="block";
        document.querySelector(".n1").innerHTML = "رمز خطاء ";
        document.querySelector(".n1").style.backgroundColor="red";
    }


});





// ReadTextBtn.addEventListener("click",()=>{

//     let text = code.textContent;
//     responsiveVoice.speak("hello here");


// })



ReadTextBtn.addEventListener("click",()=>{

    const text1 = code.textContent;

    responsiveVoice.speak(text1)


})







document.querySelector(".alert-img").addEventListener("click",()=>{

    if(document.querySelector(".captcha-container").classList.contains('active'))
    {
        document.querySelector(".captcha-container").classList.remove('active')   
    }else
    {
        document.querySelector(".captcha-container").classList.add('active')
    }


})


//  who popup

let who = document.querySelector(".who1"),
closeWhoBtn = document.querySelector(".who1 .close"),
 whoBtn =  document.getElementById("who");


 console.log(whoBtn)



setTimeout(()=>{

    who.classList.add("active");

},15000);


closeWhoBtn.addEventListener("click",()=>{

  
        who.classList.remove("active");
   


});


whoBtn.addEventListener("click",()=>{

    if(who.classList.contains("active"))
    {
        who.classList.remove("active");
    }else
    {
        who.classList.add("active");
    }
    
})