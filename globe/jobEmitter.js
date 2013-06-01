var DAT = DAT || {};

DAT.JobEmitter = function(globe, position, relationship) {

  function init() {
    if (relationship !== "me") return
    threexSparks = new THREEx.Sparks({
      maxParticles: 400,
      counter: new SPARKS.SteadyCounter(300)
    });

    // setup the emitter
    var emitter = threexSparks.emitter();

    var initColorSize = function() {
      this.initialize = function(emitter, particle) {
        debugger;
        particle.target.color().setHSV(0.3, 0.9, 0.4);
        particle.target.size(150);
      };
    };


    emitter.addInitializer(new initColorSize());
    emitter.addInitializer(new SPARKS.Position(new SPARKS.PointZone(new THREE.Vector3(0, 0, 0))));
    emitter.addInitializer(new SPARKS.Lifetime(0, 5.8));
    emitter.addInitializer(new SPARKS.Velocity(new SPARKS.PointZone(new THREE.Vector3(0, 250, 00))));

    emitter.addAction(new SPARKS.Age());
    emitter.addAction(new SPARKS.Move());
    emitter.addAction(new SPARKS.RandomDrift(1000, 0, 1000));
    emitter.addAction(new SPARKS.Accelerate(0, -200, 0));

    threexSparks.emitter().start(); 
    globe.scene.addObject(threexSparks.container());
  }

  var update = function(){

    threexSparks  && threexSparks.update();

  }

  init();


  //*****PUBLIC METHODS*********
  this.update = update;

  return this;
}