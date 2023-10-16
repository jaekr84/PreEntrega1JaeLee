function precioVenta(costo, reposicion = 1, iva = 0.21, rentabilidad = 0.3, costosfijos = 0.1){
  let precioVenta = (costo * reposicion) + ((costo * 2) * iva) + (costo * rentabilidad) + (costo * costosfijos);
  alert("La suma de los impuestos es: " + precioVenta);
  return costo + precioVenta;
}

let nuevaConsulta = true;
do {
  let costoProducto = parseFloat(prompt("Ingresa el costo de tu producto:"));

  let precioFinal = precioVenta(costoProducto);
  alert ("El precio final de venta es: " + precioFinal);

  let respuesta = prompt("Quiere calcular un nuevo precio de venta?");

  if(respuesta == "no"){
    nuevaConsulta = false;
  }
} while (nuevaConsulta == true);