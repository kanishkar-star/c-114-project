function preload(){

}

function setup(){
    canvas = createCanvas(300, 280);
    canvas.center()
}

function draw(){

}

function take_snapshot(){
    save('myFilter.png');
}

moustache_image = ['moustache.jpg', 'lipstick.jpg'];

function change_moustache(){
    document.getElementById("background_body").style.backgroundImage = "url(moustache.jpg)";
}

function change_lipstick(){
    document.getElementById("background_body").style.backgroundImage = "url(lipstick.jpg)";
}