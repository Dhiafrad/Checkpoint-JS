
i=false
b=false
a=false

function italic() {
    if(i==false){
        document.getElementById("text").style.fontStyle = "italic";
        console.log(i)
        i=true
    }
    else if(i==true){
        document.getElementById("text").style.fontStyle = "normal";
        console.log(i)
        i=false
    }
}
function bold() {
    if(b==false){
     document.getElementById("text").style.fontWeight = "bold";
     console.log(b)
     b=true}
    else if(b==true){
        document.getElementById("text").style.fontWeight = "normal";
        console.log(b)
        b=false;
    }
}

    
function underline() {
    if(a==false){
    document.getElementById("text").style.textDecoration = "underline";
    console.log(a)
    a=true
    }
    else if(a==true){
        document.getElementById("text").style.textDecoration = "none";
        console.log(a)
        a=false;
    }
}

function changeFont(font){
    document.getElementById("text").style.fontFamily = font.value;
}
function changeSize(font){
    document.getElementById("text").style.fontSize = font.value;
}