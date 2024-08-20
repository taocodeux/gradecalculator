function checkResult(){
    let myPercentage = document.getElementById("inputgrade").value
    let myGradePoint = document.getElementById("result")

    if (myPercentage < 50) {
        result.innerHTML = "F9 - Failed &#x1F641"
        }
    else if (myPercentage >= 50 && myPercentage < 65){
        result.innerHTML = "C - Credit &#x1F600";
        }
    else if (myPercentage >= 65 && myPercentage < 80){
        result.innerHTML = "B - Passed &#x1F601";
        }
    else if (myPercentage >= 80 && myPercentage <= 100){
        result.innerHTML = "A - Excellent &#x1F603";
        }
    else if(myPercentage >100){
        alert("grade cannot be greater than 100")
    }
   }
