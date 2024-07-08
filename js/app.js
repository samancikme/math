function reshenie() {
    var rnd=10000;
    var An1,n1,N,d,An2,A1,AN,S;
    n1=(parseFloat(document.getElementById('inN').value));
    An1=(parseFloat(document.getElementById('inV').value));
    d=(parseFloat(document.getElementById('inD').value));
    N=(parseFloat(document.getElementById('NN').value));
    var outputstring = "";
    N=Math.round(N);
    n1=Math.round(n1);
    //begin арифметической прогрессии//////////////////
    if(document.getElementById('ARIFM').checked==true){//begin арифметической прогрессии
    
        if (d==0) {
            outputstring += " Arifmetik progressiyaning ayırması 0 ge teń bolmawi kerek!"
            document.getElementById('output').innerHTML = outputstring;
            return;
        }
    //Первый член арифметической прогрессии
    A1=Math.round(rnd*(An1-(n1-1)*d))/rnd;
        if (n1 != 1) {
        outputstring += "<font id='my_color'>Progressiyanin' 1-ag'zasin tabuv:</font>  A<sub>1</sub> = A<sub>k</sub> - (k - 1)·d<br />A<sub>1</sub> = "+Math.round(rnd*An1)/rnd+" - ("+n1+"-1)·("+Math.round(rnd*d)/rnd+") = "+Math.round(rnd*A1)/rnd+"<br />";}
        else {outputstring += "<font id='my_color'>Progressiyanin agzasi:</font> A<sub>1</sub> = "+Math.round(rnd*A1)/rnd+"<br />";}
    //Nый член арифметической прогрессии	
    AN=A1+d*(N-1);
    S=(A1+AN)*N/2;
    //outputstring += "<font id='my_color'>Найдем n-ый член прогрессии:</font>  A<sub>n</sub> = A<sub>1</sub> + (n - 1)·d <br />A<sub>"+N+"</sub> = "+A1+" + ("+N+"-1)·("+Math.round(rnd*d)/rnd+") = "+Math.round(rnd*AN)/rnd+"<br />";
    outputstring += "<font id='my_color'>Progressiyanin' n-ag'zasina shekemgi qosindi ag'zasi:</font>  S<sub>n</sub> = n·(A<sub>1</sub> + A<sub>n</sub>)/2<br /> S<sub>"+N+"</sub> = ("+Math.round(rnd*A1)/rnd+" + "+Math.round(rnd*AN)/rnd+")·("+N+")/2 = "+Math.round(rnd*S)/rnd+"<br />";
    outputstring += "<br /><font id='my_color'>progressiyanin dastlepki 10 ag'zasi:</font> <br />A<sub>1</sub> = "+A1+"<br />A<sub>2</sub> = A<sub>1</sub> + d = "+Math.round(rnd*(A1+d))/rnd;
        for (i=3;i<=10;i++){
            AN=A1+d*(i-1);
            outputstring += "<br /> A<sub>"+i+"</sub> = A<sub>1</sub> + "+(i-1)+"·d = "+Math.round(rnd*AN)/rnd;
        }
    
    }
    document.getElementById('output').innerHTML = outputstring;
    return;
    }
    //End Reshenie
    
    
    // function Power(OSN,pwr){
    // var r=1; for (i=0;i<pwr;i++) {r=r*OSN;}
    // return r;}
    