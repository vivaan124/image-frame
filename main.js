function preload () {
    border = loadImage("https://cdn.pixabay.com/photo/2016/09/27/16/16/photo-frame-1698755_1280.png")
}

function setup () {
  canvas = createCanvas(300, 300)
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
}

function draw () {
  image(video, 0, 0, 300, 300);
  image(border, 0, 0, 300, 300);
}

function take_snapshot() {
    save('mypicture.png');
}