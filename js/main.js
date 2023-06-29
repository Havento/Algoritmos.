function saludo(){
    alert("Bienvenido Usuario");
    alert("A continuacion encontrarás unos botones que ejecutan algoritmos realizados con JS puro");

}
function suma() {
    let A=0;
    let B=0;
    let SUMA=0;

    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR A SUMAR "));

    SUMA=A+B;

    alert("EL RESULTADO DE LA SUMA DE LOS VALORES ES: " + SUMA);
}

function operaciones(){
let A=0;
let B=0;
let MULTIPLICACION=0;
let SUMA=0;
let RESTA=0;
let DIVISION=0;
A= parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR: "));
B= parseInt(prompt("PORAFVOR INGRESE EL SEGUNDO VALOR"));
SUMA=A+B;
RESTA=A-B;
MULTIPLICACION=A*B;
DIVISION=A/B;
alert("EL RESULTADO DE LAS OPERACIONES SON LAS SIGUIENTES: "+" SUMA: " 
+SUMA+ " RESTA: " +RESTA+" MULTIPLICAION: " +MULTIPLICACION+
 " DIVISION: "+DIVISION);
}
function cuadrado(){
    let A=0;
    let R=0;
    A=parseInt(prompt("POR FAVOR INGRESE EL NUERO "));
    R=Math.sqrt(A);
    alert("la raiz es: "+R);
}

function area(){
    let A=0
    let B=0
    let AREA=0

    A=parseInt(prompt("POR FAVOR INGRESE LA ALTURA DE EL TRIANGULO"));
    B=parseInt(prompt("POR FAVOR INGRESE  BASE EL TRIANGULO"));
    AREA=A*A;
    alert("EL AREA DE EL TRIANGULO ES: " + AREA);
}

function inversion(){
    let INVERSION=0;
    let AÑOS=0;
    let MESES=0;
    let P=0;
    let SUMA=0;
    INVERSION=(prompt("POR FAVOR INGRESE EL DINERO QUE QUIERE INVERTIR"));
    AÑOS=(prompt("POR FAVOR INGRESE LOS AÑOS QUE QUIERE  INVENERTIR SU DINERO"));
    MESES=(AÑOS/12)*0.017;
    /*P=(INVERSION*0.017)*MESES;
    SUMA=P+INVERSION;*/
    let capital=((INVERSION*MESES)+INVERSION);
    alert("DEACUERDO A LOS DATOS INGRESADOS A " + AÑOS +
    " AÑOS ESTARIA GANANDO: "+capital );
}

function promedio(){
    let n=0;
    let NOTAS=0;
    let M=0;
    let SUMA=0;
    let promedio=0;
    n=(prompt("POR FAVOR INGRESE SU NOMBRE"));
    M=(prompt("POR FAVOR INGRESE SU MATERIA"));
    alert("POR FAVOR INGRESE SUS NOTAS");

    for (let i=1; i <= 7;i++){
        NOTAS= parseInt(prompt("NOTA "+i));
        SUMA = SUMA + NOTAS;
        promedio=(SUMA/7);
    }
    if (promedio>=6.2) {
        alert( "EL ESTUDIANTE "+n+ " DE LA MATERIA "+M+ 
    " PASA LA MAETRIA CON UN POMEDIO DE:  "+ promedio);
    }
    else {
    alert( " EL ESTUDIANTE "+n+ " DE LA MATERIA "+M+ 
    " PIERDE CON UN PROMEDIO DE:  "+ promedio);
    }
}
function  dos(){
    let A=0;
    let B=0;
    A=(prompt("POR FAVOR INGRESE EL PRIMER NUEMRO"));
    B=(prompt("POR FAVOR INGRESE EL SEGFUNDO NUMERO"));
    if(A>B){
        alert("EL NUMERO MAYOR ES:  "+A);
    }
    else if (A<B){
        alert("EL NUMERO MAYOR ES: "+B);
    } 
    else if(A=B){
        alert("LOS NUMEROS SON IGUALES: "+A);
    }
}
function  tres(){
    let A=0;
    let B=0;
    let C=0
    A=(prompt("POR FAVOR INGRESE EL PRIMER NUEMRO"));
    B=(prompt("POR FAVOR INGRESE EL SEGUNDO NUMERO"));
    C=(prompt("POR FAVOR INGRESE EL TERCER NUMERO"));
    if(A>B & A>C){
        alert("EL NUMERO MAYOR ES:  "+A);
    } 
    else if (A<B & C<B){
        alert("EL NUMERO MAYOR ES: "+B);
    } 
    else if (B<C & A<C){
        alert("EL NUMERO MAYOR ES: "+C);
    } 
    if(A>C & A==B){
        alert("EL PRIMER Y SEGUNDO SON MAYOR QUE EL TERCERO :  "+A);
    } 
    else if (A<B & B==C ){
        alert("EL SEGUNDO Y TERCER NUMERO SON MAYOR QUE EL PRIMERO : "+B);
    } 
    else if(A>B & A==C){
        alert("EL PRIMER NUEMERO Y TERCER NUMERO SON MAYOR QUE EL SEGUNDO: "+C);
    }
    else {
        alert("LOS NUMEROS SON IGUALES: "+C);
    }
}
function  tresM(){
    let A=0;
    let B=0;
    let C=0
    A=(prompt("POR FAVOR INGRESE EL PRIMER NUEMRO"));
    B=(prompt("POR FAVOR INGRESE EL SEGUNDO NUMERO"));
    C=(prompt("POR FAVOR INGRESE EL TERCER NUMERO"));
    
    if(A<B & A<C){
        alert("EL NUMERO MENOR ES:  "+A);
    } 
    else if (A>B & C>B){
        alert("EL NUMERO MENOR ES: "+B);
    } 
    else if (B>C & A>C){
        alert("EL NUMERO MENOR ES: "+C);
    } 
    if(A<C & A==B){
        alert("EL PRIMER Y SEGUNDO SON MENOR QUE EL TERCERO :  "+A);
    } 
    else if (A>B & B==C ){
        alert("EL SEGUNDO Y TERCER NUMERO SON MENOR QUE EL PRIMERO : "+B);
    } 
    else if(A<B & A==C){
        alert("EL PRIMER NUEMERO Y TERCER NUMERO SON MENORR QUE EL SEGUNDO: "+C);
    }
    else if(A=B & B==C & A==C){
        alert("LOS NUMEROS SON IGUALES: "+C);
    }
    else{
        alert("LOS NUMEROS SON IGUALES: "+C);
    }
}

function descuento(){
    let K=0;
    let manzanas=0;
    let precio=4500
    K=(prompt("BIENVENIDO A NUESTRO DISTRUBUIDOR DE MANZANAS POR VAOR INGRESE LOS KILOS DE MANZNAS QUE DESEA LLEVAR"));
    if( 1>2 ){
        manzanas=precio*K;
        alert("EL TOTALA PÁGAR ES DE: "+manzanas);
    }
    else if (3>5) {
        manzanas=(precio*K)/0.1;
        alert(prompt("EL TOTAL A PAGAR CON UN DECUENTO DEL 10% ES DE; "+manzanas));
    }
    else if (6>8) {
        manzanas=(precio*K)/0.16;
        alert(prompt("EL TOTAL A PAGAR CON UN DECUENTO DEL 16% ES DE; "+manzanas));
    }
    else {
        manzanas=(precio*K)/0.2
        alert(prompt("EL TOTAL A PAGAR CON UN DECUENTO DEL 20% ES DE; "+manzanas));
    }
}