$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('.materialboxed').materialbox();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();

    });
    //var lis = document.getElementsByTagName('li');

    //after changing into an Array you  can now cycle through all off them
    //console.log(Array.isArray(lis));
   // console.log(Array.isArray(Array.from(lis)));


    //This is how an HTML collection is cycled through
    //Array.from(lis).forEach(function(item){
     //  console.log(item)
  //  });
    // if it is already an array simply cycle through like this
    //lis.forEach(function(item) {
        //console.log(item)
   // });

   // to query the dom only returns on element
    //const wrap =  document.querySelector('.nav-wrapper li:nth-child(2).about');
   // console.log(wrap);    
      
 // queryselectorAll Returns all elements with that class
 
//to retrieve text
  //var card = document.querySelectorAll('.card-content');
 // Array.from(card).forEach(function(item){
      //retrieve
 //console.log(item.textContent);

      // to change OR Apend +="";
      //item.textContent +='Welcome';
    //});
// you render the entire innerHTML or any changes in he Html
   // const services = document.querySelector('#Services');
   // services.innerHTML += 'million';
  

   //DOM NODES
 //Declare the element you desire to querry
     //const card = document.querySelector('.card');
  // console.log(card.hasChildNodes());
  //console.log(card.nodeName());
  //console.log(card.nodeType());

//Upon declaring true  returns the entire element and siblings underthat,
//But if you use false it only declares the only element
    // const clonedcard = card.cloneNode(true);
    // console.log(clonedcard);
   

//const sect = document.querySelector('#team div:nth-child(1)');
 //console.log(sect.nextElementSibling);
 // sect.forEach(function(item){
 // console.log(item);

const form = document.querySelector('.content');
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  form.email.value="";
  form.date.value="";
  form.time.value="";
});
const slid= document.querySelector('#slider');
console.log(slid);
var lis = document.getElementByTagName('li');
lis.forEach(function(item){
console.log(item);
});