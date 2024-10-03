function tocaSom (seletorAudio) {

   const elemento = document.querySelector(seletorAudio);

   if (elemento != null && elemento.localName === 'audio') {

        elemento.play();
    }
    else {
         //alert('Elemento não encontrado') são duas formas de mostrar um problema para o usuario.
    console.log('Elemento ou seletor não encontrado'); 
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0; 

for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];

const idAudio =`#som_${instrumento}`; //template string
    

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code == 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter' ) {
            tecla.classList.add('ativa');
        }

    
        // o simbolo = tem a função de atribuir o lado direito para o lado esquerdo
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //contador = contador + 1; a gente substitui pelo contador++ para resumir :)

}

