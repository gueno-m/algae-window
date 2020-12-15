let pos = 6000;
let a = 0;
let title

 function preload() {
    algue = loadImage('assets/algue.png');
    Helvetica = loadFont("../assets/HelveticaNowMicro-Medium.ttf");
    vid = createVideo('../assets/test.mp4');
    vid.size(windowWidth, windowHeight)
 }

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCamera();
    cam.move(0, 0, 6500)
    title = document.getElementById("titre")
    vid = document.getElementById("video")
    canvas = document.getElementById('defaultCanvas0')
    progress = document.getElementById('progress')
}
function draw() {
    smooth()
    background('#000000');

    push()
    translate(-423, -421.5, pos - 2000)
    image(algue, 0,0, 846, 843);
    pop()

    a = a + 0.01

    push()
    strokeWeight(3)
    stroke('white')
    point(20, 50)
    point(80, 50)
    fill('black')
    translate(-40, 500, pos)
    rotate(a)
    rect(-40, -40, 80, 80)
    pop()

    fill('#FFFFFF')
    textSize(15)
    push()
    textFont(Helvetica)
    translate(-75, 505, pos)
    text('scroll'.toUpperCase(), 0, 0)
    pop()

    push()//RECT NOIR
    strokeWeight(0);
    blendMode(DARKEST);

    fill(0,0,0, ((7000 - pos)/1000)*255);

    translate(-500, -200, pos-10)
    rect(0, 0, 1000, 400)
    blendMode(BLEND);
    pop()

    fill('#FFFFFF')//TITLE
    textSize(200)
    push()
    textFont(Helvetica)
    translate(-935, 80, pos)
    text('algae window'.toUpperCase(), 0, 0)
    pop()
fill('#FFFFFF')
    textSize(20)
    push()
    textFont(Helvetica)
    translate(400, -50, pos-1000)
    text(`Materials:${`\n`}${`\n`}- Glass spheres, ${`\n`}- Steel, ${`\n`}- Aluminium, ${`\n`}- Plastic, ${`\n`}- Paint (black)`,0,0)
    pop()

    fill('#FFFFFF')
    textSize(20)
    push()
    textFont(Helvetica)
    translate(-850, -100, pos-1000)
    text(`Algae window is an arrangement ${`\n`}of glass spheres mounted in a wall. ${`\n`}Directly behind the wall and the spheres ${`\n`}is a window; vivid, miniature, inverted ${`\n`}views of the scene outside the gallery ${`\n`}thus appear in and inhabit each sphere. ${`\n`}The composition of the work closely ${`\n`}resembles the structure of one type ${`\n`}of the single-celled algae known as ${`\n`}diatoms, which remove large amounts ${`\n`}of carbon from the atmosphere.`,0,0)
    pop()
    
    orbitControl(.02, .02, .0001)

    if (pos > 7100)
        title.style.visibility = "visible"
    else
        title.style.visibility = "hidden"
    
    if (pos <= 9000)
        canvas.style.visibility = "visible"
    else
        canvas.style.visibility = "hidden"

    let o = 1 - (pos- 8600)/1000
    canvas.style.opacity = o;

    let w = (pos - 6000)/30
    progress.style.width = `${w}%`
}

function mouseWheel(event) {
    pos += event.delta;
    if (pos < 6000) {
        pos = 6000
    }

    if (pos > 9001) {
        pos = 9001
    }

    
}


(function(window, videojs) {
    let player = window.player = videojs('videojs-vr-player');
    player.mediainfo = player.mediainfo || {};
    player.mediainfo.projection = '360';
    player.controls(false);

    let vr = window.vr = player.vr({projection: 'EAC', debug: true, forceCardboard: false});
  }(window, window.videojs));