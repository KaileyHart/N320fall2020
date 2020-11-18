//Application level stuff

//Create canvas
var canvas = document.getElementById("renderCanvas");
//Create engine
var engine = new BABYLON.Engine(canvas, true);

//Variables
var camera, scene, ball, goal, timeoutId, particleSystem;

//Create Babylon Scene
scene = createScene();
engine.runRenderLoop(function () {
  scene.render();
});

//Check if the ball hit the goal
scene.registerAfterRender(function () {
  if (ball.intersectsMesh(goal, false)) {
    //move goal position
    goal.position.x = Math.random() * 8;

    //Play a particle burst
    particleSystem.manuelEmitCOunt = 21;
    particleSystem.start();

    //Position the particles
    particleSystem.minEmitBox = ball.position;
    particleSystem.maxEmitBox = ball.position;

    //resets ball after hitting the goal
    resetBall();
  }
});

//Create Scene - Setup
function createScene() {
  var scene = new BABYLON.Scene(engine);
  //Create Camera
  camera = new BABYLON.UniversalCamera(
    "UC",
    new BABYLON.Vector3(0, 0, -15),
    scene
  );

  //Create Light
  var light = new BABYLON.DirectionalLight(
    "lighty",
    new BABYLON.Vector3(0, -0.2, 0.2),
    scene
  );

  //Enable Physics
  var gravityVector = BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();
  scene.enablePhysics(gravityVector, physicsPlugin);

  //Create a sphere/ball
  ball = BABYLON.MeshBuilder.CreateSphere("sphero", { diameter: 1 }, scene);

  //Create ball texture
  material = new BABYLON.StandardMaterial("kickball", scene);
  material.diffuseTexture = new BABYLON.Texture("../images/kickball.png");
  ball.material = material;

  //Set up ball physics
  ball.physicsImpostor = new BABYLON.PhysicsImpostor(
    ball,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 0.2 },
    scene
  );

  //force tag something something
  ball.tag = "ball";

  //Set up ground physics
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { height: 20, width: 20, subdivisions: 4 },
    scene
  );
  //finding the ground...
  ground.position.y = -3;
  ground.position.z = 9;
  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.9 },
    scene
  );

  //Makes the environment color blue
  scene.clearColor = BABYLON.Color3.Blue();

  //Create ground texture
  this.material = new BABYLON.StandardMaterial("ground", scene);
  this.material.diffuseTexture = new BABYLON.Texture("../images/grass.jpg");
  ground.material = material;

  //Create a goal
  goal = new BABYLON.MeshBuilder.CreateBox(
    "goal",
    { height: 5, width: 5 },
    scene
  );
  goal.position.z = 7;
  goal.position.x = Math.random() * 8 - 4;

  //Create goal texture
  this.material = new BABYLON.StandardMaterial("net", scene);
  this.material.diffuseTexture = new BABYLON.Texture("../images/net.jpg");
  goal.material = material;

  //Create Particle System
  particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
  particleSystem.emitter = new BABYLON.Vector3(0, 0, 0);
  particleSystem.minEmitPower = 1;
  particleSystem.maxEmitPower = 3;
  particleSystem.addVelocityGradient(0, 2);

  //Load the particle texture
  particleSystem.particleTexture = new BABYLON.Texture("images/particles.jpg");

  return scene;
}

//Puts the ball back in the start position
function resetBall() {
  //reset position
  ball.position = new BABYLON.Vector3();

  //reset velocity
  ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
  ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

  //Get rid of the timeout if it is still on
  clearTimeout(timeoutId);
}

//Event Listener for user clicks
window.addEventListener("click", function () {
  //gets the mesh that was clicked on
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  var selectedObject = pickResult.pickedMesh;

  //Null Check
  if (selectedObject) {
    if (selectedObject.tag == "ball") {
      //Get a direction away from where the user clicked on the ball
      var surfaceNormal = pickResult.getNormal(true);
      var forceDirection = surfaceNormal.scale(-1000);

      //Kicks the ball
      selectedObject.physicsImpostor.applyForce(
        forceDirection,
        selectedObject.getAbsolutePosition()
      );

      //Reset ball after 3 seconds
      timeoutId = setTimeout(resetBall, 3000);
    }
  }
});
