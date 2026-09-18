$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500,600,100,180, "purple");
createPlatform(400,650,100,180, "yellow");
createPlatform(300,300,100,180, "purple");
createPlatform(400,400,100,100, "yellow");
createPlatform(600,500,100,180, "yellow");
    createPlatform(900,700,100,100, "yellow");
    createPlatform(1200, 700, 100, 600, "yellow");
     createPlatform(1100, 600, 100, 500,"purple");

    // TODO 3 - Create Collectables
createCollectable("steve",300, 170, 0.5, 0.7);
createCollectable("steve",900, 170, 0.5, 0.7);
createCollectable("steve",1300, 120, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
  createCannon("top", 450, 1700);
 createCannon("bottom", 500, 1700);
 createCannon("bottom", 1000, 1800);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
