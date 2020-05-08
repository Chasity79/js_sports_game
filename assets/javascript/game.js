let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals");
let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");
teamoneShootButton.addEventListener("click", function () {
    console.log("+ button clicked");

    teamoneNumshots.innerHTML = Number(teamoneNumshots.innerHTML) + 1;


    if (Math.random() > .5) {
        teamoneNumgoals.innerHTML = Number(teamoneNumgoals.innerHTML) + 1;
    }


})
console.log(Math.random());

teamtwoShootButton.addEventListener("click", function () {
    console.log("+ button clicked");

    teamtwoNumshots.innerHTML = Number(teamtwoNumshots.innerHTML) + 1;

    if (Math.random() > .5) {
        teamtwoNumgoals.innerHTML = Number(teamtwoNumgoals.innerHTML) + 1;
    }

})
console.log(Math.random());

resetButton.addEventListener("click", function () {
    console.log(" botton clicked");
    teamoneNumshots.innerHTML = 0
    teamtwoNumshots.innerHTML = 0
    teamoneNumgoals.innerHTML = 0
    teamtwoNumgoals.innerHTML = 0
    numResets.innerHTML = Number(numResets.innerHTML) + 1;

})



