const formLightHealing = document.querySelector('#formularioLightHealing');
const formIntenseHealing = document.querySelector('#formularioIntenseHealing');
const formularioWoundCleansing = document.querySelector('#formularioWoundCleansing');
const formularioMassHealing = document.querySelector('#formularioMassHealing');
const formularioUltimateHealing = document.querySelector('#formularioUltimateHealing');
const formularioSalvation = document.querySelector('#formularioSalvation');


formLightHealing.addEventListener('submit', function(e){
    e.preventDefault();
    const inputLevel = e.target.querySelector('#level');
    const inputMagicLevel = e.target.querySelector('#magicLevel');
    const level = Number(inputLevel.value);
    const magicLevel = Number(inputMagicLevel.value);

    errorMessage = validarResultado(level, magicLevel, 10);
    if (errorMessage) {
        return setResultado(errorMessage, false, this);
    }

    const calculoLightHealingMaxima = getCalculoLightHealingMaxima (level, magicLevel);
    const calculoLightHealingMinima = getCalculoLightHealingMinima (level, magicLevel);
    const msg = `Seu Light Healing cura no Máximo: ${calculoLightHealingMaxima}HP e no Mínimo: ${calculoLightHealingMinima}HP.`;
    setResultado(msg, true, this);   
});

formIntenseHealing.addEventListener('submit', function(e){
    e.preventDefault();
    const inputLevel = e.target.querySelector('#level');
    const inputMagicLevel = e.target.querySelector('#magicLevel');
    const level = Number(inputLevel.value);
    const magicLevel = Number(inputMagicLevel.value);
   
    errorMessage = validarResultado(level, magicLevel, 20);
    if (errorMessage) {
        return setResultado(errorMessage, false, this);
    }

    const calculoIntenseHealingMaxima = getCalculoIntenseHealingMaxima (level, magicLevel);
    const calculoIntenseHealingMinima = getCalculoIntenseHealingMinima (level, magicLevel);
    const msg = `Seu Intense Healing cura no Máximo: ${calculoIntenseHealingMaxima}HP e no Mínimo: ${calculoIntenseHealingMinima}HP.`;
    setResultado(msg, true, this);   
});

formularioWoundCleansing.addEventListener('submit', function(e){
    e.preventDefault();
    const inputLevel = e.target.querySelector('#level');
    const inputMagicLevel = e.target.querySelector('#magicLevel');
    const level = Number(inputLevel.value);
    const magicLevel = Number(inputMagicLevel.value);
   
    errorMessage = validarResultado(level, magicLevel, 8);
    if (errorMessage) {
        return setResultado(errorMessage, false, this);
    }

    const calculoWoundCleansingMaxima = getCalculoWoundCleansingMaxima (level, magicLevel);
    const calculoWoundCleansingMinima = getCalculoWoundCleansingMinima (level, magicLevel);
    const msg = `Seu Wound Cleansing cura no Máximo: ${calculoWoundCleansingMaxima}HP e no Mínimo: ${calculoWoundCleansingMinima}HP.`;
    setResultado(msg, true, this);   
});

formularioMassHealing.addEventListener('submit', function(e){
    e.preventDefault();
    const inputLevel = e.target.querySelector('#level');
    const inputMagicLevel = e.target.querySelector('#magicLevel');
    const level = Number(inputLevel.value);
    const magicLevel = Number(inputMagicLevel.value);
   
    errorMessage = validarResultado(level, magicLevel, 36);
    if (errorMessage) {
        return setResultado(errorMessage, false, this);
    }

    const calculoMassHealingMaxima = getCalculoMassHealingMaxima (level, magicLevel);
    const calculoMassHealingMinima = getCalculoMassHealingMinima (level, magicLevel);
    const msg = `Seu Mass Healing cura no Máximo: ${calculoMassHealingMaxima}HP e no Mínimo: ${calculoMassHealingMinima}HP.`;
    setResultado(msg, true, this);   
});

formularioUltimateHealing.addEventListener('submit', function(e){
    e.preventDefault();
    const inputLevel = e.target.querySelector('#level');
    const inputMagicLevel = e.target.querySelector('#magicLevel');
    const level = Number(inputLevel.value);
    const magicLevel = Number(inputMagicLevel.value);
   
    errorMessage = validarResultado(level, magicLevel, 30);
    if (errorMessage) {
        return setResultado(errorMessage, false, this);
    }

    const calculoUltimateHealingMaxima = getCalculoUltimateHealingMaxima (level, magicLevel);
    const calculoUltimateHealingMinima = getCalculoUltimateHealingMinimaMinima (level, magicLevel);
    const msg = `Seu Ultimate Healing cura no Máximo: ${calculoUltimateHealingMaxima}HP e no Mínimo: ${calculoUltimateHealingMinima}HP.`;
    setResultado(msg, true, this);   
});

formularioSalvation.addEventListener('submit', function(e){
    e.preventDefault();
    const inputLevel = e.target.querySelector('#level');
    const inputMagicLevel = e.target.querySelector('#magicLevel');
    const level = Number(inputLevel.value);
    const magicLevel = Number(inputMagicLevel.value);
   
    errorMessage = validarResultado(level, magicLevel, 60);
    if (errorMessage) {
        return setResultado(errorMessage, false, this);
    }

    const calculoSalvation = getCalculoSalvation (level, magicLevel);
    const msg = `Seu Salvation tem a cura média de: ${calculoSalvation}HP.`;
    setResultado(msg, true, this);   
});

function validarResultado(level, magicLevel, minLevel) {
    if(!level){
        return 'Level inválido';
    }
    if(!magicLevel){
        return 'Magic Level inválido';
    }
    if (level < 1) {
        return 'O nível não pode ser 0 ou negativo';
    }
    if (magicLevel < 0) {
        return 'O Magic Level não pode ser menor que 0';
    }
    if (level < minLevel) {
        return 'Você não tem nível para executar essa magia';
    }
}

function getCalculoLightHealingMaxima(level, magicLevel){
    const calculoLightHealingMaxima = level * 0.2 + magicLevel * 1.795 + 11;
    return calculoLightHealingMaxima.toFixed(0);
}
function getCalculoLightHealingMinima(level, magicLevel){
    const calculoLightHealingMinima = level * 0.2 + magicLevel * 1.4 + 8;
    return calculoLightHealingMinima.toFixed(0);
}
function getCalculoIntenseHealingMaxima(level, magicLevel){
    const calculoIntenseHealingMaxima = level * 0.2 + magicLevel * 5.59 + 35;
    return calculoIntenseHealingMaxima.toFixed(0);
}
function getCalculoIntenseHealingMinima(level, magicLevel){
    const calculoIntenseHealingMinima = level * 0.2 + magicLevel * 3.184 + 20;
    return calculoIntenseHealingMinima.toFixed(0);
}
function getCalculoWoundCleansingMaxima(level, magicLevel){
    const calculoWoundCleansingMaxima = level * 0.2 + magicLevel * 7.95 + 51;
    return calculoWoundCleansingMaxima.toFixed(0);
}
function getCalculoWoundCleansingMinima(level, magicLevel){
    const calculoWoundCleansingMinima = level * 0.2 + magicLevel * 4 + 25;
    return calculoWoundCleansingMinima.toFixed(0);
}
function getCalculoMassHealingMaxima(level, magicLevel){
    const calculoMassHealingMaxima = level * 0.2 + magicLevel * 10.43 + 62;
    return calculoMassHealingMaxima.toFixed(0);
}
function getCalculoMassHealingMinima(level, magicLevel){
    const calculoMassHealingMinima = level * 0.2 + magicLevel * 5.7 + 26;
    return calculoMassHealingMinima.toFixed(0);
}
function getCalculoUltimateHealingMaxima(level, magicLevel){
    const calculoUltimateHealingMaxima = level * 0.2 + magicLevel * 12.79 + 79;
    return calculoUltimateHealingMaxima.toFixed(0);
}
function getCalculoUltimateHealingMinimaMinima(level, magicLevel){
    const calculoUltimateHealingMinima = level * 0.2 + magicLevel * 7.22 + 44;
    return calculoUltimateHealingMinima.toFixed(0);
}
function getCalculoSalvation(level, magicLevel){
    const calculoSalvation = level * 0.2 + magicLevel * 19 + 50;
    return calculoSalvation.toFixed(0);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid, form){

    const resultado = form.querySelector('#resultado');
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