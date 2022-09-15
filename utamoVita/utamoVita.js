const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputLevel = e.target.querySelector('#level');
    const inputMagicLevel = e.target.querySelector('#magicLevel');
    const level = Number(inputLevel.value);
    const magicLevel = Number(inputMagicLevel.value);
    
    if(!level){
        setResultado('Level inválido', false);
        return p;
    }

    if(!magicLevel){
        setResultado('Magic Level inválido', false);
        return p;
    }

    const calculoMagicShield = getCalculoMagicShield (level, magicLevel);
    const msg = `Seu Magic Shield é: ${calculoMagicShield}`;
    setResultado(msg, true);
});

function getCalculoMagicShield(level, magicLevel){
    const calculoMagicShield = 300 + 7.6 * level + 7 * magicLevel;
    return calculoMagicShield.toFixed(0);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector ('#resultado');
    resultado.innerHTML = ' '; 
    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('erro');
    }

    p.innerHTML=msg;
    resultado.appendChild(p);
}