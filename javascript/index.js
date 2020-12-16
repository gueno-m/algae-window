let pos = 6000;
let a = 0;
let title
let canvas = null;

 function preload() {
    algue = loadImage('assets/algue.png');
    vid = createVideo('../assets/algae360.mp4');
    Mazzard = loadFont("../assets/fonts/MazzardM-Medium.ttf");
    Zolina = loadFont("../assets/fonts/Zolina-Regular.ttf");
    vid.size(windowWidth, windowHeight)
 }

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCamera();
    cam.move(0, 0, 6500)
    title = document.getElementById("titre")
    retourCarte = document.getElementById("retourCarte")
    vid = document.getElementById("video")
    canvas = document.getElementById('defaultCanvas0')
    progress = document.getElementById('progress')
    rond1 = document.getElementsByClassName('rond')[0]
    rond2 = document.getElementsByClassName('rond')[1]
    rond3 = document.getElementsByClassName('rond')[2]
    rond4 = document.getElementsByClassName('rond')[3]
    
    // window.addEventListener('resize', function(){
    //     console.log(canvas)
    //     canvas.style.width = window.innerWidth;
    //     canvas.style.height = window.innerHeight;
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    // });
}
function draw() {

    a = a + 0.01

    smooth()
    background('#000000');

    push()
    translate(-423, -421.5, pos - 2000)
    image(algue, 0,0, 846, 843);
    pop()

    // CARRE SCROLL
    push()
    strokeWeight(3)
    stroke('white')
    fill('black')
    translate(-40, 500, pos)
    rotate(a)
    rect(-40, -40, 80, 80)
    pop()

    // SCROLL
    let clignote = color(255, 255, 255)
    clignote.setAlpha(128 + 128 * sin(millis() / 300))
    fill(clignote)
    textSize(15)
    push()
    textFont(Mazzard)
    translate(-68, 505, pos)
    text('scroll'.toUpperCase(), 0, 0)
    pop()

    //RECT NOIR
    push()
    strokeWeight(0);
    blendMode(DARKEST);
    fill(0,0,0, -((7000 - pos)/1000)*255);
    translate(-500, -200, pos-10)
    rect(0, 0, 1000, 400)
    blendMode(BLEND);
    pop()

    //TITLE
    fill('#FFFFFF')
    textSize(250)
    push()
    textFont(Zolina)
    translate(-850, 87, pos)
    text('Algae Windøw', 0, 0)
    pop()

    // LINE
    push()
    strokeWeight(2)
    stroke(255, 255, 255, -((7000 - pos)/1000)*255*2)
    line(450, -120, pos-2000, 290, -58, pos-1000);
    pop()

    // Materials
    textSize(20)
    push()
    textFont(Mazzard)
    fill(255, 255, 255, -((7000 - pos)/1000)*255*2);
    translate(300, -50, pos-1000)
    text(`Materials:${`\n`}${`\n`}- Glass spheres, ${`\n`}- Steel, ${`\n`}- Aluminium, ${`\n`}- Plastic, ${`\n`}- Paint (black).`,0,0)
    pop()

    // TEXTE
    fill('#FFFFFF')
    textSize(18)
    push()
    textFont(Mazzard)
    translate(-500, -100, pos-500)
    text(`Algae window is an arrangement ${`\n`}of glass spheres mounted in a wall. ${`\n`}Directly behind the wall and the spheres ${`\n`}is a window; vivid, miniature, inverted ${`\n`}views of the scene outside the gallery ${`\n`}thus appear in and inhabit each sphere. ${`\n`}The composition of the work closely ${`\n`}resembles the structure of one type ${`\n`}of the single-celled algae known as ${`\n`}diatoms, which remove large amounts ${`\n`}of carbon from the atmosphere.`,0,0)
    pop()
    
    orbitControl(.02, .02, .0001)

    if (pos > 7049) {
        title.style.visibility = "visible"
        rond2.style.backgroundColor = "white";
    }
    else {
        title.style.visibility = "hidden"
        rond2.style.backgroundColor = "black";
    }
    
    if (pos <= 9000) {
        canvas.style.visibility = "visible"
        retourCarte.style.visibility = "hidden"
    } else {
        canvas.style.visibility = "hidden"
        retourCarte.style.visibility = "visible"
    }

    let o = 1 - (pos- 8600)/1000
    canvas.style.opacity = o;

    let w = (pos - 6000)/30
    progress.style.width = `${w}%`
    // console.log(w)

    if(pos > 6150) {
        rond1.style.backgroundColor = "white";
    } else {
        rond1.style.backgroundColor = "transparent";
    }

    // if(pos > 7049) {
    //     rond2.style.backgroundColor = "white";
    // } else {
    //     rond2.style.backgroundColor = "black";
    // }

    if(pos > 7949) {
        rond3.style.backgroundColor = "white";
    } else {
        rond3.style.backgroundColor = "transparent";
    }

    if(pos > 9000) {
        rond4.style.backgroundColor = "white";
    } else {
        rond4.style.backgroundColor = "transparent";
    }
}

function mouseWheel(event) {
    pos += event.delta;
    console.log(pos)
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