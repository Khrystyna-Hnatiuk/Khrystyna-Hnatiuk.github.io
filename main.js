function ViewMenu(){

let n = document.getElementById('new');
n.style.display='block';


}


function openlogo(){
     document.getElementById('openLogo').style.display='block';
    // m.style.display='block';
}

function ViewMenuNew(){
document.getElementById('newMenu').style.display='block'
}


function openLogoNew(){
document.getElementById('openLogoMenu').style.display='block'
}

function openlogoCont(){
    document.getElementById('openLogoMenu').style.display='block'
}

function ViewMenuCont(){
    document.getElementById('newMenuContact').style.display='block'

}



function openlogoAbout(){
    document.getElementById('openLogoAbout').style.display='block'

}

function ViewMenuAbout(){
    document.getElementById('newMenuAbout').style.display='block'
    
}

function ViewMenuBlogs(){
    document.getElementById('newMenuBlogs').style.display='block'
    
}

function openLogoBlogs(){
    document.getElementById('openlogoBlog').style.display='block'
    
}




// function setscrollBy(){
//     window.scrollBy(0,2800);
//     const windScroll=window.pageYOffset;
//     console.log(windScroll);
// }
// function setscrollBy(){
//     window.scrollTo({
// top:2800,
// left: 0,
// behavior:'smooth'
//     })
//     // const windScroll=window.pageYOffset;
//     // console.log(windScroll);
// }

function setscrollBy(top){
    let sectSelected = document.querySelector('.section-3');
    sectSelected.scrollIntoView({

        block:"start",
        inline:"nearest",
        behavior:'smooth'
    });
}