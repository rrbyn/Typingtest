const textBoxDiv = document.getElementById('text-box')
const typingArea = document.getElementById('typing-area')
const feedBackDiv = document.getElementById('feedback')
const timerDiv = document.getElementById('timer')

const text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let wordsArray = text.split(' ')

textBoxDiv.innerText = text
let wordCount = 0

let errorCount = 0
feedBackDiv.innerText = errorCount

let timer = 0
timerDiv.innerText = "0:00"
setInterval(() => {
    console.log("1")
    minutes = parseInt(timer / 60)
    seconds = (timer % 60).toString().padStart(2, '0')
    timer++
    timerDiv.innerText = minutes + ":" + seconds 
}, 1000);

highlight()
typingArea.focus()
typingArea.addEventListener('keydown', event => {
    console.log(event.keyCode)
    if (event.keyCode == 32) {

       if ( text.split(' ')[wordCount] != typingArea.value.split(' ')[wordCount] ) {
           wordsArray[wordCount] = wordsArray[wordCount] = '<span class="incorrect">  ' + wordsArray[wordCount] + '</span>'
        errorCount++
           feedBackDiv.innerText = errorCount
       }else{
        wordsArray[wordCount] = wordsArray[wordCount] = '<span class="correct">  ' + wordsArray[wordCount] + '</span>'
       }

        wordCount++
        highlight()
    }
    
})

function highlight () {
    let highlightedArray = Array.from(wordsArray)
        highlightedArray[wordCount] = '<span class="highlight">  ' + highlightedArray[wordCount] + '</span>'
        textBoxDiv.innerHTML = highlightedArray.join(' ')
}

