let pos = 6000;
let a = 0;
let title
let canvas = null;

 function preload() {
    ice = loadImage('assets/ice_watch.png');
    iceMolten = loadImage('assets/ice_watch_fondu.png');
    createVideo('../assets/ice-watch.mp4');
    Mazzard = loadFont("../assets/fonts/MazzardM-Medium.ttf");
    Zolina = loadFont("../assets/fonts/Zolina-Regular.ttf");
    ZolinaBold = loadFont("../assets/fonts/Zolina-Bold.ttf");
 }

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCamera();
    cam.move(0, 0, 6500)
    titleIce = document.getElementById("titreIce")
    retourCarte = document.getElementById("retourCarte")
    canvas = document.getElementById('defaultCanvas0')
    progress = document.getElementById('progress')
    rond1 = document.getElementsByClassName('rond')[0]
    rond2 = document.getElementsByClassName('rond')[1]
    rond3 = document.getElementsByClassName('rond')[2]
    rond4 = document.getElementsByClassName('rond')[3]
}

function draw() {

    a = a + 0.01

    smooth()
    background('#000000');

    // IMAGE GLACE
    push()
    translate(-577.5, -180.5, pos - 2000)
    tint(255, 255, 255, 255+((7700 - pos)/1000)*255*4)
    image(ice, a,0, 1155, 361);
    pop()

    // IMAGE GLACE FONDU
    push()
    translate(-577.5, -180.5, pos - 2000)
    tint(255, 255, 255, -((7700 - pos)/1000)*255*4)
    image(iceMolten, 0,0, 1155, 361);
    pop()

    // CARRE SCROLL
    push()
    strokeWeight(3)
    stroke('white')
    fill('black')
    translate(0, 500, pos)
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
    translate(-29, 505, pos)
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
    translate(-600, 87, pos)
    text('Ice Watch', 0, 0)
    pop()

    // LINE CONTEXT
    push()
    strokeWeight(2)
    stroke(255, 255, 255, -((7000 - pos)/1000)*255*2.5)
    line(400, 120, pos-2000, 290, 95, pos-1000);
    pop()

    // TITRE CONTEXT
    textSize(40)
    push()
    textFont(ZolinaBold)
    fill(255, 255, 255, -((7000 - pos)/1000)*255*2.5);
    translate(270, 70, pos-1000)
    text(`Context`,0,0)
    pop()

    // CONTEXT
    textSize(18)
    push()
    textFont(Mazzard)
    fill(175, 175, 175, -((7000 - pos)/1000)*255*2.5);
    translate(300, 100, pos-1000)
    text(`The work raises awareness of climate ${`\n`}change by providing a direct and tangible ${`\n`}experience of the reality of melting arctic ice. ${`\n`}Ice Watch has been installed in three locations.`,0,0)
    pop()

    // LINE WORK    
    push()
    strokeWeight(2)
    stroke('white')
    line(-350, -100, pos-2000, -170, -58, pos-600);
    pop()

    // TITRE WORK
    fill('#FFFFFF')
    textSize(40)
    push()
    textFont(ZolinaBold)
    translate(-530, -130, pos-600)
    text(`Work`,0,0)
    pop()

    // WORK
    fill(175, 175, 175)
    textSize(18)
    push()
    textFont(Mazzard)
    translate(-500, -100, pos-600)
    text(`Twelve large blocks of ice cast off from ${`\n`}the Greenland ice sheet are harvested ${`\n`}from a fjord outside Nuuk and presented ${`\n`}in a clock formation in a prominent public ${`\n`}place.`,0,0)
    pop()
    
    orbitControl(.02, .02, .0001)

    if (pos > 7100.5) {
        titleIce.style.visibility = "visible"
    }
    else {
        titleIce.style.visibility = "hidden"
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

    if(pos >= 6000) {
        rond1.style.backgroundColor = "white";
    } else {
        rond1.style.backgroundColor = "transparent";
    }

    console.log(pos);

    if(pos > 7075) {
        rond2.style.backgroundColor = "white";
    } else {
        rond2.style.backgroundColor = "black";
    }

    if(pos > 8021) {
        rond3.style.backgroundColor = "white";
    } else {
        rond3.style.backgroundColor = "black";
    }

    if(pos > 9000) {
        rond4.style.backgroundColor = "white";
    } else {
        rond4.style.backgroundColor = "transparent";
    }
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

const iceberg = document.getElementById('iceberg')
        const para = document.querySelectorAll(".info")
        console.log(para)
        iceberg.addEventListener('mouseenter', () => {
            [].forEach.call(para, function (p) {
                if(p.style.visibility === 'hidden') {
                    p.style.visibility = 'visible'
                    p.style.opacity = 1
                } else {
                    p.style.visibility = 'visible'
                    p.style.opacity = 1
                }
            });
        });

        iceberg.addEventListener('mouseleave', () => {
            [].forEach.call(para, function (p) {
                if(p.style.visibility === 'visible') {
                    p.style.visibility = 'hidden'
                    p.style.opacity = 0
                } else {
                    p.style.visibility = 'hidden'
                    p.style.opacity = 0
                }
            });
        });