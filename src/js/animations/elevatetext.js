
function elevatetext() {
  // Variables
  const container = document.querySelector('.elevate-span');
  const hoverDiv = document.querySelector('#elevate-2023');
  const text3D = document.querySelector('.text3D');

  let scene, camera, renderer;
  let textMesh;
  let isAnimating = false;

  // Variables to store individual letter meshes
  const letterMeshes = [];

  let gradientMaterial; // Define gradientMaterial at a higher scope


  // Initialize Three.js
  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 20;

    renderer = new THREE.WebGLRenderer({ canvas: text3D });
    renderer.setSize(container.clientWidth, container.clientHeight);

    const fontLoader = new THREE.FontLoader();
    const cubeTextureLoader = new THREE.CubeTextureLoader();

    // Load the HDRI environment map from a different source
    const hdriMapUrls = [
      'https://threejs.org/examples/textures/cube/Park2/negx.jpg',
      'https://threejs.org/examples/textures/cube/Park2/posx.jpg',
      'https://threejs.org/examples/textures/cube/Park2/negy.jpg',
      'https://threejs.org/examples/textures/cube/Park2/posy.jpg',
      'https://threejs.org/examples/textures/cube/Park2/negz.jpg',
      'https://threejs.org/examples/textures/cube/Park2/posz.jpg',
    ];
    const hdriMap = cubeTextureLoader.load(hdriMapUrls);

    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
      const word = 'Elevate 2023';
      const letterSize = 2; // Double the font size
      const letterHeight = 0.2; // Increase the resolution (extrusion depth) accordingly
      const letterMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0, envMap: hdriMap });

      // Create a gradient shader for the background
      const vertexShader = `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

      const fragmentShader = `
  varying vec2 vUv;

  void main() {
    // Use normalized RGB color values for colors
    vec3 colorTopLeft = vec3(0.898, 0.643, 0.314);  // #E5A450
    vec3 colorTopRight = vec3(0.996, 0.772, 0.369); // #FEC55E
    vec3 colorBottomLeft = vec3(0.494, 0.294, 0.576); // #7E4B93
    vec3 colorBottomRight = vec3(0.553, 0.333, 0.792); // #8D55CA

    vec3 finalColor = mix(mix(colorBottomLeft, colorBottomRight, vUv.x), mix(colorTopLeft, colorTopRight, vUv.x), vUv.y);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

      const gradientMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
      });

      // Calculate the aspect ratio of the container
      const aspectRatio = container.clientWidth / container.clientHeight;
      const gradientGeometry = new THREE.PlaneGeometry(40 * aspectRatio, 40);
      const gradientMesh = new THREE.Mesh(gradientGeometry, gradientMaterial);
      gradientMesh.position.z = -10;
      scene.add(gradientMesh);



      let totalWidth = 0;
      const spacing = 0.5; // Adjust the spacing between letters

      for (let i = 0; i < word.length; i++) {
        const letterGeometry = new THREE.TextGeometry(word[i], {
          font: font,
          size: letterSize,
          height: letterHeight,
          curveSegments: 48,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        const letterMesh = new THREE.Mesh(letterGeometry, letterMaterial);
        scene.add(letterMesh);

        letterGeometry.computeBoundingBox();
        const letterWidth = letterGeometry.boundingBox.max.x - letterGeometry.boundingBox.min.x;
        totalWidth += letterWidth + spacing;

        letterMesh.position.set(
          (i - (word.length - 1) / 2) * (letterSize + spacing), // Adjust the x position
          0, // Position on the y-axis
          0  // Position on the z-axis
        );

        letterMeshes.push(letterMesh);
      }

      // Attach the mousemove event listener to the container
      container.addEventListener('mousemove', function (event) {
        animate(event, letterMeshes); // Pass the letterMeshes array to the animate function
      });

      // Set the background color to black
      renderer.setClearColor(0x000000);
    });
  }

  // Animation loop
  function animate(event, letterMeshes) {
    if (!isAnimating) return;

    // Check if the event object exists before accessing its properties
    if (!event) return;

    // Calculate the mouse position on the 3D plane
    const mouse3D = new THREE.Vector3(
      (event.clientX / container.clientWidth) * 2 - 1,
      -(event.clientY / container.clientHeight) * 2 + 1,
      0.5
    );
    mouse3D.unproject(camera);

    // Loop through each letter mesh and calculate its rotation angles to point towards the mouse position
    letterMeshes.forEach((letterMesh, index) => {
      const targetDir = mouse3D.clone().sub(letterMesh.position).normalize();

      // Calculate rotation angles based on the difference in positions
      const angleX = Math.atan2(targetDir.y, targetDir.z) * 20; // Adjust the rotation factor
      const angleY = Math.atan2(targetDir.x, targetDir.z) * 20; // Adjust the rotation factor

      // Apply rotation angles to the letter mesh
      letterMesh.rotation.set(-angleX, angleY, 0);
    });



    renderer.render(scene, camera);
  }


  // Handle hover effect
  container.addEventListener('mouseenter', function () {
    text3D.style.display = 'block';
    isAnimating = true;
    animate(); // Call animate immediately to update the rotation
  });

  container.addEventListener('mouseleave', function () {
    text3D.style.display = 'none';
    isAnimating = false;
    container.removeEventListener('mousemove', animate);
    if (scene && textMesh) {
      scene.remove(textMesh);
      textMesh.geometry.dispose();
      textMesh.material.dispose();
    }
  });

  // Initialize the animation when the page loads
  init();

}

export default elevatetext;