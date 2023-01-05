/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const conversionOne = document.getElementById("conversion-one")
const conversionTwo = document.getElementById("conversion-two")
const conversionThree = document.getElementById("conversion-three")

convertBtn.addEventListener("click", function() {
    conversionOne.textContent = `
    ${inputNumber.value} meters = ${(inputNumber.value * 3.281).toFixed(3)} feet || 
    ${inputNumber.value} feet = ${(inputNumber.value / 3.281).toFixed(3)} meters
    `
    conversionTwo.textContent = `
    ${inputNumber.value} liters = ${(inputNumber.value * 0.264).toFixed(3)} gallons || 
    ${inputNumber.value} gallons = ${(inputNumber.value / 0.264).toFixed(3)} liters
    `
    conversionThree.textContent = `
    ${inputNumber.value} kilos = ${(inputNumber.value * 2.204).toFixed(3)} pounds || 
    ${inputNumber.value} pounds = ${(inputNumber.value / 2.204).toFixed(3)} kilos
    `
})