var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
} 

let searchvalue = document.getElementById("logo");

const elem = document.getElementById("searchvalue");


elem. addEventListener("keypress", (event)=> {
if (event. keyCode === 13) { 

  const Head = {
  headers:{
    Accept:
	"application/json"
  } 
}
fetch("https://staging.staging.b2brain.com/search/autocomplete_org_all/",Head).then((res)=>  res.json()).then((data)=>{
 for(var i =0;i<data.length;i++){
  let value = document.getElementById("searchvalue").value;

if(data[i].company==value){
let company = data[i].company;
let imagesrc = data[i].logo;
let websitelink = data[i].website;
let logocolor =  `"${data[i].color}"`
console.log((logocolor));
const page = window.open('content.html');

page.addEventListener('DOMContentLoaded', () => {
  
  const testDiv = page.document.getElementById('head');
  testDiv.innerHTML = company;
  const image = page.document.getElementById("company-logo");
image.src = imagesrc;
image.style.backgroundColor = logocolor;
const link = page.document.getElementById("links");
link.href = websitelink;
link.innerHTML = websitelink;

let xmar = document.getElementById("xmark");
xmar.addEventListener('click',()=>{
  document.getElementById("searchvalue").value = "";
})



})

}

 }

})

}
});