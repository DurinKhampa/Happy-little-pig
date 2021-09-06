var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var xCerdo = 150;
var yCerdo = 150;

var xVaca = new Array();
var yVaca = new Array();

var xPollo = new Array();
var yPollo = new Array();


var fondo = {
  url: "tile.png",
  cargaOK: false
}

var vaca = {
  url: "vaca.png",
  cargaOK: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

var pollo = {
  url: "pollo.png",
  cargaOK: false
}

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);




function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  mantenerPosicion();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  mantenerPosicion();
}



function moverCerdo(evento)
{
	var movimiento = 10;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(evento.keyCode)
	{
		case teclas.LEFT:
			xCerdo = xCerdo - movimiento;
			dibujar(xCerdo, yCerdo);
      if (xCerdo < 0) xCerdo = 0;
		break;
		case teclas.UP:
			yCerdo = yCerdo - movimiento;
			dibujar(xCerdo, yCerdo);
      if (yCerdo < 0) yCerdo = 0;
		break;
		case teclas.RIGHT:
			xCerdo = xCerdo + movimiento;
			dibujar(xCerdo, yCerdo);
      if (xCerdo > 420) xCerdo = 420;
		break;
		case teclas.DOWN:
			yCerdo = yCerdo + movimiento;
			dibujar(xCerdo, yCerdo);
      if (yCerdo > 420) yCerdo = 420;
		break;
	}
}

function dibujar()
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOK)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
		}
	}
	if(pollo.cargaOK)
	{
		for(var i=0; i<10; i++){
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
		}
	}
	if(cerdo.cargaOK)
	{
		papel.drawImage(cerdo.imagen, xCerdo, yCerdo)
	}
}


function mantenerPosicion()
{
	if(vaca.cargaOK)
	{
		var cantidad = aleatorio(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xVaca[i] = x;
			yVaca[i] = y;
		}
	}
	if(pollo.cargaOK)
	{
		var cantidad = aleatorio(1, 10);
		for(var i=0; i<cantidad; i++)
		{
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y;
		}
	}
	dibujar();
}



function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
