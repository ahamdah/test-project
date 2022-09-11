var i=0;
function showText(){
    var x=document.createElement("div");
    x.setAttribute("id","hello"+i);
    x.setAttribute("class","h")
    x.textContent = "Hello, world";
    document.body.append(x);
    ++i;
}
function removeText(){
    if(i!=0){
    var s=document.getElementById(("hello"+(i-1)));
    s.remove();
    i--;
    }
}

