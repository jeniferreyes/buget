const preguntarPresupuesto = prompt('Ingresa tu presupuesto');
class Presupuesto {
	constructor(presupuesto) {
		this.pres = parseInt(presupuesto);
	}
}
class UI {
	imprimirPresupuesto(cant) {
		const presupuest = document.querySelector('#total');
		presupuest.innerHTML = `${cant}`;
	}
    // imprimirGasto(gasto){
    //     const gasto = document.querySelector('#gasto');
    //     gasto.innerHTML = `${gasto}`
    // }
}
// gasto = new Presupuesto(gasto)
if (preguntarPresupuesto === null || preguntarPresupuesto.length==0) {
    alert('Error, ingrese un dato válido')
	window.location.reload();
} else {
	cantidadPresupuesto = new Presupuesto(preguntarPresupuesto);
	const ui = new UI();
	ui.imprimirPresupuesto(cantidadPresupuesto.pres);

}