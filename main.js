var canvas=new fabric.Canvas('myCanvas');

player_x=30;
player_y=30;

block_width=30;
block_height=30;

var player_img="";
var block_img="";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_img=Img;

        player_img.scaleToWidth(160);
        player_img.scaleToHeight(150);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    });
}

function blockupdate(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_img=Img;

        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=="80"){
        console.log("p+shift press together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey && keypress=="77"){
        console.log("shift+keypress press together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypress=="38"){
        up();
        console.log("up");
    }
    if(keypress=="40"){
        down();
        console.log("down");
    }
    if(keypress=="37"){
        left();
        console.log("left");
    }
    if(keypress=="39"){
        right();
        console.log("right");
    }
    if(keypress=="67"){
        blockupdate("cloud.jpg");
        console.log("c");
    }
    if(keypress=="68"){
        blockupdate("dark_green.png");
        console.log("d");
    }
    if(keypress=="71"){
        blockupdate("ground.png");
        console.log("g");
    }
    if(keypress=="76"){
        blockupdate("light_green.png");
        console.log("l");
    }
    if(keypress=="82"){
        blockupdate("roof.jpg");
        console.log("r");
    }
    if(keypress=="84"){
        blockupdate("trunk.jpg");
        console.log("t");
    }
    if(keypress=="85"){
        blockupdate("unique.png");
        console.log("u");
    }
    if(keypress=="87"){
        blockupdate("wall.jpg");
        console.log("w");
    }
    if(keypress=="89"){
        blockupdate("yellow_wall.png");
        console.log("y");
    }
}
function up(){
    if(player_y >=0){
        player_y=player_y-block_height;
        console.log("block_height =" + block_height);
        console.log("when up arrow is pressed, x= " + player_x + " y= " + player_y);
        canvas.remove(player_img);
        playerupdate();
    }
}
function down(){
    if(player_y <=750){
        player_y=player_y+block_height;
        console.log("block_height =" + block_height);
        console.log("when down arrow is pressed, x= " + player_x + " y= " + player_y);
        canvas.remove(player_img);
        playerupdate();
    }
}
function left(){
    if(player_x >0){
        player_x=player_x-block_width;
        console.log("block_width =" + block_width);
        console.log("when left arrow is pressed, x= " + player_x + " y= " + player_y);
        canvas.remove(player_img);
        playerupdate();
    }
}
function right(){
    if(player_x <750){
        player_x=player_x+block_width;
        console.log("block_width =" + block_width);
        console.log("when right arrow is pressed, x= " + player_x + " y= " + player_y);
        canvas.remove(player_img);
        playerupdate();
    }
}