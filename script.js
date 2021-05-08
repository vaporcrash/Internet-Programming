let imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg"]
let ind = 0, cnt = 0;

function change() {
    setTimeout(
        function() {
            ind = (ind + 1) % 10;
            let u = "url(" + imgs[ind] + ") no-repeat center center fixed";
            console.log(u);
            document.body.style.background = u;
            document.body.style.backgroundSize= "cover";
            change();
        }, 
    2000);
}

document.getElementById("txt").addEventListener('click', function() {
    cnt = cnt + 1;
    document.getElementById("cnt").innerHTML = cnt;
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let col = "rgb(" + r + ", " + g + ", " + b + ")";
    document.getElementById("txt").style.color = col;
})

window.addEventListener('load', change());