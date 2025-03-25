// Create Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Create Floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Set Camera Position
camera.position.set(0, 10, 15);
camera.lookAt(0, 0, 0);

// Furniture Array
let furniture = [];

// Function to Add Furniture
function addFurniture(type) {
    let geometry, material, height = 1;
    
    switch (type) {
        case "chair":
            geometry = new THREE.BoxGeometry(1, 2, 1);
            material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
            height = 1;
            break;
        case "table":
            geometry = new THREE.BoxGeometry(3, 1, 3);
            material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
            height = 0.5;
            break;
        case "sofa":
            geometry = new THREE.BoxGeometry(4, 2, 2);
            material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
            height = 1;
            break;
        case "bed":
            geometry = new THREE.BoxGeometry(5, 1.5, 3);
            material = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
            height = 0.75;
            break;
        case "wardrobe":
            geometry = new THREE.BoxGeometry(3, 6, 2);
            material = new THREE.MeshStandardMaterial({ color: 0x663399 });
            height = 3;
            break;
        case "lamp":
            geometry = new THREE.CylinderGeometry(0.3, 0.3, 3, 32);
            material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
            height = 1.5;
            break;
    }

    const object = new THREE.Mesh(geometry, material);
    object.position.set(0, height / 2, 0);
    scene.add(object);
    furniture.push(object);
}

// Dragging Feature
let selectedObject = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

window.addEventListener("mousedown", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(furniture);
    
    if (intersects.length > 0) {
        selectedObject = intersects[0].object;
    }
});

window.addEventListener("mousemove", (event) => {
    if (!selectedObject) return;
    
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const groundIntersect = raycaster.intersectObject(floor);
    
    if (groundIntersect.length > 0) {
        selectedObject.position.x = groundIntersect[0].point.x;
        selectedObject.position.z = groundIntersect[0].point.z;
    }
});

window.addEventListener("mouseup", () => {
    selectedObject = null;
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();