const ehLobo = document.querySelector("#lobo");
const ehCarneiro = document.querySelector("#carneiro");
const ehAlface = document.querySelector("#alface");
const ehBarco = document.querySelector("#barco");
const marg1 = document.querySelector("#margem1");
const marg2 = document.querySelector("#margem2");
const ehRio1 = document.querySelector("#rLado1");
const ehRio2 = document.querySelector("#rLado2");
const ehPassageiro = document.querySelector("#passageiro");
const buttonA = document.querySelector("#butA");
const buttonB = document.querySelector("#butB");
var marg1Vet = [ehLobo, ehCarneiro, ehAlface];
var marg2Vet = [];

function moveParaBarco(passageiro){
    if (ehRio1.contains(ehBarco)){
        if (marg1.contains(passageiro)){
            if (ehPassageiro.firstChild != null){}
            else{
                ehPassageiro.appendChild(passageiro);
                marg1Vet.splice(marg1Vet.indexOf(passageiro), 1);
            }
        }
        else if (ehPassageiro.contains(passageiro)){
            marg1.appendChild(passageiro);
            marg1Vet.push(passageiro);
        }
        
    }
    else if(ehRio2.contains(ehBarco)){
        if (marg2.contains(passageiro)){
            if (ehPassageiro.firstChild != null){}
            else{
                ehPassageiro.appendChild(passageiro);
                marg2Vet.splice(marg2Vet.indexOf(passageiro), 1);
            }
        }
        else if (ehPassageiro.contains(passageiro)){
            marg2.appendChild(passageiro);
            marg2Vet.push(passageiro);
        }
        
    }
    
}

ehLobo.addEventListener("click", clickListenerL);
ehCarneiro.addEventListener("click", clickListenerC);
ehAlface.addEventListener("click", clickListenerA);

function clickListenerL(event){
    moveParaBarco(ehLobo);
}
function clickListenerC(event){
    moveParaBarco(ehCarneiro);
}
function clickListenerA(event){
    moveParaBarco(ehAlface);
}

buttonA.addEventListener("click", clickListenerB);

function clickListenerB(event){
    if(ehRio1.contains(ehBarco)){
        if(ehPassageiro.contains(ehAlface) || ehPassageiro.contains(ehLobo) || ehPassageiro.contains(ehCarneiro)){
            marg2Vet.push(ehPassageiro.firstChild);
            marg2.appendChild(ehPassageiro.firstChild);
        }
        ehRio2.appendChild(ehPassageiro);
        ehRio2.appendChild(ehBarco);
        setTimeout(verifica, 300, marg1Vet);
        
    }
    else {
        if(ehPassageiro.contains(ehAlface) || ehPassageiro.contains(ehLobo) || ehPassageiro.contains(ehCarneiro)){
            marg1Vet.push(ehPassageiro.firstChild);
            marg1.appendChild(ehPassageiro.firstChild);
        }
        ehRio1.appendChild(ehPassageiro);
        ehRio1.appendChild(ehBarco);
        setTimeout(verifica, 300, marg2Vet);
        
        
    }
    
    
}

function verifica(vetor){
    if (vetor.includes(ehLobo) && vetor.includes(ehAlface) && vetor.includes(ehCarneiro)){
        alert("DERROTA, Deixou os tres sozinhos");
        butB.click();
    }
    else if (vetor.includes(ehLobo)  && vetor.includes(ehCarneiro)){
        alert("DERROTA, O lobo comeu o Carneiro");
        butB.click();
    }
    else if (vetor.includes(ehAlface) && vetor.includes(ehCarneiro)){
        alert("DERROTA, O carneiro comeu o alface");
        butB.click();
    }
    if (marg2Vet.includes(ehLobo) && marg2Vet.includes(ehAlface) &&   marg2Vet.includes(ehCarneiro)){
        alert("!!PARABENS, VOCE GANHOU!!");
        butB.click();
    }
}

buttonB.addEventListener("click", clickListenerB2);

function clickListenerB2(event){
    if (marg2.contains(ehLobo) || ehPassageiro.contains(ehLobo)){
        marg1.appendChild(ehLobo);
    }
    if (marg2.contains(ehCarneiro) || ehPassageiro.contains(ehCarneiro)){
        marg1.appendChild(ehCarneiro);
    }
    if (marg2.contains(ehAlface) || ehPassageiro.contains(ehAlface)){
        marg1.appendChild(ehAlface);
    }
    if (ehRio2.contains(ehBarco)){
        ehRio1.appendChild(ehPassageiro);
        ehRio1.appendChild(ehBarco);
    }
    marg1Vet = [ehLobo, ehCarneiro, ehAlface];
    marg2Vet = [];
}

function verificaSeGanhou(){
    if (marg2Vet.includes(ehLobo) && marg2Vet.includes(ehAlface) &&   marg2Vet.includes(ehCarneiro)){
        alert("!!PARABENS, VOCE GANHOU!!");
        butB.click();
    }
}