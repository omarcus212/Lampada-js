'use.stricht'


const lampada = document.getElementById('lampada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const piscar = document.getElementById('piscar');
let idpisca=null;

const ligarluz = () => {    /* ligando a luz quaso nao esteja quebrada*/

    if (!lampadaquebrada()) {

        lampada.src = './img/ligada.jpg'
    }
}

const desligarluz = () => {   /* desligando a luz quaso nao esteja quebrada*/

    if (!lampadaquebrada()) {

        lampada.src = './img/desligada.jpg';
    }

}

const quebrarlampada = () => {    /* trocando a imagem para lampada quebrada */

    lampada.src = './img/quebrada.jpg';

}

const lampadaquebrada = () => {   /* encotra a lampada quebrada */

    return lampada.src.includes('quebrada');


}


const lampadadesligada = () => {  /*encotra a lampada desligada */
    return lampada.src.includes('desligada');
}

const ligardesligada = () => { /* piscar a lampada*/

    if (lampadadesligada()){

       ligarluz();

    } else {

        desligarluz();

    }

}

 const piscalampada = () => {    /* funçao para fazer a lampada para de piscar e piscar somente com um click */

      if(idpisca == null){
      
        idpisca =  setInterval(ligardesligada, 400);

        piscar.textContent = 'parar';

      }else {

          clearInterval(idpisca);
          piscar.textContent ='piscar';
          idpisca = null;
      }

   



 }







ligar.addEventListener('click', ligarluz);
desligar.addEventListener('click', desligarluz);
lampada.addEventListener('dblclick', quebrarlampada);
piscar.addEventListener('click', piscalampada);


