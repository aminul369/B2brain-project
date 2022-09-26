const track = document.getElementById("btn");


track. addEventListener("click", ()=> {


  const Head = {
  headers:{
    Accept:
	"application/json"
  } 
}
fetch("https://staging.staging.b2brain.com/search/autocomplete_org_all/",Head).then((res)=>  res.json()).then((data)=>{
 for(var i =0;i<data.length;i++){
  let value = document.getElementById("head").innerHTML;

if(data[i].company==value){
let company = data[i].company;
let imagesrc = data[i].logo;
let websitelink = data[i].website;
let logocolor =  `"${data[i].color}"`
console.log((logocolor));
const uid = data[i].slug;
const page = window.open('company.html');

page.addEventListener('DOMContentLoaded', () => {
  
  const testDiv = page.document.getElementById('name');
  testDiv.innerHTML = company;
  const image = page.document.getElementById("img");
image.src = imagesrc;
image.style.backgroundColor = logocolor;
const link = page.document.getElementById("clin");
link.href = websitelink;
link.innerHTML = websitelink;
const cid = page.document.getElementById("uniqueid");
cid.innerHTML = uid;

})

}

 }

})

}
);
function homepage(){
  window.open("http://127.0.0.1:5500/index.html");
}