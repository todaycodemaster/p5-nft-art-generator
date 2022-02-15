function preload() {
    (img = loadImage(imgList[random([1, 2, 3, 4, 5])])),
        (angoff = (PI / 180) * random(0, 360)),
        (left_x = Math.round(-0.5 * ww)),
        (right_x = Math.round(1.5 * ww)),
        (top_y = Math.round(-0.5 * hh)),
        (bottom_y = Math.round(1.5 * hh)),
        (resolution = Math.round(0.01 * ww)),
        (num_columns = Math.round((right_x - left_x) / resolution)),
        (num_rows = Math.round((bottom_y - top_y) / resolution)),
        (grid = new Array(num_columns));
    for (var o = 0; o < num_columns; o++) grid[o] = new Array(num_rows);
    for (pentagons = [], shapecolors = [], o = 0; o < 5; o++) pentagons.push(createStretchedPentagon(pp[o][0], pp[o][1])), shapecolors.push([random(0, 150), random(0, 150), random(0, 150), 10]);
    for (x1 = [], y1 = [], x2 = [], y2 = [], o = 0; o < 10; o++) x1.push(random(0, ww / 2)), y1.push(random(0, hh / 2)), x2.push(random(ww / 2, ww)), y2.push(random(0, hh / 2));
}
function setup() {
    noStroke(), (canvas = createCanvas(ww, hh)), background(255);
    for (var o = 0; o < 5; o++) drawCustomShape(pentagons[o], shapecolors[o]);
    beginShape();
    for (var n = 0; n < num_columns; n++)
        for (var r = 0; r < num_rows; r++) {
            var a = 0.01 * parseFloat(n),
                e = 0.01 * parseFloat(r),
                t = noise(a, e);
            (angle = map(t, 0, 1, 0, TWO_PI) + radians(100)), (grid[n][r] = angle);
        }
    var h = color(255, 255, 255);
    for (h.setAlpha(2), fill(h), o = 0; o < 10; o++) myFlowField(x1[o], y1[o], num_steps);
    for (o = 0; o < 10; o++) myFlowField(x2[o], y2[o], num_steps);
    endShape(), tint(255, 180), translate(ww / 2, hh / 2), rotate(angoff), imageMode(CENTER), image(img, 0, 0, 1.5 * ww, 1.25 * hh);
}
function draw() {
    noStroke();
    let o = color(191, 185, 185);
    fill(o), rect(0, 0, 12, hh), rect(0, 0, ww, 12), rect(0, hh - 12, ww, hh), rect(ww - 12, 0, ww, hh);
}
function windowResized() {
    (hh = window.innerHeight), (ww = hh * ratio);
    const o = Math.min(ww, hh);
    (M = o / defaultSize), console.log(`M: ${M}`), R.reset(), resizeCanvas(ww, hh), setup();
}
