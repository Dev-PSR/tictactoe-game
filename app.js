let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector(".reset-button");
let turnX = true;
let popup = document.querySelector(".popup");
popup.style.visibility = "hidden";
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        
        if(checkWinner()){
            
        };
    })
}
)

const checkWinner = () => {
    for(let pattern of winPatterns){
        if(boxes[pattern[0]].innerText != "" && 
            boxes[pattern[0]].innerText == boxes[pattern[1]].innerText && 
            boxes[pattern[0]].innerText == boxes[pattern[2]].innerText)
            {
            let winner = boxes[pattern[0]].innerText;
            popup.innerText = `Congrats Player ${winner}. You have won`;
            popup.style.visibility = "visible"
            return
            }
    }
    
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnX = true;
    popup.style.visibility = "hidden";
});
