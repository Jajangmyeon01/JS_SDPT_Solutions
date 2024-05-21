    // And Operator //
    let age = 18;
    let exp = 3;
    let language = "JS"

    if(age >= 18 && exp > 1 && language === "JS"){
        console.log("You have been Passed!");
    }else{
        console.log("You are not qualified!");
    }
    // Or Operator //
    let hasDegree = true;
    let experience = 3;

    if(hasDegree || experience > 2){
        console.log("You can work!");
    }else{  
        console.log("You can't work");
    }
    // Not Operator //
    let isTall = true;
    if (!isTall){
        console.log("You are Tall");
    }else{
        console.log("You are not Tall");
    }

    let hasBallpen = true;
    let qty = 2;

    if(hasBallpen){
        if(qty > 1){
            console.log("You can go to School");
        }else{
            console.log("Please bring the following");
        }
    }else{
        console.log("You don't have ballpen");
    }
