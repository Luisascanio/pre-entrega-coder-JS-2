
alert("Bienvenido a tienda gamer selecciona algun producto.")

// prompt("productos disponibles:\n1.Lavadora gamer\n2. tarjeta graficca radeon 200\n3.Tarjeta grafica rtx 4000\n4.Cama gamer")

class Producto  {
    constructor(id,nombre,precio,categoria,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
}

let tienda = [];

let producto1 = new Producto( 1,"lavadora gamer",5000,"electrodomesticos",1 )
let producto2 = new Producto( 2,"tarjeta grafica radeon 200",2000,"gaming",1 )
let producto3 = new Producto( 3,"tarjeta grafica rtx 4000",6000,"gaming",1 )
let producto4 = new Producto( 4,"cama gamer",8000,"muebles",1 )

tienda.push(producto1)
tienda.push(producto2)
tienda.push(producto3)
tienda.push(producto4)

let ContinuarCompra = true;
let TotalCompra = 0;
let carrito = []

while(ContinuarCompra){


let mensaje = "lista de productos:\n"
tienda.forEach(function(producto){
    mensaje +=`Producto: ${producto.id}, ${producto.nombre}, Precio: $${producto.precio}\n` ;


});

let compra = parseInt(prompt(mensaje));
let selecionarProductos = tienda.find(productox => productox.id === compra)
alert(`Compraste: ${selecionarProductos.nombre}, Precio: $${selecionarProductos.precio}\n`)

carrito.push(selecionarProductos)
TotalCompra += selecionarProductos.precio

ContinuarCompra =confirm("¿quieres seguir comprando?");

 }       // aqui termina el ciclo

 alert(`En el carrito hay:\n${carrito.map(p => `${p.nombre}, Precio: $${p.precio}`).join('\n')}\nTotal a pagar: $${TotalCompra}`);




