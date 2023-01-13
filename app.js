function moverBotonAleatorio(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let modoSexo = document.getElementById('modo_sexo');
let preguntar = document.getElementById('preguntarte');
let serenata = document.getElementById('video');
let suplica = document.getElementById('please');

btnNo.addEventListener('mouseenter', function(e) {moverBotonAleatorio(e.target)});

btnSi.addEventListener('click', function(e) {
  alert('¡TE AMO!');
  modoSexo.style.display = 'block';
  preguntar.style.display = 'none';
  serenata.style.display = 'none';
  suplica.style.display = 'none';
  btnSi.style.display = 'none';
  btnNo.style.display = 'none';
  const cancion = new Audio('./recursos/musica.mp3');
  cancion.play();
})