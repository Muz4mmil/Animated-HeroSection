let isNavExpanded = false;

document.querySelector('.nav-btn').addEventListener('click', ()=>{
    if(isNavExpanded){
        document.querySelector('.nav-btn').innerHTML = '<i class="fa-solid fa-bars"></i>'
        document.querySelector('.navbar').style.right = '-60%'
        document.querySelector('.nav-overlay').style.display = 'none'
        isNavExpanded = false;
    }else{
        document.querySelector('.nav-btn').innerHTML = '<i class="fa-solid fa-xmark"></i>'
        document.querySelector('.navbar').style.right = 0;
        document.querySelector('.nav-overlay').style.display = 'block'
        isNavExpanded = true;
    }
})