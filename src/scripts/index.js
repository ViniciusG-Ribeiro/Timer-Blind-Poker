const bb = document.getElementById('bb');
const minutes = document.getElementById('minutes');
const htmlTimerDiv = document.querySelectorAll('timer'); 
const barkSound = document.getElementById('bark');
const count = document.getElementById('count');
const currentB = document.getElementById('current-b');
const nextB= document.getElementById('next-b');
var s = 0
var m = 0 

const buttonStart = document.getElementById('start').addEventListener("click",()=>{
    BbValue = bb.value
    startCount()
})

function startCount (){
    if(bb.value < 8 || minutes.value < 10 || minutes.value > 20){
        alert("Valor do BB deve ser maior que 8 e o temporizador deve indiar entre 10 a 20 minutos.");
        return
    }
    refreshBlind();
    m = minutes.value;
    let minutosFormatados = m < 10 ? `0${m}` : `${m}`;
    let segundosFormatados = s < 10 ? `0${s}` : `${s}`;
    count.textContent = `${minutosFormatados}:${segundosFormatados}`;
    startTimer = setInterval(function(){
        timer()
    },1000)
}

function stoptimer(){
    clearInterval(startTimer);
}

function timer(){
    if(m == 0 && s == 0){
        m = 0;
        s = 0;
        let minutosFormatados = m < 10 ? `0${m}` : `${m}`;
        let segundosFormatados = s < 10 ? `0${s}` : `${s}`;
        count.textContent = `${minutosFormatados}:${segundosFormatados}`;
        barkSound.play();
        BbValue = BbValue*2;
        stoptimer();
        startCount();
    }else if(s != 0){
        s--;
        let minutosFormatados = m < 10 ? `0${m}` : `${m}`;
        let segundosFormatados = s < 10 ? `0${s}` : `${s}`;
        count.textContent = `${minutosFormatados}:${segundosFormatados}`;
    }else if (m !=0 && s == 0){
        s=59;
        m --;
        let minutosFormatados = m < 10 ? `0${m}` : `${m}`;
        let segundosFormatados = s < 10 ? `0${s}` : `${s}`;
        count.textContent = `${minutosFormatados}:${segundosFormatados}`;
    }

}

function refreshBlind(){
    currentB.innerHTML = `Atual BB: <span>${BbValue}</span> SB: <span>${BbValue/2}</span>`;
    nextB.innerHTML = `Próximo BB: <span>${BbValue*2}</span> SB: <span>${BbValue}</span>`;
}

const reset = document.getElementById('reset').addEventListener("click",()=>{
    bb.value = ''
    minutes.value = ''
    m = 0;
    s = 0;
    let minutosFormatados = m < 10 ? `0${m}` : `${m}`;
    let segundosFormatados = s < 10 ? `0${s}` : `${s}`;
    count.textContent = `${minutosFormatados}:${segundosFormatados}`;
    currentB.innerHTML = `Atual BB: <span>0</span> SB: <span>0</span>`;
    nextB.innerHTML = `Próximo BB: <span>0</span> SB: <span>0</span>`;
    stoptimer();
})

// https://www.storyblocks.com/audio/stock/big-dog-single-bark-blwd5rh8dbk0wy4vyb.html