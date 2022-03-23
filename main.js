var mouse_event ="empty";

var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color= "black";
width_fo_line= 1;
canvas.addEventListener("my_mouse_down",my_mousedown);
function my_mousedown(e){
    mouse_event="my_mouse_down";
}

canvas.addEventListener("my_mouse_up",my_mouseup);
function my_mouseup(e){
    mouse_event="my_mouse_up";
}

canvas.addEventListener("my_mouse_leave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="my_mouse_leave";
}

canvas.addEventListener("my_mouse_move",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if(mouse_event=="my_mouse_down"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_fo_line;
    console.log("last position of X and Y cord");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("curent position of X and Y is");
    console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}