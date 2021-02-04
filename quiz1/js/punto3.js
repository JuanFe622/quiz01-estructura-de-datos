var task = [{
	'name': 'Write for Envato Tust+',
	'duration': 120
},
{
	'name': 'Work out',
	'duration': 60	
},
{
	'name': 'Procastinate on Duolingo',
	'duration': 240	
}
];

/* ---------------------------Punto a----------------------------*/

const tasksNames = task.map((i) => i.name);
console.log(tasksNames);

/* ----------------------------Punto b--------------------------*/
let tasks2Hours = task.filter(
	i => i.duration >= 120
);
console.log(tasks2Hours);


/* ----------------------------Punto c---------------------------*/
const totalDuration = task.map((i) => i.duration);
let totalHours=0;
totalDuration.forEach((j) => {
	totalHours= totalHours + j;
})

console.log("Tiempo total de las tareas: " + totalHours);

/* ----------------------------Punto d---------------------------*/

var numbers = [1,2,3,4,5];
let sumaValores = 0;
numbers.forEach((i) => {
	sumaValores= sumaValores + i; 
})

console.log("la suma total de los elementos es: " + sumaValores);



