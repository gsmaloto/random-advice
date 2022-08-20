

let adviceEl = document.getElementById('advice-el')
let adviceNumberEl = document.querySelector('h1')
let spinner = document.querySelector('.spinner')
let dice = document.querySelector('.dice')
let adviceNum = document.getElementById('advice-num')

const getAdvice = async() => {

    const randomAdvice = await fetch('https://api.adviceslip.com/advice')
    const jsonAdvice = await randomAdvice.json();

    displayAdvice(jsonAdvice)
    console.log(jsonAdvice)
    console.log('get advice run')

    setTimeout(()=>{dice.style.visibility = 'visible'}, 2000);


}


const displayAdvice = (data) => {

    spinner.style.display = 'none'
    

    result = data.slip
    adviceNum.textContent = ` #${result.id}`;
    adviceEl.textContent = `"${result.advice}"`
    console.log("display advice run ", result)
    adviceEl.style.transform = "scale(1)";
}

dice.addEventListener('click',e => {
    dice.style.visibility = 'hidden'
  


spinner.style.display = 'block'
adviceEl.textContent = ''

    getAdvice()


})
dice.style.visibility = 'hidden'
getAdvice()
