var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d7739294-34f8-4fd9-a608-e0c0f5700077","3ed9e634-7130-4154-b6b7-5b62c09f7c32","07e87cef-20ff-4355-8861-eccf4b23ab9b","d4d8580c-084b-45e8-b329-d1658d983ac9","28deb8ca-99d5-4a49-b0e8-cb4cab66d0a3","0a83d463-590c-4e1b-8788-27fe2d47655e","695ffcef-7f57-40ce-8cd2-6c0704bf9f10"],"propsByKey":{"d7739294-34f8-4fd9-a608-e0c0f5700077":{"name":"d","sourceUrl":"assets/v3/animations/Ya55JkgOyunFe7XCwEMv_7dojrkP1Yga1qYic8ASSTI/d7739294-34f8-4fd9-a608-e0c0f5700077.png","frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":4,"version":"_dqr0xSAheKtTHdSixDXeX4MvdkVZwHg","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/v3/animations/Ya55JkgOyunFe7XCwEMv_7dojrkP1Yga1qYic8ASSTI/d7739294-34f8-4fd9-a608-e0c0f5700077.png"},"3ed9e634-7130-4154-b6b7-5b62c09f7c32":{"name":"dima","sourceUrl":"assets/v3/animations/Ya55JkgOyunFe7XCwEMv_7dojrkP1Yga1qYic8ASSTI/3ed9e634-7130-4154-b6b7-5b62c09f7c32.png","frameSize":{"x":404,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"1d4vR2bpj2sFn9hWXG3zFCRyR5ThyhQi","loadedFromSource":true,"saved":true,"sourceSize":{"x":404,"y":125},"rootRelativePath":"assets/v3/animations/Ya55JkgOyunFe7XCwEMv_7dojrkP1Yga1qYic8ASSTI/3ed9e634-7130-4154-b6b7-5b62c09f7c32.png"},"07e87cef-20ff-4355-8861-eccf4b23ab9b":{"name":"mine","sourceUrl":"assets/v3/animations/Ya55JkgOyunFe7XCwEMv_7dojrkP1Yga1qYic8ASSTI/07e87cef-20ff-4355-8861-eccf4b23ab9b.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"8QKcEYFuCMOTM6oYEVoNdOFrQiIX8847","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/Ya55JkgOyunFe7XCwEMv_7dojrkP1Yga1qYic8ASSTI/07e87cef-20ff-4355-8861-eccf4b23ab9b.png"},"d4d8580c-084b-45e8-b329-d1658d983ac9":{"name":"download__9_-removebg-preview.png_1","sourceUrl":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/d4d8580c-084b-45e8-b329-d1658d983ac9.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"_RtGhXCN8OpUwXPf10afulAEFR_a5Ytd","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/d4d8580c-084b-45e8-b329-d1658d983ac9.png"},"28deb8ca-99d5-4a49-b0e8-cb4cab66d0a3":{"name":"r","sourceUrl":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/28deb8ca-99d5-4a49-b0e8-cb4cab66d0a3.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"7yi_IqnyqHgDpmBksv5PI8viQXPr7e8j","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/28deb8ca-99d5-4a49-b0e8-cb4cab66d0a3.png"},"0a83d463-590c-4e1b-8788-27fe2d47655e":{"name":"download__8_-removebg-preview.png_1","sourceUrl":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/0a83d463-590c-4e1b-8788-27fe2d47655e.png","frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":4,"version":"Lg3mmLgEm_aHltwzzE9QmiKEyPTtJyX.","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/0a83d463-590c-4e1b-8788-27fe2d47655e.png"},"695ffcef-7f57-40ce-8cd2-6c0704bf9f10":{"name":"l","sourceUrl":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/695ffcef-7f57-40ce-8cd2-6c0704bf9f10.png","frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":4,"version":"eBTIO2FrTRuDi0is2tPkKN_kpO.Llic4","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/v3/animations/qCCYXLNKXfvz3c4H6N360pOLo0IvLuECpkUabokp2lY/695ffcef-7f57-40ce-8cd2-6c0704bf9f10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var legal = createSprite(200, 200);
legal.setAnimation("d")
legal.scale = 4;
legal.debug = false;
var raquete = createSprite(210, 375, 100, 10);
raquete.setAnimation("mine")
raquete.debug = false;
raquete.setCollider("rectangle", 0, 0, 150, 20);
var bola = createSprite(200, 300, 20, 20);
bola.setAnimation("dima");
bola.debug = false;
bola.setCollider("rectangle", 0, 0, 100, 100);
bola.scale = 0.5;
var pontosdoproplayereclaro = 0;

var gamestate 
gamestate = "iniciar"


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
box9.setAnimation("l");
box9.debug = false;
box9.setCollider("rectangle", 0, 0, 160, 160);
box9.scale = 0.3;
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box10.shapeColor="blue";
box10.setAnimation("r");
box10.debug = false;
box10.setCollider("rectangle", 0, 0, 160, 160);
box10.scale = 0.21;
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box11.shapeColor="blue";
box11.setAnimation("l");
box11.debug = false;
box11.setCollider("rectangle", 0, 0, 160, 160);
box11.scale = 0.3;
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box12.shapeColor="blue";
box12.setAnimation("r");
box12.debug = false;
box12.setCollider("rectangle", 0, 0, 160, 160);
box12.scale = 0.21;
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
box13.shapeColor="blue";
box13.setAnimation("l");
box13.debug = false;
box13.setCollider("rectangle", 0, 0, 160, 160);
box13.scale = 0.3;
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
box14.shapeColor="blue";
box14.setAnimation("r");
box14.debug = false;
box14.setCollider("rectangle", 0, 0, 160, 160);
box14.scale = 0.21;
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box15.shapeColor="blue";
box15.setAnimation("l");
box15.debug = false;
box15.setCollider("rectangle", 0, 0, 160, 160);
box15.scale = 0.3;
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
box16.shapeColor="blue";
box16.setAnimation("r");
box16.debug = false;
box16.setCollider("rectangle", 0, 0, 160, 160);
box16.scale = 0.21;
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
box10.shapeColor="blue";
box1.setAnimation("r");
box1.debug = false;
box1.setCollider("rectangle", 0, 0, 160, 160);
box1.scale = 0.21;
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box2.shapeColor="blue";
box2.setAnimation("l");
box2.debug = false;
box2.setCollider("rectangle", 0, 0, 160, 160);
box2.scale = 0.3;
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box3.shapeColor="blue";
box3.setAnimation("r");
box3.debug = false;
box3.setCollider("rectangle", 0, 0, 160, 160);
box3.scale = 0.21;
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box4.shapeColor="blue";
box4.setAnimation("l");
box4.debug = false;
box4.setCollider("rectangle", 0, 0, 160, 160);
box4.scale = 0.3;
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";box10.shapeColor="blue";
box5.setAnimation("r");
box5.debug = false;
box5.setCollider("rectangle", 0, 0, 160, 160);
box5.scale = 0.21;

var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
box6.shapeColor="blue";
box6.setAnimation("l");
box6.debug = false;
box6.setCollider("rectangle", 0, 0, 160, 160);
box6.scale = 0.3;
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box7.shapeColor="blue";
box7.setAnimation("r");
box7.debug 
box7.setCollider("rectangle", 0, 0, 160, 160);
box7.scale = 0.21;
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
box8.shapeColor="blue";
box8.setAnimation("l");
box8.debug = false;
box8.setCollider("rectangle", 0, 0, 160, 160);
box8.scale = 0.3;




function draw() {

legal.setA
textSize(20);
text("pontos:  "+pontosdoproplayereclaro,370,260);
stroke("blue");
if (bola.isTouching(box1)) {

bola.bounceOff(box1);
 box1.destroy();
  pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (gamestate == "iniciar") {
  bola.velocityX = 0;
  bola.velocityY = 0;
  if(keyDown("space")){
      bola.velocityX = 5;
      bola.velocityY = 8;
      gamestate = "jogar";
    }
}
if (gamestate == "jogar") {
  bola.bounceOff(topEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(raquete);
  raquete.x = World.mouseX;
  if (bola.y > 400 ) {
  bola.x = 200;
  bola.y = 200;
  bola.velocityY = 0;
  bola.velocityX = 0;
 }
}
textSize(20);
text("pontos:"+ pontosdoproplayereclaro, 370, 260);
stroke("blue");
if (bola.isTouching(box2)) {
  
bola.bounceOff(box2); 
box2.destroy();
 pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box3)) {

bola.bounceOff(box3);
 box3.destroy();
  pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box4)) {

bola.bounceOff(box4);
 box4.destroy();
  pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box5)) {
 
bola.bounceOff(box5);
box5.destroy();
pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box6)) {
  
bola.bounceOff(box6);
box6.destroy();
 pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box7)) {
 
bola.bounceOff(box7);
  box7.destroy();
  pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box8)) {

bola.bounceOff(box8);
 box8.destroy();
 pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box9)) {

bola.bounceOff(box9);
  box9.destroy();
  pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box10)) {

bola.bounceOff(box10);
  box10.destroy();
  pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box11)) {
  
bola.bounceOff(box11);
box11.destroy();
pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box12)) {
  
bola.bounceOff(box11);
box12.destroy();
pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box13)) {

bola.bounceOff(box13);
box13.destroy();
pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box14)) {
 
bola.bounceOff(box14);
 box14.destroy();
 pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}
if (bola.isTouching(box15)) {
  
bola.bounceOff(box15);
box15.destroy();
pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}

if (bola.isTouching(box16)) {

bola.bounceOff(box16);
 box16.destroy();
 pontosdoproplayereclaro = pontosdoproplayereclaro + 10;
}


createEdgeSprites();
pontosdoproplayereclaro = 0;
  drawSprites()

}
     
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
