import React from 'react';
import * as THREE from 'three';

export default class App extends React.Component {

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    // ADD SCENE
    this.scene = new THREE.Scene();
    // ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    this.camera.position.z = 4;
    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    // ADD CUBE
    const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    const loader = new THREE.ImageBitmapLoader();
    loader.load('./yeezy.png', imageBitmap => {
      const texture = new THREE.CanvasTexture(imageBitmap);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      this.cube.material = material;
    });

    this.animate = () => {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderScene();
      this.frameId = window.requestAnimationFrame(this.animate);
    };

    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {

    return (
      <>
        <div style={{ width: '400px', height: '400px' }} ref={mount => { this.mount = mount; }}>
        </div>
      </>
    );
  }

}
