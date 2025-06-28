    
    var cont = 1;

function logout(){
    localStorage.setItem('authenticated','false');
}

function hamburguer(){
    const panel = document.getElementById('hamburguer-panel');
    console.log(cont);
    if (cont == 1){
    panel.style.display = "block";
    cont--;
    } else if(cont==0){
        panel.style.display = "none";
        cont++;
    }

}


window.onload = function(){
    // localStorage.setItem('authenticated',"true");
    const btn01 = document.getElementById('button01');
    const btn02 = document.getElementById('button02');
    const btn03 = document.getElementById('button03');
    // const panel = document.getElementById('hamburguer-panel');
    let $btnfwd = document.getElementById('forward');
    let $btnback = document.getElementById('back');
    // let $image = document.getElementById('image');
    let currentIndex = 0;



    // var imgs = [
    //     'Pics/top 005.png',
    //     'Pics/top 006.png',
    //     'Pics/top 010.png',
    //     'Pics/top 008.webp',
    //     'Pics/top 009.webp'

    // ];

    if(localStorage.getItem('authenticated')==="true"){
        
        btn01.hidden = true;
        btn02.hidden = false;
        btn03.hidden = true;
    }else{
        btn02.hidden = true;
    }

    function forward(){
      navigate(1);

    }

    function back(){
         navigate(-1);
    }
    
    function navigate(direction) {
     const galleryContainer = document.querySelector('.gallery-container');
     const totalImages = document.querySelectorAll('.gallery-item').length;
     currentIndex = (currentIndex + direction + totalImages) % totalImages;
       if(direction>0){
       const offset = -currentIndex * 25;  
       galleryContainer.style.transform = `translateX(${offset}%)`;
       }else{
         const offset = currentIndex * 25;
         galleryContainer.style.transform = `translateX(${offset}%)`;
       }
    }

    $btnfwd.addEventListener('click',forward);
    $btnback.addEventListener('click',back);

}
