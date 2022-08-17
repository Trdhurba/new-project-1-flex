/** globals  **/

/** node Getter **/
const baseUrl ='Http://localhost:3000';
letcat
const mainDiv =() =>document.getElementById("main")
const homepagelink = () => document.get elementById('home-page-link')
const list catlink = document.getElementById(list cat link)
/** template **/
 
const homepageTemplate =() => {
    return
    <h1 class="center-align">welcome to our cat tracker</h1>

}
    
const listcattemplate =() => {
    return
}
 
const rendershomepage = () => {
    mainDiv().innerHTML =homepageTemplate();
}
/** Events **/
const loadcat =() => {
    fetch(baseUrl+ '/cat')
}
 .then(resp => resp.json())
 .then(data => cat =data)

document.addEventlistener(Domcontentloaded, () => {
    //rendersHomepage();
    homepagelinkEvent()
    meallistlinkEvent()
})









/**when the Dom loads **/
const rendersposts =async () = {
    let uri ='http://localhost:3000/post';
    const res=await fetch(uri);
    const posts =await res.json()
    console.log(posts);
}
document.addEventListener('DOMContentLoaded'), () => rendershomepage();



