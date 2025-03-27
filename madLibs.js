const ghoul = 'ghost';
const eerie ='haunted';
const gleaming = 'glowing eyes';
const mathResults = 10-7;
const creepyFeeling ='Spooky';
const person = {name: 'Amira', age: 37, background: 'to enjoy a haunted house on Halloween'};
let weather ='stormy'
let bools = weather.includes('bright');

const story = `On a ${bools} night, ${person.name} ventured into the ${eerie} house. The creaking walls seemed to whisper, sending chills down her spine. Suddenly, a ${ghoul} appeared, its ${gleaming} piercing through the darkness. Her heart raced as it floated silently towards her. "Did you know 10-7 equals ${mathResults}? ${creepyFeeling}, right?" What a weird question to ask, she thought. The ghost proceeded to ask her, "how old are you, little girl, and why are you here?" She stated, "${person.age} and I am here ${person.background}."`

document.getElementById("madlibs-output").textContent = story;
console.log(story);
