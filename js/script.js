var typed=new Typed(".typing",{
    strings:["Web Design","Web Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,

})
 


const sec=document.querySelectorAll("section")
const li=document.querySelectorAll("ul li");


window.addEventListener("scroll",()=>{
    let current ="";
    sec.forEach(section =>{
        const sectiontop=section.offsetTop;
        const sectionheight=section.clientHeight;
        if(scrollY >= sectiontop-(sectionheight)/3){
            current=section.getAttribute("id");
           console.log(current);
        }
    li.forEach(li=>{
        li.classList.remove('active')
       if(li.classList.contains(current)){
        li.classList.add('active');
       }
    })
    })
});
// activemenu();
// function activemenu(){
    
//     let len = sec.length;
//     while(--len && window.scrollY + 97 <= sec[len].offsetTop){
//         li.forEach(ltx => ltx.classList.remove("active"));
//         li[len].classList.add("active");
//     }
// }


