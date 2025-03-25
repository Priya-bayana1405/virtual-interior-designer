# Virtual Interior Design Planner

## Overview
The **Virtual Interior Design Planner** is a web-based 3D tool designed to enable users to create and visualize room layouts in a virtual environment. The tool allows users to interact with various furniture items such as chairs, tables, sofas, beds, wardrobes, and lamps, giving them the ability to arrange these items in a 3D space.


## Features

- **Add Furniture**: Users can select from a variety of furniture types (Chair, Table, Sofa, Bed, Wardrobe, Lamp) and add them to the room.
  
- **Drag and Reposition Furniture**: The furniture can be dragged and repositioned within the scene for better layout management.
  
- **Realistic Lighting & Shadows**: The 3D environment uses **Three.js** to simulate realistic lighting and shadows, enhancing the room’s appearance and providing an immersive design experience.
  
- **Interactive UI**: Buttons and other UI elements are provided to add, remove, or rearrange furniture items within the 3D scene.

---

## Technologies Used

- **HTML**: Provides the structure of the webpage and layout of UI elements.
  
- **CSS**: Used for styling buttons, menus, and overall layout to ensure a clean and user-friendly design.

- **JavaScript**: Implements the logic behind the 3D scene, interactions like drag-and-drop, and the overall behavior of furniture placement.

- **Three.js**: A powerful 3D rendering engine used to create and display 3D models, ensuring smooth rendering of the room and furniture.

- **Raycasting**: This technique is utilized for object selection, allowing users to click and drag furniture within the scene.

---

## Installation & Usage

### 1. Clone or Download the Repository
To get started with the Virtual Interior Design Planner, follow these steps:

```sh
git clone https://github.com/Priya-bayana1405/virtual-interior-design.git
cd virtual-interior-design
```

### 2. Open the Project in Your Browser
Once you have the repository downloaded, open the `index.html` file in your browser. The 3D room planner will be ready for use!

---

## Future Improvements

1. **Furniture Rotation**: Enable users to rotate furniture pieces with keyboard keys or on-screen buttons for better customization.

2. **Save/Load Feature**: Allow users to save their room layouts in the browser or a database, enabling them to load their designs later.

3. **More Realistic Models**: Support importing more complex and realistic 3D furniture models (GLTF/OBJ format), instead of just basic geometric shapes.

4. **Wall & Room Customization**: Add the ability for users to define room dimensions, including walls, windows, and doors, to better fit their actual space.

5. **Texture and Material Options**: Allow users to change the color, texture, and materials of the furniture and walls to create more personalized designs.

