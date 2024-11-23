const SPECIAL_CHARACTERS = [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const CAPITAL_LETTERS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const SMALL_LETTERS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const copySvg = `<svg xmlns="http://www.w3.org/2000/svg" stroke="white" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg>`
const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>`
const moonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/></svg>`

const bodyEl = document.querySelector("body")
const colorSchemeBtn = document.getElementById("color-scheme-btn")
const generateBtnEl = document.getElementById("generate-btn")
const pwdField1 = document.getElementById("pwd-field-1")
const pwdField2 = document.getElementById("pwd-field-2")
const cpyPwd1 = document.getElementById("cpy-pwd-1")
const cpyPwd2 = document.getElementById("cpy-pwd-2")

const sliderEl = document.getElementById("pwd-length-slider")
const pwdLenDisplayEl = document.getElementById("pwd-length-display")
const numberCheckbox = document.getElementById("number-checkbox")
const splCharCheckbox = document.getElementById("spl-char-checkbox")

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

let includeNumber = numberCheckbox.checked
let includeSplChar = splCharCheckbox.checked

const defaultPassworLength = 15;
let pwdSize = defaultPassworLength;

let pwd1 = ""
let pwd2 = ""


sliderEl.value = pwdSize;
pwdLenDisplayEl.textContent = pwdSize ;
cpyPwd1.innerHTML = copySvg;
cpyPwd2.innerHTML = copySvg;

let colorScheme = prefersDarkScheme.matches ? "dark" : "light";
colorSchemeBtn.innerHTML = prefersDarkScheme.matches ? sunSvg : moonSvg;
bodyEl.classList.remove(colorScheme === "dark" ? "light" : "dark")
bodyEl.classList.add(colorScheme)

function getCharSet() {
    return [...(includeSplChar ? SPECIAL_CHARACTERS : []),
            ...(includeNumber ? NUMBERS : []),
            ...CAPITAL_LETTERS, ...SMALL_LETTERS
    ]
}

function getRandomNum (start, exclusiveEnd) {
    return Math.floor(Math.random() * exclusiveEnd) + start;
}

function generatePassword() {
    const charSet = getCharSet()
    let charSetSize = charSet.length;
    const pwd = []
    for (let i = 0; i < pwdSize; i++) {
        pwd.push(charSet[getRandomNum(0, charSetSize)])
    }

    return pwd.join("");
}

function generatePasswords() {
    pwd1 = generatePassword()
    pwd2 = generatePassword()
    pwdField1.textContent = pwd1
    pwdField2.textContent = pwd2
}

sliderEl.addEventListener("change", (event) => {
    pwdSize = event.target.value
    pwdLenDisplayEl.innerText = pwdSize
})

numberCheckbox.addEventListener("change", function() {
    includeNumber = numberCheckbox.checked
})

splCharCheckbox.addEventListener("change", function() {
    includeSplChar = splCharCheckbox.checked
})

cpyPwd1.addEventListener("click", function(){copyToClipboard(pwd1, cpyPwd1)})
cpyPwd2.addEventListener("click", function(){copyToClipboard(pwd2, cpyPwd2)})

function copyToClipboard(pwd, el) {
    navigator.clipboard.writeText(pwd);
    el.innerHTML = checkSvg
    setTimeout(function() {
        el.innerHTML = copySvg
    }, 1000)
}

colorSchemeBtn.addEventListener("click", function() {
    if (colorScheme === "light") {
        colorScheme = "dark";
        bodyEl.classList.remove("light");
        bodyEl.classList.add(colorScheme);
        colorSchemeBtn.innerHTML = sunSvg;
    } else {
        colorScheme = "light";
        bodyEl.classList.remove("dark");
        bodyEl.classList.add(colorScheme);
        colorSchemeBtn.innerHTML = moonSvg;
    }
})