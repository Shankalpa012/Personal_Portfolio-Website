const burgerMenu = document.querySelector(".burger")
const navMenu = document.querySelector(".nav-list")
const navLink = document.querySelectorAll(".nav-link");
var navbar = document.querySelector(".navbar");
//adding a onclick event
burgerMenu.addEventListener("click",mobileView)



function mobileView(){
    //adding class to the element
    burgerMenu.classList.toggle("love")
    navMenu.classList.toggle("active")
}

//looping through each link 
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    //removing classlist form element
    burgerMenu.classList.remove("love");
    navMenu.classList.remove("active");
}

//stickey navbar

window.addEventListener("scroll", ()=>{
    navbar.classList.toggle("stickeynav",window.scrollY>0)
})
  















//type Write effect 

const TypeWriter = function(txtElement, words,wait=2000){
    this.txtElement =txtElement;
    this.words= words;
    this.txt = '';
    this.wordIndex =0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

 
//creating type method 
TypeWriter.prototype.type= function(){

    //current index of word
    const currentIndex  = this.wordIndex % this.words.length;  

    //getting full text of current word
    const fullTxt = this.words[currentIndex]

    if(this.isDeleting){
        //removing the letter from the string
        this.txt= fullTxt.substring(0,this.txt.length - 1)
    }else{
        //adding the letter to the string
        this.txt= fullTxt.substring(0,this.txt.length +1)
    }
    
    //adding the element to the DOM
    this.txtElement.innerHTML = `<span class=txt>${this.txt}</span>`

    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //if the word is completed or not
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    }else if( this.isDeleting && this.txt === "" ){
        this.isDeleting = false;

        this.wordIndex++;

        typeSpeed = 300;
    }


    setTimeout(()=>this.type(),typeSpeed)
}

//initalizating on loading the windo dom
document.addEventListener("DOMContentLoaded", init)

//initializating function
function init(){
    const txtElement = document.querySelector(".landing-text");
    const words =  JSON.parse(txtElement.getAttribute("data-words"));    
    const wait =txtElement.getAttribute("data-wait");
    
    new TypeWriter(txtElement,words,wait )
}


const input = document.querySelector('form');
const btn = document.querySelector(".submit")


const mail = (e)=>{
    e.preventDefault();
    if(isNaN(input.elements["phone"].value)){
        alert(`${input.elements["phone"].value } : is not a valid number`)
    }   else{
        
        Email.send({
            Host : "smtp.mailtrap.io",
            Username : "813456da46c96a",
            Password : "3b364f1e5513bf",
            To : 'shankalpakoirala@gmail.com',
            From : input.elements["email"].value,
            Subject : "Feedback form",
            Body : input.elements["name"].value + "<br/>"+input.elements["phone"].value + "<br/>" + input.elements["msg"].value
        }).then(
        message => alert("Message Sent SuccessFully")
        );
    }  
}






















































