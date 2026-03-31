import { playFadeIn, playFadeOut } from "./animation.js"
const button = document.getElementById("button")
const letter = document.getElementById("letter")
button.addEventListener("click", async ()=>{
    await playFadeOut(button, 1, 0, true)
    playFadeIn(letter, "flex", 1, 0)
})