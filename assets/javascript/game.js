let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let counter = document.querySelector("#score")
console.log("is this working")
teamoneShootButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let newCounterValue = Number(counter) + 1;
    if (Math.random() > .5) {

    }
    counter = newCounterValue;


})
console.log(Math.random());

let teamoneNumshots = document.querySelector("teamone-numshots");

teamoneNumshots.addEventListener("click", function () {
    console.log("+ button clicked");
    let newCounterValue = Number(counter) + 1;
    if (Math.random() > .5) {
    }
    counter = newCounterValue;

})


//teamtwoShootButton.addEventListener("click", function () {
   // console.log("+ button clicked");
   // let newCounterValue = Number(counter) + 1;
   // if (Math.random() > .5) {

    //})
    //counter = newCounterValue;
