function resize() {
  document.getElementById('cover-photo').style.height = `${
    window.innerHeight
  }px`;
}

resize();
window.onresize = () => {
  resize();
};
