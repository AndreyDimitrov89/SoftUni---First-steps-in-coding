function fishTank(input) {
let lenght = Number(input[0]);
let width = Number (input[1]);
let height = Number(input[2]);
let precenTaken = Number(input[3]);

let volume = lenght * width * height;
let volumeInL = volume / 1000;
let volumeTaken = (precenTaken / 100) * volumeInL;
let volumeFree = volumeInL - volumeTaken;

console.log(volumeFree);
}
fishTank(["85", "75", "47", "17"]);