/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

function miFuncion(a){ 
	
 console.log(a.length);
	
}
// miFuncion("Hola mundo");
 
/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

function cadenaSlice(a, n){
	console.log(a.substr(0, n));
}
// cadenaSlice("Hola Mundo", 4 );
/*
 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', '') devolverá ['hola', 'que', 'tal']. 
 */
function cadenaArray(a, c){
	console.log(a.split(c));
}
// cadenaArray('Hola que tal', ' ');
/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/

function cadenaRepite(a, n){
	console.log(a.repeat(n));
}
// cadenaRepite('Hola Mundo\t', 3);
/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
function cadenaInvertida(a){
	a=a.split('').reverse().join('');
	console.log(a);
}
// cadenaInvertida("Hola Mundo");
/*

6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion	("hola mundo adios mundo", "mundo") devolverá 2.*/

 /* * Mi solucion
function cadenaValorBusqueda(a, c){ 
	for(let i=0; i<=a.split().length; i++){
		let  b=0;
		if(a.includes(c))
			b++
			console.log(b);
		}
	} 
	cadenaValorBusqueda("hola mundo adios mundo", "mundo"); */
//  * soluccion de @JhonMircha

const textoEnCadena=(cadena = "", texto = "")=>{
	if (!cadena) return console.warn("No ingresaste texto largo");

	if (!texto) return console.warn("No ingresaste la palabra a evaluar");

	let i = 0,
			contador = 0; 
	
	while (i !== -1) {
		i = cadena.indexOf(texto, i);
		if(i !== -1){
			i++;
			contador++;
		}
	}
	return console.info(`la palabra "${texto}" se repite ${contador} veces`)
}

// textoEnCadena("hola mundo adios mundo");
// textoEnCadena("hola mundo adios mundo", "mundo");

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */
function cadenaPalindromo(a){
	a= a.toLowerCase();
	if(a.split('').reverse().join('') == a ){
			return console.log(true)
		}
		console.log(false, a.split('').reverse().join(''));
	}
	// cadenaPalindromo('Salas');

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.*/

function cadenaEliminado(a, c){
	console.log(a.split(c).join(''));
	}
	
// cadenaEliminado("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
/*
9)Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const numeroAleatorio = ()=> 
	console.info(Math.round((Math.random() * 100) +500));
// numeroAleatorio();
 /*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion (2002) devolverá true.*/

const numeroEvaluar = (numero = undefined) => { 
	if (!numero) return console.warn('No ingresaste un numero para evaluar')
	let invertido =numero.toString().split('').reverse().join(''),
		numeroInvertido = parseInt(invertido);
	
	if(numeroInvertido != numero)
		return console.info(`El numero ${numero} no es capicúa, es diferenta al numero ${numeroInvertido}`) 
		
	return console.info(`El numero ${numero} si es capicúa, es igual al numero ${numeroInvertido}`) 
}
//  
	// numeroEvaluar();
	// numeroEvaluar(2004);
	// numeroEvaluar(2002);
/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const numeroFactorial = (numero = undefined) => {
	if ( numero === undefined ) return console.warn('No ingresaste un número');
	 if ( typeof numero !== "number" ) return console.error(` Este valor "${numero}", no  es un numero`);
	if ( numero ===0 ) return console.error("El numero no puede ser 0");
	if( Math.sign(numero) ===-1) return console.error( "El numero no puede ser negativo");
	
	let factorial=1;
	
	for(let i=numero; i > 1; i--){
		factorial*=i;
	}
	
	return console.info(`El factorial de ${numero} es ${factorial} `);
}

// numeroFactorial();
// numeroFactorial("g");
// numeroFactorial(0);
// numeroFactorial(-1);
//  numeroFactorial(5);

/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const numeroPrimo = ( numero = undefined)=>  {
	if(numero === undefined) return console.warn('No ingresaste un numero');
	if(typeof numero !== "number") return console.error(`Este valor "${numero}" no es un numero`);
	if( numero === 0) return console.error('El núnmero no puede ser "0"');
	if( numero === 1) return console.error('El núnmero no puede ser "1"');
	let divisible= false;
	for(let i =2;i<numero; i++ ){
		if ((numero % i)===0) {
			divisible=true;
			break
		}
	}

	return (divisible)
	? console.log(`El numero ${numero} no es un numero primo`)
	: console.log(`El numero ${numero} si es un numero primeo`);
}
// numeroPrimo();
// numeroPrimo(",");
// numeroPrimo(false);
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(29);
// numeroPrimo(22);
/*'
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
const numeroParImpar = (numero = undefined) =>{
	if(numero ===undefined) return console.warn( "No ingresaste un numero" );
	
	if( typeof numero !== "number" ) return console.error(`Este valor ${numero} no es un número`);
	
	let residuo = numero % 2;
	if( residuo !== 0 ) return console.info( 'Es un nùmero impar');
	return console.info('Es un nùmero par')
}
  
  // numeroParImpar();
  // numeroParImpar("h");
  // numeroParImpar(4);
  // numeroParImpar(29);
/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 */
 
 const fahrenheit = (numero = undefined, temperatura ="") => {
 	if( numero === undefined) return console.warn("No ingresaste un nùmero" );
 	if (temperatura==="") return console.warn("No ingresaste el tipo de temperatura"); 
 	if(temperatura === "F" || temperatura === "f") {
 		let f = (numero*9/5)+32;
 		return console.info(`La temperatura de "${numero}° C"  equivale a "${f}° F" `);
	}
	
		if(temperatura === "C" || temperatura === "c") {
			let c = (numero-32)*5/9
			return console.info(`La temperatura de "${numero}° F" equivale a "${c}° C"`);
	 }

	if(!(temperatura !== "F" || temperatura!== "f") || (temperatura !== "C" || temperatura !== "c")) return console.error(`El tipo temperatura  "${temperatura}" no corresponde por favor verifique, solo puedes ingresar Fahrenheit o Celsius`); 
};
// fahrenheit();
// fahrenheit(0);
// fahrenheit(0,"a");
// fahrenheit(0,"hola");
// fahrenheit(0, true);
// fahrenheit(0, 0	);
// fahrenheit(100,"f"); 
// fahrenheit(212,"c"); 

/* 
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 */

const convertirBinarioDecimal = (numero= undefined, base = undefined)=>{
	if ( numero === undefined ) return console.warn(`No ingresaste un numero a convertir`);

	if (typeof numero !== "number") return console.error(`Este valor ${numero} ingresado, no es número`);
	
	if ( base === undefined ) return console.warn(`No ingresaste un base a convertir`);
	
	if (typeof base !== "number") return console.error(`Este valor ${base} ingresado, no es número`);

	if( base === 2){
		
		return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)

	}else if ( base === 10) {
		
		return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`)

	}else{
		console.error(`El tipo base a convertir no es valida`);
	}
}
// convertirBinarioDecimal();
// convertirBinarioDecimal("2");
// convertirBinarioDecimal(100);
// convertirBinarioDecimal(100,"2");
// convertirBinarioDecimal(100,2);
// convertirBinarioDecimal(10,2);
// convertirBinarioDecimal(100,3);
/* 
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
 */

const aplicarDescuento = (monto = undefined, descuento = 0)=>{
	
	if ( monto === undefined ) return console.warn(`No ingresaste un monto`);
	
	if ( typeof monto !== "number") return console.error(`Este valor ${monto} ingresado, No es numero`);
	
	if ( Math.sign(monto) === -1 ) return console.error(`El monto no puede ser negativo`);
	
	if ( typeof descuento !== "number") return console.error(`Este valor ${descuento} ingresado, No es numero`);
	
	if ( Math.sign(descuento) === -1 ) return console.error(`El descuento no puede ser negativo`);

	return console.info(`${monto} - ${descuento}% = ${monto - ((monto * descuento )/ 100)}`);
} 
 
// aplicarDescuento();
// aplicarDescuento("200");
// aplicarDescuento(0);
// aplicarDescuento(-1000);
// aplicarDescuento(1000);
// aplicarDescuento(1000);
// aplicarDescuento(1000,25);

/* 
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */

const calcularAnios = (fecha = undefined)=>{
	if ( fecha === undefined ) return console.warn(`No ingresaste la fecha`);

	if ( !(fecha instanceof Date)) return console.error(`Este valor ${fecha} ingresado, no es valido`);
	
	let hoyMenosFecha = new Date().getTime()-fecha.getTime(),
		aniosEnMilisegunos = 1000 * 60 * 60 * 24 * 365,
		aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegunos);

	return (Math.sign(aniosHumanos) === -1)
	?console.info(`Falta ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
	:(Math.sign(aniosHumanos) === 1 ) 
		? console.info(`Ha pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
		: console.info(`Estamos en le actual ${fecha.getFullYear()}`)
}
// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date);
// calcularAnios(new Date(1994, 4, 14));
// calcularAnios(new Date(2032,02));

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */
const contarLetras =( cadena = "" ) =>{
	if (cadena === "") return console.warn(`No ingresaste una cadena de texto`);
	if (typeof cadena !== "string") return console.error(`Este valor "${cadena}"  ingresado , no es una cadena de texto`);
	let vocal = 0,
		consonante = 0;
		for (const letra of cadena) {
			if (/[AaÁáEeÉéIiÍíOoÓóUuÚúÜü]/.test(letra)) vocal++;
			if (/[BbCcDdFfGgHhJjKkLlMmNnÑñPpQqSsTtVvWwXxYyZz]/.test(letra)) consonante++
		}
		return console.info(`Texto ingresado : ${cadena}, cantidad de vocales : ${vocal} y cantidad de consonantes : ${consonante}` )
}
// contarLetras();
// contarLetras(3);
// contarLetras("Hola Mundo");

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */

const validarNombre = (nombre = "")=> {
	if(!nombre) return console.warn("No ingresaste un nombre");
	if(typeof nombre !== "string") return console.error(`Este valor "${nombre}" ingresaso, no es una cadena de texto`);

	let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

	return (expReg)
	?console.info(`"${nombre}", es un nombre válido`)
	:console.info(`"${nombre}", no es un nombre válido`);
}
// validarNombre();
// validarNombre(9);
// validarNombre("Otoniel Hernández Garzón");
// validarNombre("Otoniel Hernández Garzón, 12");
/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
const validarEmail = (email = "")=> {
	if(!email) return console.warn("No ingresaste un email");
	if(typeof email !== "string") return console.error(`Este valor "${email}" ingresaso, no es una cadena de texto`);

	let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

	return (expReg)
	?console.info(`"${email}", es un email válido`)
	:console.info(`"${email}", no es un email válido`);
}
// validarEmail();
// validarEmail(9);
// validarEmail("Otoniel Hernández Garzón");
// validarEmail("Otoniel Hernández Garzón, 12");


/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */

const devolverCuadrados = ( array = undefined)=>{
	if(array === undefined) return console.warn("No ingresaste un arreglo de numeros");
	if (!(array instanceof Array)) return console.error(`Este valor "${array}" ingresado, no es un arreglo de numeros`);
	if(array.length === 0) return console.error("El arreglo esta vacio");
	for (const numero of array) {
		if(typeof numero !== "number") return console.error(`Este valor "${numero}" ingresado, no es un número`);
	} 

	const newArray = array.map(numero => numero * numero);

	return console.info(`Arreglo original: "[${array}]",\nArreglo elevado al cuadrado: "[${newArray}]"`)
}

// devolverCuadrados();
// devolverCuadrados("s");
// devolverCuadrados(1);
// devolverCuadrados([]);
// devolverCuadrados([1,2,"a"]);
// devolverCuadrados([1, 4, 5]);

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */

const arrayMinMax = (array = undefined)=>{
	if(array === undefined) return console.warn("No ingresaste un arreglo de numeros");

	if (!(array instanceof Array)) return console.error(`Este valor "${array}" ingresado, no es un arreglo de numeros`);
	
	if(array.length === 0) return console.error("El arreglo esta vacio");
	for (const numero of array) {
		if(typeof numero !== "number") return console.error(`Este valor "${numero}" ingresado, no es un número`);
	}

	return console.info(`Arreglo original: "[${array}]",\nValor mayor:  "[${Math.max(...array)}]",\nValor minimo:  "[${Math.min(...array)}]"`)
}
// arrayMinMax();
// arrayMinMax(true);
// arrayMinMax([]);
// arrayMinMax([1,1,"."]);
// arrayMinMax([1, 4, 5, 99, -60]);
/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */
const separarParesImpares=(array=undefined)=>{
	if(array === undefined) return console.warn("No ingresaste un arreglo de numeros");

	if (!(array instanceof Array)) return console.error(`Este valor "${array}" ingresado, no es un arreglo de numeros`);
	
	if(array.length === 0) return console.error("El arreglo esta vacio");
	for (const numero of array) {
		if(typeof numero !== "number") return console.error(`Este valor "${numero}" ingresado, no es un número`);
	}

	return console.info({
		pares:array.filter(numero => numero % 2 === 0),
		pares:array.filter(numero => numero % 2 === 1)
	});
}

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

const ordenarArreglo =(array=undefined)=>{
	if(array === undefined) return console.warn("No ingresaste un arreglo de numeros");

	if (!(array instanceof Array)) return console.error(`Este valor "${array}" ingresado, no es un arreglo de numeros`);
	
	if(array.length === 0) return console.error("El arreglo esta vacio");

	for (const numero of array) {
		if(typeof numero !== "number") return console.error(`Este valor "${numero}" ingresado, no es un número`);
	}
	return console.info({
		array,
		acendete: array.map(el => el).sort(),
		desendente: array.map(el => el).sort().reverse()
	})
}
// ordenarArreglo();
// ordenarArreglo("Hola");
// ordenarArreglo([]);
// ordenarArreglo([3,{}]);
// ordenarArreglo([7, 5,7,8,6]);
/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 */

const quitarDublicados = (array =undefined)=>{

	if(array === undefined) return console.warn("No ingresaste un arreglo de numeros");

	if (!(array instanceof Array)) return console.error(`Este valor "${array}" ingresado, no es un arreglo de numeros`);
	
	if(array.length === 0) return console.error("El arreglo esta vacio");
	
	/* return console.info({
		original	: array,
		sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === (index))
	}) */
	
	return console.info({
		original	: array,
		sinDuplicados: [...new Set(array)]
	})
}

// quitarDublicados();
// quitarDublicados([]);
// quitarDublicados([2]);
// quitarDublicados([2]);
// quitarDublicados(["x", 10, "x", 2, "10", 10, true, true]);

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

const promedio = (array = undefined) =>{
	if(array === undefined) return console.warn("No ingresaste un arreglo de numeros");

	if (!(array instanceof Array)) return console.error(`Este valor "${array}" ingresado, no es un arreglo de numeros`);
	
	if(array.length === 0) return console.error("El arreglo esta vacio");

	for (const numero of array) {
		if(typeof numero !== "number") return console.error(`Este valor "${numero}" ingresado, no es un número`);
	}
	return console.info(
		array.reduce((total, numero, index, array)=>{
			total+=numero;
			if (index===array.length-1) {
				return `El promedio de ${array.join("+")} es ${total/array.length}`
			}else{
				return total;
			}
		})
	)
}
// promedio();
// promedio({});
// promedio([]);
// promedio([2,true]);
// promedio([9,8,7,6,5,4,3,2,1,0]);
/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */
/*
class Pelicula{
	constructor({id, titulo, director, estreno, pais, generos, calificacion}){
		this.id = id;
		this.titulo = titulo;
		this.director = director;
		this.estreno = estreno;
		this.pais = pais;
		this.generos = generos;
		this.calificacion = calificacion;
		
		this.validarImdb(id);
		this.validarTitulo(titulo);
		this.validardirector(director);
		this.validarEstreno(estreno);
		this.validarPais(pais);
		this.validarGenero(generos);
		this.validarCalificacion(calificacion);
	}
	static get listaGeneros(){
		return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance"," Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
	}

	static generosAceptados(){
		console.info(`Los géneros aceptados son; ${Pelicula.listaGeneros.join(",")}`);
	}

	validarCadena(propiedad, valor){
		if(!valor) return console.warn(`${propiedad} "${valor}" está vacio`);

		if(typeof valor!== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);

		return true;
	}

	validarLongitudCadena(propiedad, valor, longitud){
		if (valor.length > longitud) return console.error(`${propiedad} "${valor}" exede el número caracteres permitiendo (${longitud})`);

		return true
	}
	
	validarAreglo(propiedad, valor){

		if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío `);

	if (!(array instanceof Array)) return console.error(`${propiedad} "${array}" ingresado, no es un arreglo de numeros`);
	
	if(valor.length === 0) return console.error("El arreglo esta vacio");
	for (const cadena of valor) {
		if(typeof cadena !== "string") return console.error(`Este valor "${cadena}" ingresado, no es una cadena de texto`);
	}

		return true;
	}
	
	validarImdb(id){
		if(this.validarCadena("Mi IMDB id", id))
			if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
				return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números.`);
	}
	validarTitulo(titulo){
		if(this.validarCadena("Titulo", titulo))
		this.validarLongitudCadena("Titulo", titulo, 100);
	}
	validarDirector(director){
		if(this.validarCadena("Director", director))
		this.validarLongitudCadena("Director", director, 50);
	}
	validarEstreno(estreno){
		if(this.validarCadena("El año de esterno", estreno))
			if(!(/^([0-9]){4}$/.test(estreno)))
				return console.error(`El año de estreno "${estreno}" no es válido, debe tener 4 digitos.`);
	}
	validarPais(pais){
		this.validarAreglo("El pais", pais)
	}
	validarGenero(generos){
		if(this.validarAreglo("El genero", generos)){
			for (const genero of generos) {
				console.log(genero, Pelicula.listaGeneros.includes(generos));
				if (!Pelicula.listaGeneros.includes(generos) ){
					console.error(`El genero(s) es(son) incorrecta "${generos,join(",")}"`);
					Pelicula.generosAceptados();
				}
			}
		}
	}
	validarCalificacion(calificacion){
		if(this.validarCadena("La calificacion es", calificacion))
			return(calificacion < 0||calificacion > 10)
				? console.error(`La calificación tiene tiene que estar en un rango entre 0 y10`)
				:this.calificacion = calificacion.toFixed(1);
	}

	fichaTecnica(){
		console.info(`Ficha Técnica: \n Título: "${this.titulo}"\n Director: "${this.director}"\n País: "${this.pais.join("-")}"\nGeneros:"${this.generos.join(",")}"\nClaficación: "${this.calificacion}"\nIMDB id: "${this.id}" `)
	}
}
const pelicula = new Pelicula({
	id							: 	"tt1234567",
	titulo					: 	" asd",
	director				:		"Juan Morales",
	estreno					:		2021,
	pais						: 	["Colombia","Mexico"],
	generos					:		["Comedy"],
	calificacion		: 	5.1777
	
});
pelicula.fichaTecnica(); */
/*

const peliculas = [
  {
    id: "tt1234567",
    titulo: "el titulo",
    director: "Manuel medarno",
    estreno: 2020,
    pais: ["Mexico"],
    generos: ["Comedy", "Sport"],
    calificacion: 1,
  },
  {
    id: "tt1234567",
    titulo: "el titulo",
    director: "Manuel medarno",
    estreno: 2020,
    pais: ["Mexico"],
    generos: ["Comedy", "Sport"],
    calificacion: 2,
  },
  {
    id: "tt1234567",
    titulo: "el titulo",
    director: "Manuel medarno",
    estreno: 2020,
    pais: ["Mexico"],
    generos: ["Comedy", "Sport"],
    calificacion: 8,
  },
];

peliculas.forEach((el) => new Pelicula(el).fichaTecnica());
*/

document.write("hola Otto");