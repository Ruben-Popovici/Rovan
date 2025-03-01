const panoramaImage = new PANOLENS.ImagePanorama("./my.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

viewer.add(panoramaImage);