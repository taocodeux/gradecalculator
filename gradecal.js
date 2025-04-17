function checkResult(){
    let inputValue = document.getElementById("inputgrade").value
    let myGradePoint = document.getElementById("result")

    
    if (inputValue === "") {
        myGradePoint.innerHTML = "Please input your grade score!"
        return
    }

    let myPercentage = Number(inputValue)

    if (myPercentage >= 0 && myPercentage < 50) {
        myGradePoint.innerHTML = "F9 - Failed &#x1F641"
        }
    else if (myPercentage >= 50 && myPercentage < 65){
        myGradePoint.innerHTML = "C - Credit &#x1F600"
        }
    else if (myPercentage >= 65 && myPercentage < 80){
        myGradePoint.innerHTML = "B - Passed &#x1F601"
        }
    else if (myPercentage >= 80 && myPercentage <= 100){
        myGradePoint.innerHTML = "A - Excellent &#x1F603"
        }
    else if(myPercentage >100){
        myGradePoint.innerHTML="grade cannot be greater than 100 &#x1F603"
    }
    else if(myPercentage === ""){
        myGradePoint.innerHTML ="Please input your grade score"
    }
    else {
        myGradePoint.innerHTML = "Invalid input!"
    }
    
   }
