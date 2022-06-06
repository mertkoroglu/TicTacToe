let value = 0;
let a = document.getElementsByTagName("th");
let res = document.getElementById("res");
let end = 0;

function place(val){
    if(end == 0){
        let b = document.createElement("img");
        b.src = "images/Transparent_X.png";
        let c = document.createElement("img");
        c.src = "images/AI_LOGO.png";


        if(a[val-1].hasChildNodes() == 0){
            a[val-1].appendChild(b);
            a[val-1].classList.add("you");
            let AI = Math.floor(Math.random() * 9);
            let i = 0;
            value++;

            checkWin("you", "YOU WIN", "win");
            if(end == 0)
                checkWin("ai", "YOU LOST", "lose");
            if(end == 0){
                checkDraw();
            
                
                while(i == 0 && value < 8){
                    if(a[AI].hasChildNodes() == 0){
                        a[AI].appendChild(c);
                        a[AI].classList.add("ai");

                        i = 1;
                        value++;
                    }
                    else
                        AI = Math.floor(Math.random() * 9);

                }
        }
    }

        checkWin("you", "YOU WIN", "win");
        if(end == 0)
            checkWin("ai", "YOU LOST", "lose");
        if(end == 0)
            checkDraw();
    }
}

function checkDraw(){
    let temp = 1;
    for(let j = 0; j<9; j++){
        
        if (!a[j].classList.contains("you") && !a[j].classList.contains("ai")){
            console.log(a[j].classList);
            temp = 0;
        }
    }
    
    if(temp == 1){
        res.textContent = "TIE";
        res.classList.add("tie");

        end = 1;
    }
}

function checkWin(val, mes, state){
    
    for(let j = 0; j<9; j+=3){
        if(a[j].classList.toString() == val && a[j+1].classList.toString() == val && a[j+2].classList.toString() == val){
            if(state == "win"){
                a[j].style.backgroundColor = "green";
                a[j+1].style.backgroundColor = "green";
                a[j+2].style.backgroundColor = "green";
            }
            else{
                a[j].style.backgroundColor = "red";
                a[j+1].style.backgroundColor = "red";
                a[j+2].style.backgroundColor = "red";
            }
            res.textContent = mes;
            res.classList.add(state);

            end = 1;
        }
    }

    for(j = 0; j<3; j+=1){
        if(a[j].classList.toString() == val && a[j+3].classList.toString() == val && a[j+6].classList.toString() == val){
            if(state == "win"){
                a[j].style.backgroundColor = "green";
                a[j+3].style.backgroundColor = "green";
                a[j+6].style.backgroundColor = "green";
            }
            else{
                a[j].style.backgroundColor = "red";
                a[j+3].style.backgroundColor = "red";
                a[j+6].style.backgroundColor = "red";
            }
            res.textContent = mes;
            res.classList.add(state);


            end = 1;

        }

    }

    if(a[0].classList.toString() == val && a[4].classList.toString() == val && a[8].classList.toString() == val){
        if(state == "win"){
            a[0].style.backgroundColor = "green";
            a[4].style.backgroundColor = "green";
            a[8].style.backgroundColor = "green";
        }
        else{
            a[0].style.backgroundColor = "red";
            a[4].style.backgroundColor = "red";
            a[8].style.backgroundColor = "red";
        }
        res.textContent = mes;
        res.classList.add(state);

        end = 1;

    }

    if(a[2].classList.toString() == val && a[4].classList.toString() == val && a[6].classList.toString() == val){
        if(state == "win"){
            a[2].style.backgroundColor = "green";
            a[4].style.backgroundColor = "green";
            a[6].style.backgroundColor = "green";
        }
        else{
            a[2].style.backgroundColor = "red";
            a[4].style.backgroundColor = "red";
            a[6].style.backgroundColor = "red";
        }
        res.textContent = mes;
        res.classList.add(state);


        end = 1;
        
    }

}

