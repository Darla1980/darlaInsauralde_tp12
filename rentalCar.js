function rentalCar(tipoVehiculo, diasAlquiler, sillaBebe){
    let compacto = 14000;
    let mediano = 17000;
    let camioneta = 28000;
    let precioSillaBebe = 1200;
    let totalPago = 0

    switch (tipoVehiculo) {
        case "compacto":
            totalPago = compacto * diasAlquiler
            break;
        case "mediano":
            totalPago = mediano * diasAlquiler
            break;
        case "camioneta":
            totalPago = camioneta * diasAlquiler
            break;
        default:
            return "Tipo de vehículo no válido. Por favor seleccione entre compacto, mediano o camioneta."
    }
    if (sillaBebe) {
        totalPago += precioSillaBebe * diasAlquiler
    }
    return totalPago;
}

let total1 = rentalCar("compacto", 3, true);
let total2 = rentalCar("mediano", 3, true);
let total3 = rentalCar("camioneta", 3, false);
let total4 = rentalCar("auto", 0);

console.log(`Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días utilizados, el monto total a pagar es de: $${total1}`);
console.log(`Estimado cliente: en base al tipo de vehículo mediano alquilado, considerando los 3 días utilizados, el monto total a pagar es de: $${total2}`);
console.log(`Estimado cliente: en base al tipo de vehículo camioneta alquilado, considerando los 3 días utilizados, el monto total a pagar es de: $${total3}`);
console.log(total4);

