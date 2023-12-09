var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var randomnumber=Math.floor(Math.random()*10)+1
var score=document.getElementById("score")
var totalscore=10

function verify()
{
    var enterednumber = guessnumber.value
    if(randomnumber==guessnumber)
    {
        console.log("Right")
        result.textContent="Right"
        alert("you won..")
    }
    else{
        totalscore=totalscore-1
        score.textContent="score:"+totalscore
        result.textContent="Wrong"
    }
}