
function logout(){
    localStorage.setItem('authenticated','false');
}


window.onload = function(){
    const btn01 = document.getElementById('button01');
    const btn02 = document.getElementById('button02');
    const btn03 = document.getElementById('button03');
    let $btnfwd = document.getElementById('forward');
    let $btnback = document.getElementById('back');
    let $image = document.getElementById('image');


    let actual = 1;

    var imgs = [
        'Pics/top 005.png',
        'Pics/top 006.png',
        'Pics/top 010.png',
        'Pics/top 008.webp',
        'Pics/top 009.webp'

    ];

    if(localStorage.getItem('authenticated')==='true'){

        btn01.hidden = true;
        btn02.hidden = false;
        btn03.hidden = true;
    }else{

        btn02.hidden = true;
    }

    function forward(){
        if(actual > imgs.length-1){
            actual = 1;
        }else{
            actual++;
        }
        render();
    }

    function back(){
        if(actual<=1){
            actual = imgs.length;
        }else{
            actual--;
        }
        render();
    }

    function render(){
        $image.style.backgroundImage = `url(${imgs[actual-1].replace(" ","%20")})`;
    }

    $btnfwd.addEventListener('click',forward);
    $btnback.addEventListener('click',back);
    render();

}
