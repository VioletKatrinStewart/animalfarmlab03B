console.log('hello')
const catImage = document.getElementById('cat-image');
const catAudio = document.getElementById('cat-audio');
const dogImage = document.getElementById('dog-image');
const dogAudio = document.getElementById('dog-audio');
const horseImage = document.getElementById('horse-image');
const horseAudio = document.getElementById('horse-audio');

catImage.addEventListener('click', ()=>{
    console.log('we made it');
    catAudio.play();
});

dogImage.addEventListener('click', ()=>{
    dogAudio.play();
});

horseImage.addEventListener('click', ()=>{   
    horseAudio.play();
});
