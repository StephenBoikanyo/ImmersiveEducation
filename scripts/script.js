const Scene = require('Scene');

export const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]

 // To access scene objects
  const [directionalLight] = await Promise.all([
    Scene.root.findFirst('directionalLight0')
  ]);

  // Find any or all trackers 
  const [Camera] = await Promise.all([
      Scene.root.findAll('historyTracker','biologyTracker','physicsTracker',)
  ]
  );

  // Rotation function for all objects in Scene


})(); // Enables async/await in JS [part 2]
