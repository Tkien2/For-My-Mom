async function wait(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve()}, ms)
    })
}
function getRandomNum(min, max){
    return Math.random()*(max-min)+min
}
async function playBubble(n){
    let count = 0
    while(true){
        const bubble = document.createElement("div")
        const bubbleScale = getRandomNum(0.5,0.8)
        bubble.classList.add("bubble")
        bubble.style.scale = `${bubbleScale}`
        bubble.animationDuration = `${getRandomNum(8,13)}s`
        // bubble.classList.add(`bubbleColor${Math.round(getRandomNum(1,5))}`)
        document.getElementById("bubblesBackground").appendChild(bubble)
        bubble.style.left = `${getRandomNum(bubble.offsetWidth, window.innerWidth - bubble.offsetWidth)}px`
        if(count >= n){
            document.querySelector(".bubble").remove()
            count--
        }
        count++
        await wait(getRandomNum(800,1700))
    }
}
playBubble(10)