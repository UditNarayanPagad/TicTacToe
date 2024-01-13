let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turn0 = true;

const winPartterns = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
let disableBox = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
let resetBox = ()=>{
    turn0 = true;
    enableBox();
}
let enableBox = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
reset.addEventListener("click",()=>{
    resetBox();
})

let clickCount = 0;
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        // console.log("Clicked");
        clickCount++;
        console.log(clickCount);
        
        if(turn0){
            box.innerHTML = "O";
            turn0 = false;
        }
        else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        // console.log(box.innerHTML);
        // console.log(winPartterns[0][0]);
        // console.log(winPartterns[0][1]);
        // console.log(winPartterns[0][2]);
        // console.log(winPartterns[1][0]);
        // console.log(winPartterns[1][1]);
        // console.log(winPartterns[1][2]);
        // console.log(winPartterns[2][0]);
        // console.log(winPartterns[2][1]);
        // console.log(winPartterns[2][2]);

        checkWinner(clickCount);
    });
    const checkWinner = (clickCount)=>{
        for(let pattern of winPartterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    let winner;
                    if(turn0){
                      winner = "Player2";
                    }
                    else{
                      winner = "Player1"
                    }
                    // box.disabled = true;
                    disableBox();
                    alert(`Congratulations... Winner is ${winner}`);
                }
            }
        }
        if(clickCount === 9){
            alert("Opps!!! Game is Draw");
        }
    }
});