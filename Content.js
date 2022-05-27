// const likes_cout = document.getElementsByTagName("yt-formatted-string")
// const likes_cout = document.getElementById("text")
// const likes_cout = document.getElementsByClassName('style-scope ytd-toggle-button-renderer style-text')
// const likes_cout = document.getElementById("text").getElementsByClassName('style-scope ytd-toggle-button-renderer style-text')


// const likes_dislikes_ele = document.querySelectorAll("#text.style-scope.ytd-toggle-button-renderer.style-text")
// console.log(likes_dislikes_ele)
// console.log(typeof likes_dislikes_ele)

const likes_count_ele = document.querySelectorAll("#text.style-scope.ytd-toggle-button-renderer.style-text")[0]
console.log(likes_count_ele)
console.log(typeof likes_count_ele)
console.log(likes_count_ele.textContent)
console.log(typeof likes_count_ele.textContent)

const likes_string = likes_count_ele.getAttribute('aria-label')
// let likes_number = likes_string.match(/\d/g).join("")
let likes_count = parseInt(likes_string.replace(/[^0-9]/g,''))
console.log(likes_count)
console.log(typeof likes_count)


const dislikes_count_ele = document.querySelectorAll("#text.style-scope.ytd-toggle-button-renderer.style-text")[1]
console.log(dislikes_count_ele)
console.log(typeof dislikes_count_ele)

let dislikes_count = parseInt(dislikes_count_ele.textContent )
console.log(dislikes_count)
console.log(typeof dislikes_count)

let likes_dislikes_count = likes_count + dislikes_count
let likes_perc = likes_count/likes_dislikes_count * 100



console.log(likes_dislikes_count)
console.log(likes_perc)

let rounded_likes_perc = Math.round((likes_perc + Number.EPSILON) * 100) / 100
console.log(rounded_likes_perc)
let rounded_likes_perc_string = (rounded_likes_perc).toString()

// function myFunction() {
//     document.getElementById("demo").innerHTML = "}
function myFunction(){
    document.getElementById("demo").innerHTML = "Paragraph.";
}