function myFunction(sw)
{
  var contenido;

  if(sw == 0)
  {
    contenido = "img/pic_bulbon.gif"
  }
  else
  {
    contenido = "img/pic_bulboff.gif"
  }

  document.getElementById("myImage").src = contenido;
}