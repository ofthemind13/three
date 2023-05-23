import * as THREE from "three"
import "./style.css"
//scene
const scene = new THREE.Scene()

//Create our sphere
const geometry = new THREE.SphereGeometry(5, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(-10, 30, 10)
scene.add(light)

//Camera 
const camera = new THREE.PerspectiveCamera(45, 800 / 600)
camera.position.z = 40
scene.add(camera)

//renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//Resize 
window.addEventListener("resize", () => {
  //Update Sizes
  console.log(window.innerWidth)
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  //Update Camera
  camera.aspect = size.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)

})

//const loop = () => {
  mesh.position.x += 0.1
  renderer.render(scene,camera);
  window.requestAnimationFrame(loop);
//}
//loop()