function buscarPalabras() {
    var palabras = ["PIXEL","CIVIL","PACO","HIJO","TOXICO","CAMION","CLAVE","XIMENA","DAMIAN","LILI","CLAUDIA","MEDALLON","CLIMA"];
    const numerosALetras = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000, IV:4, IX:9, XL:40, XC:90, CD:400, CM:900}
    var j = 0
    var nuevaLista = ""

    while(j<=13){
        var numerosRomanos = /[IVXLCDM]/.test(palabras[j]);
        if(numerosRomanos==true){
            nuevaLista=palabras[j]
            console.log(nuevaLista)

            const combinacionesExpresion = /(IV|IX|XL|XC|CD|CM)|([IVXLCDM])/g;
            const combinacionesObtenidas = nuevaLista.match(combinacionesExpresion);
            console.log(combinacionesObtenidas);

            const valoresLetras = combinacionesObtenidas.map(combinacionesObtenidas => numerosALetras[combinacionesObtenidas])
            console.log(valoresLetras)

            const sumaValores = valoresLetras.reduce((valorAnterior, valorActual) => {
                return valorAnterior + valorActual;
            }, 0);
            console.log(sumaValores)
            }
        j++;
    }
}

buscarPalabras();

/*
I=1
V=5
X=10
L=50
C=100
D=500
M=1000*/ 