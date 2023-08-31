let mensajeMenu =
  "Bienvenido a nuestra Tienda\nSeleccione una opción para continuar:\n1️⃣ 🏪Ver productos de la tienda\n0️⃣ 🚪Salir";
let mensajeProductos =
  "Selecciona el producto que deseas comprar:\n1️⃣ 🎧Audifonos In Ear - $19.990\n2️⃣ 🖱️HyperX Mouse Gamer - $17.990\n3️⃣ 🖨️Impresora 3D - $184.990\n4️⃣ 🎮Control Xbox Wireless - $63.990\n5️⃣ 💾Kingston Unidad SSD Gen4 - $100.990\n6️⃣ 🛒VER CARRITO\n7️⃣ 🧾PAGAR\n0️⃣ ↩️Volver";

let total = 0;

mostrarMenuPrincipal();

function mostrarMenuPrincipal() {
  let menuOpcion;
  do {
    menuOpcion = Number(prompt(mensajeMenu));
    switch (menuOpcion) {
      case 1:
        tienda();
        break;
      case 0:
        alert("Gracias! Vuelva pronto 👋🏼");
        break;
      default:
        alert("⚠️Ingrese una opción correcta");
        break;
    }
  } while (menuOpcion != 0);
  return;
}

function tienda() {
  let opcion;
  do {
    opcion = Number(prompt(mensajeProductos));
    switch (opcion) {
      case 1:
        alert("✅Se agregaron Audifonos In Ear al carrito");
        total += 19990;
        break;

      case 2:
        alert("✅Se agrego HyperX Mouse Gamer al carrito");
        total += 17990;
        break;

      case 3:
        alert("✅Se agrego Impresora 3D al carrito");
        total += 184990;
        break;

      case 4:
        alert("✅Se agrego Control Xbox Wireless al carrito");
        total += 63990;
        break;

      case 5:
        alert("✅Se agrego Kingston Unidad SSD Gen4 al carrito");
        total += 100990;
        break;
      case 6:
        carritoCompra();
        break;
      case 7:
        medioDePago();
        break;
      default:
        // alert("⚠️Ingrese una opción correcta");
        break;
    }
  } while (opcion != 0);
  return;
}

function carritoCompra() {
  valorCarrito = total;
  let verCarrito;

  do {
    verCarrito = Number(
      prompt(`Total Carrito ${valorCarrito}\nContinuar a pagar:\n1- SI\n2- N0`)
    );
    if (isNaN(verCarrito) || verCarrito === "") {
      alert("⚠️Ingresar la opción correcta:");
    }
  } while (isNaN(verCarrito) || verCarrito == "");

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
  let formaDePago;
  do {
    formaDePago = Number(
      prompt(
        `Total a pagar: $${totalPagar}\nIndique medio de pago:\n1️⃣ 💳Debito\n2️⃣ 💳Crédito\n3️⃣ 🪙Transferencia`
      )
    );
    if (isNaN(formaDePago) || formaDePago == "") {
      alert("⚠️Ingresar la opción correcta:");
      carritoCompra();
    }
  } while (isNaN(formaDePago) || formaDePago == "");

  if (totalPagar == 0) {
    alert(
      "Tu carrito esta vacio \nSerás redirigido a la Tienda para que puedas seguir comprando"
    );
    tienda();
  } else if (formaDePago === 1) {
    datosDespacho();
  } else if (formaDePago === 2) {
    pagoCredito();
  } else if (formaDePago === 3) {
    datosDespacho();
    alert("✅Transferencia conformada!\nSerás dirigido al sitio principal");
    mostrarMenuPrincipal();
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
    "👍🏼Hemos gestionado tu compra\nRecibiras tu pedido al día siguiente de la compra"
  );
  total = 0;
  return;
}

function pagoCredito() {
  let cantidadCuotas;
  let confirmarCompra;
  do {
    cantidadCuotas = Number(
      prompt(
        "Indique la cantidad de cuotas: (Ingrese solo el número)\n1 Sin cuotas\n3 cuotas\n6 cuotas\n12 cuotas\n24 cuotas\n36 cuotas"
      )
    );
    if (cantidadCuotas == 1) {
      let pagoCuotas = (totalPagar / cantidadCuotas).toFixed(2);
      confirmarCompra = Number(
        prompt(`Valor cuota: ${pagoCuotas}\nConfirmar compra:\n1 - SI\n2 - NO`)
      );
      console.log(confirmarCompra);
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
