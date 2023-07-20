function ViewMenu(){

// let n = document.getElementById('new');
// n.style.display='block';
document.querySelector('.new').classList.add('display')
let close =document.querySelector('.close-new').addEventListener('click',function(){
    document.querySelector('.new').classList.remove('display')

})
}
function openlogo(){
     document.querySelector('.openLogo').classList.add('display');
    // m.style.display='block';
     document.querySelector('.new-logo').addEventListener('click',function(){
    document.querySelector('.openlogo').classList.remove('display')

})
}



function ViewMenuNew(){
document.querySelector('.newMenu').classList.add('display');
document.querySelector('.close-new').addEventListener('click',function(){
    document.querySelector('.newMenu').classList.remove('display')
})
}

function openLogoNew(){
document.querySelector('.openLogoMenu').classList.add('display');
document.querySelector('.logo-img.new-logo').addEventListener('click',function(){
    document.querySelector('.openLogoMenu').classList.remove('display')

})

    
}



function openlogoCont(){
    document.querySelector('.openLogoMenu').classList.add('display');
    document.querySelector('.logo-img.new-logo').addEventListener('click',function(){
        document.querySelector('.openLogoMenu').classList.remove('display')
    })
}

function ViewMenuCont(){
    document.querySelector('.newMenuContact').classList.add('display');
    document.querySelector('.close-new').addEventListener('click',function(){
        document.querySelector('.newMenuContact').classList.remove('display')
    })
}





function openlogoAbout(){
    document.querySelector('.openLogoAbout').classList.add('display');
    document.querySelector('.logo-img.new-logo').addEventListener('click',function(){
        document.querySelector('.openLogoAbout').classList.remove('display')
    })

}

function ViewMenuAbout(){
    document.querySelector('.newMenuAbout').classList.add('display');
    document.querySelector('.close-new').addEventListener('click',function(){
        document.querySelector('.newMenuAbout').classList.remove('display')
    })
}





function ViewMenuBlogs(){
document.querySelector('.newMenuBlogs').classList.add('display')
    document.querySelector('.close-new').addEventListener('click',function(){
    document.querySelector('.newMenuBlogs').classList.remove('display')

})
}

function openLogoBlogs(){
document.querySelector('.openlogoBlog').classList.add('display');

    document.querySelector('.new-logo').addEventListener('click',function(){
        document.querySelector('.openlogoBlog').classList.remove('display')
    
    })    
}




function setscrollBy(){
    window.scrollBy(0,2800);
    const windScroll=window.pageYOffset;
    console.log(windScroll);
}
// function setscrollBy(){
//     window.scrollTo({
// top:2800,
// left: 0,
// behavior:'smooth'
//     })
//     // const windScroll=window.pageYOffset;
//     // console.log(windScroll);
// }

// function setscrollBy(top){
//     let sectSelected = document.querySelector('.section-3');
//     sectSelected.scrollIntoView({

//         block:"start",
//         inline:"nearest",
//         behavior:'smooth'
//     });
// }