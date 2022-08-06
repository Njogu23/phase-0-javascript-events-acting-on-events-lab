const dodger = document.getElementById('dodger');
const game = document.getElementById('game');
dodger.style.backgroundColor = '#FF0';
game.style.backgroundColor = '#800000';



function moveDodgerLeft (){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0){
        dodger.style.left = `${left - 7}px`;
    }
};

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10);

    if(right < 360){
        dodger.style.left = `${right + 7}px`
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){
        moveDodgerLeft()
    }else if (e.key === 'ArrowRight'){
        moveDodgerRight()
    }
})

  
