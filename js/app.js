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
	imprimirGastos(gasto, total){
		const gastos = document.querySelector('#gastos ul')
		
		const liGasto = document.createElement('li');
		liGasto.innerHTML = `${gasto}<br>
		${total}`;
		
		gastos.appendChild(liGasto);
	}
}


function imprimir_presupuesto(){
	if (preguntarPresupuesto === null || preguntarPresupuesto.length==0) {
    alert('Error, ingrese un dato válido')
	window.location.reload();
} else {
	cantidadPresupuesto = new Presupuesto(preguntarPresupuesto);
	const ui = new UI();
	ui.imprimirPresupuesto(cantidadPresupuesto.pres);

}
}
imprimir_presupuesto()

const agregar = document.querySelector('#boton');

agregar.addEventListener('click', function(evento){
	
	evento.preventDefault();
	const gastoN = document.querySelector('#gasto').value;
	const gastoTotal = document.querySelector('#cantidad').value;
	const ui = new UI();
	if(gastoN==''|| gastoTotal==''){
		alert('error ingrese un dato valido')
	}else{

		ui.imprimirGastos(gastoN, gastoTotal);

	}
	

});