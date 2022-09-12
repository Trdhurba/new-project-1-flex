/* 
 overall idea 
 load the  page and view the homepage

 when: dom content loaded (event)

 cause:dom content loaded (event)

 Effect:display the homepage

 */

 // NODE GETTERS
 const MainDiv =() => Document.getElementByid("main")
 const listcatlink =() => document. getElementByid("list cat link");
 const Homepagelink =document.getElementById("home-page-link");
 /**templates **/
 const homepagestemplate = () => {
   return
      <h1 class="centre-align">welcome to our cat tracker</h1>
 } 

/**renders**/
const rendersHomepage = () => {
   MainDiv().innerHtml =homepagestemplate();
}
// Eventlisteners
 function attachlistcatclickEvent() {
   listcatlink().addEventListener("click",renderlistcatpage)
 }
 /**when dom loads  **/
 document.addEventListener('Domcontentloaded'), ()  =>
 renderhomepage();

 function attachHomepageclickEvent() {
   homepagelink().addEventListener("click",renderhomepage)
 }

//eventHandlers
function renderhomepage()
   //create the Html elements for the homepage
   //reset mainDiv();

   const h1 = document.createElement(cat="medical short");
   const p = document.createElement(cat= "groom list");

   h1.innertext ="cat list page"
   h1.stylemarginTop ="0"
  
   const fetch = () => {
    fetch (`$ {baseurlhttps://thecatapi.com/)
   .then(res => res.json())
   .then(data => console.log(data))
   }

   const fetchlistcat  =() => {
      fetch ("http://localhost:3000/cat")
        .then(resp => resp.json())
        .then(data => console.log(data)) 
   }
   
 MainDiv().appendchild(h1)
   MainDiv().appendchild(p);

function rendercatlistpage()
   resetMaindiv();

   const h1 = document.createElement("h1");
   const ul = document.createElement("ul");
   const li = Document.createElement("li");
   
//domcontentloaded//
document.addEventListener("Domcontentloaded"), () => renderlisthomepage(); {
   
}
attachlistcatclickEvent();
attachHomepageclickEvent();
attachrandomlistcatEvent();

