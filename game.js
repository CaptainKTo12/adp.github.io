// Creating variables
let background = tryToLoad("BackHistory2","pink")
let icon1 = tryToLoad("icon1","blue")
let icon5 = tryToLoad("icon5","darkblue")
let paragraph1= tryToLoad("p1")
let openp1=false
let icon2 = tryToLoad("icon2","blue")
let icon6 = tryToLoad("icon6","darkblue")
let paragraph2= tryToLoad("p2")
let openp2=false
let icon3 = tryToLoad("icon3","blue")
let icon7 = tryToLoad("icon7","darkblue")
let paragraph3= tryToLoad("p3")
let openp3=false
let icon4 = tryToLoad("icon4","blue")
let icon8 = tryToLoad("icon8","darkblue")
let paragraph4= tryToLoad("p4")
let openp4=false
function update() {};
function draw() {
    drawImage(background,0,0,960,520)
    drawImage(icon1,58,190,140,140)
    if(areColliding(mouseX,mouseY,0,0,58,190,140,140)){
        drawImage(icon5,58,190,140,140)
    }
    drawImage(icon2,282,190,140,140)
    if(areColliding(mouseX,mouseY,0,0,282,190,140,140)){
        drawImage(icon6,282,190,140,140)
    }
    drawImage(icon3,518,190,140,140)
    if(areColliding(mouseX,mouseY,0,0,518,190,140,140)){
        drawImage(icon7,518,190,140,140)
    }
    drawImage(icon4,770,190,140,140)
    if(areColliding(mouseX,mouseY,0,0,770,190,140,140)){
        drawImage(icon8,770,190,140,140)
    }
    if(openp1==true){
        drawImage(paragraph1,0,0,1000,707)
    };
    if(openp2==true){
        drawImage(paragraph2,0,0,1000,707)
    };
    if(openp3==true){
        drawImage(paragraph3,0,0,1000,707)
    };
    if(openp4==true){
        drawImage(paragraph4,0,0,1000,707)
    };
};
function keyup(key) {};
function keydown(key) {};
function mouseup() {
    console.log("Mouse clicked at", mouseX, mouseY);
    if(areColliding(mouseX,mouseY,0,0,58,190,140,140)){
        openp1=true
    }
    if(openp1==true){
        if(areColliding(mouseX,mouseY,0,0,827,46,110,87)){
            openp1=false
        }
    }
    if(areColliding(mouseX,mouseY,0,0,282,190,140,140)){
        openp2=true
    }
    if(openp2==true){
        if(areColliding(mouseX,mouseY,0,0,827,46,110,87)){
            openp2=false
        }
    }
    if(areColliding(mouseX,mouseY,0,0,518,190,140,140)){
        openp3=true
    }
    if(openp3==true){
        if(areColliding(mouseX,mouseY,0,0,827,46,110,87)){
            openp3=false
        }
    }
    if(areColliding(mouseX,mouseY,0,0,770,190,140,140)){
        openp4=true
    }
    if(openp4==true){
        if(areColliding(mouseX,mouseY,0,0,827,46,110,87)){
            openp4=false
        }
    }
};
