var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var eyeheight = 197;
var eyewidth = 50;
var eyelenght = 10;

stroke("black");strokeWeight(2.5);noFill();
ellipse(200, 271, 195, 125);

fill(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
regularPolygon(200, 190, 9, 125);regularPolygon(145, 218, 5, 75);regularPolygon(255, 218, 5, 75);

fill("gold");
regularPolygon(200, 150, 5, 90);regularPolygon(200, randomNumber(235, 245), 8, 105);


fill("red");
rect(125, 190, 50, randomNumber(1, 30));rect(225, 190, 50, randomNumber(1, 40));rect(125, 240, 150, randomNumber(20, 50));

fill("crimson");
rect(125, eyeheight, eyewidth, eyelenght);rect(225, eyeheight, eyewidth, eyelenght);rect(125, 246, 150, 8);



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
