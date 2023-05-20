// javascript code goes here
const applyButton = document.getElementById('apply-btn');

const resetButton = document.getElementById('reset-btn');


applyButton.addEventListener('click', takeColor);
resetButton.addEventListener('click', resetColor);

function takeColor(){
    const wallColor = document.getElementById('wall_color').value;
    const wallId = document.getElementById('wall_id').value;
    const wall = document.getElementsByClassName('block');
    for(let i=0;i<wall.length;i++){
        const walls = wall[i];
        if(walls.id=== wallId){
            walls.style.backgroundColor= wallColor;
        }
    }

}

function resetColor(){
    const blocks = document.getElementsByClassName('block');
    for(let i=0;i<blocks.length;i++){
        blocks[i].style.backgroundColor = 'transparent'
    }
}