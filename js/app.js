const preguntarPresupuesto = prompt('Ingresa tu presupuesto');
class Presupuesto {
	constructor(presupuesto) {
		this.pres = parseInt(presupuesto);
		this.restante = Number(presupuesto);
		this.gastos = [];
	}

	agregarGasto(gasto){
		this.gastos = [...this.gastos, gasto];

	}
	eliminarGasto(){

	}
	calcularDif(){
		const gastado = this.gastos.reduce((total, gasto)=> total+gasto.gastoTotal)
		this.restante = this.pres - gastado;
	}
}
class UI {
	imprimirPresupuesto(cant) {
		const presupuest = document.querySelector('#total');
		presupuest.innerHTML = `${cant}`;
	}
	imprimirGastos(gasto, total){
		const gastos = document.querySelector('#gastos ul')
		
		const liGasto = document.createElement('li');
		liGasto.innerHTML = `<span class='gasto'>Gasto:${gasto}	Total:${total}</span> `;
		
		gastos.appendChild(liGasto);
	}
	
}

const ui = new UI();
function imprimir_presupuesto(){
	if (preguntarPresupuesto === null || preguntarPresupuesto.length==0) {
		
		window.location.reload();
} else {
	cantidadPresupuesto = new Presupuesto(preguntarPresupuesto);
	ui.imprimirPresupuesto(cantidadPresupuesto.pres);

}
}
imprimir_presupuesto()
const agregar = document.querySelector('#boton');

agregar.addEventListener('click', function(evento){
	
	evento.preventDefault();
	const gastoN = document.querySelector('#gasto').value;
	const gastoTotal = document.querySelector('#cantidad').value;
	
	if(gastoN==''|| gastoTotal==''){
		// const mensaje1 = "error, rellene los campos";
		ui.imprimirAlerta1(mensaje1);
	}else{

		ui.imprimirGastos(gastoN, gastoTotal);

	}
	
});