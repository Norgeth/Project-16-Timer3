// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('button.start');
const btnReset = document.querySelector('button.reset');
const divTime = document.querySelector('div.insideTime');
const nowTime = new Date().getTime();

btnStart.addEventListener('click', () => {
    setInterval(()=>{
        
        let seconds = (new Date().getTime() / 1000) - (nowTime / 1000)
        divTime.textContent = seconds.toFixed(2)
    },10)
    
})