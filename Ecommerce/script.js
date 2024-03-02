let back_button = document.getElementsByTagName("button")[0];
let next_button = document.getElementsByTagName("button")[1];
let slide_show_image = document.getElementsByTagName("img")[0];

var count = 0;

var image_lst = ["newsroom-innovation-13th-gen-intel-core-1-feat.jpg.rendition.intel_.web_.1648.927.jpg" , "1413018-am5-ryzen-1260x709_0.avif"];

function next(){
    if (count == (image_lst.length - 1)){
        count = 0;
    }
    else{
        count++;
    }
    slide_show_image.style.backgroundImage = `url(./${image_lst[count]})`;
}

function prev(){
    if (count == 0){
        count = image_lst.length - 1;
    }
    else{
        count--;
    }
    slide_show_image.style.backgroundImage = `url(./${image_lst[count]})`;
}

setInterval(next , 2500);

// Add To Cart

