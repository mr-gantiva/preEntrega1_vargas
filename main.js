let mensaje =
  "1 - Manzanas kg $500\n2 - Naranjas kg $600\n3 - Ver carrito\n4- Ir a pagar\n0 - Salir";

let opcion;
let total = 0;

function tienda() {
  do {
    opcion = Number(prompt(mensaje));
    switch (opcion) {
      case 1:
        alert("Se agrego un kilo de manzanas al carrito");
        total += 500;
        break;

      case 2:
        alert("Se agrego un kilo de naranjas al carrito");
        total += 600;
        break;

      case 3:
        carritoCompra();
        break;

      case 4:
        medioDePago();
        break;
      default:
        alert("Gracias! Vuelva pronto");
        break;
    }
  } while (opcion != 0);
  return;
}

tienda();

function carritoCompra() {
  valorCarrito = total;
  verCarrito = Number(
    prompt(`Total Carrito ${valorCarrito}\nContinuar a pagar:\n1- SI\n2- N0`)
  );

  while (isNaN(verCarrito) || verCarrito == "") {
    alert("Ingresar la opción correcta:");
    carritoCompra();
  }

  if (verCarrito == 1 && valorCarrito == 0) {
    alert(
      "Tu carrito esta vacio \nSerás redirigido a la Tienda para que puedas seguir comprando"
    );
    tienda();
  } else if (verCarrito == 1) {
    medioDePago();
  } else {
    tienda();
  }
  return;
}

function medioDePago() {
  totalPagar = total;
  formaDePago = Number(
    prompt(
      `Total a pagar: ${totalPagar}\nIndique medio de pago:\n1 - Debito\n2 - Crédito\n3 - Transferencia`
    )
  );
  if (formaDePago === 1) {
    datosDespacho();
  }
  if (formaDePago === 2) {
    pagoCredito();
  }
  if (formaDePago === 3) {
    datosDespacho();
    alert("Transferencia conformada!\nSerás dirigido al sitio principal");
    tienda();
  }
  return;
}

function datosDespacho() {
  do {
    direccion = prompt(
      "Ingresa correctamente los datos de envio de tus productos\nDirección de despacho:"
    );
    ciudad = prompt("Ingresa la ciudad:");
  } while (direccion == "" && ciudad == "");
  alert(
    "Hemos gestionado tu compra\nRecibiras tu pedido al día siguiente de la compra"
  );
  total = 0;
  return;
}

function pagoCredito() {
  do {
    cantidadCuotas = Number(
      prompt(
        "Indique la cantidad de cuotas:\n1 Sin cuotas\n3 cuotas\n6 cuotas\n12 cuotas\n24 cuotas\n36 cuotas\nIngrese solo el número"
      )
    );
    if (cantidadCuotas == 1) {
      pagoCuotas = (totalPagar / cantidadCuotas).toFixed(2);
      alert(`Valor cuota: ${pagoCuotas}`);
      datosDespacho();
      break;
    } else if (cantidadCuotas == 3) {
      pagoCuotas = (totalPagar / cantidadCuotas).toFixed(2);
      alert(`Valor cuota: ${pagoCuotas}`);
      datosDespacho();
      break;
    } else if (cantidadCuotas == 6) {
      pagoCuotas = (totalPagar / cantidadCuotas).toFixed(2);
      alert(`Valor cuota: ${pagoCuotas}`);
      datosDespacho();
      break;
    } else if (cantidadCuotas == 12) {
      pagoCuotas = (totalPagar / cantidadCuotas).toFixed(2);
      alert(`Valor cuota: ${pagoCuotas}`);
      datosDespacho();
      break;
    } else if (cantidadCuotas == 24) {
      pagoCuotas = (totalPagar / cantidadCuotas).toFixed(2);
      alert(`Valor cuota: ${pagoCuotas}`);
      datosDespacho();
      break;
    } else if (cantidadCuotas == 36) {
      pagoCuotas = (totalPagar / cantidadCuotas).toFixed(2);
      alert(`Valor cuota: ${pagoCuotas}`);
      datosDespacho();
      break;
    }
  } while ((cantidadCuotas = 0 || !isNaN(cantidadCuotas)));
  return;
}
