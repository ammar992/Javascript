const Details = [
    {
        id:1,
        name:"David peter",
        job:"Web designer",
        image:"https://p.kindpng.com/picc/s/160-1600378_transparent-happy-person-png-happy-man-face-png.png",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        id:2,
        name:"Kevin peter",
        job:"Backend developer",
        image:"https://w7.pngwing.com/pngs/978/367/png-transparent-thought-person-graphy-confused-miscellaneous-arm-idea-thumbnail.png",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
        id:3,
        name:"David Jordge",
        job:"Blockchain developer",
        image:"https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
]



const name = document.querySelector('.name');
const image = document.querySelector('.img');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const random = document.querySelector('.random');



let currentElem = 0;


window.addEventListener("DOMContentLoaded",()=>{
    showPerson(currentElem)
})

const showPerson = (person)=>{
    let item = Details[person];
    image.src = item.image;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text

}

left.addEventListener('click',()=>{
    currentElem--;
    if(currentElem<0){
        currentElem = Details.length-1;
    }
    showPerson(currentElem);
})


right.addEventListener('click',()=>{
    currentElem++;
    if(currentElem>Details.length-1){
        currentElem = 0;
    }
    showPerson(currentElem);

})

random.addEventListener('click',()=>{
    showPerson(getRandomNumber());
})


function getRandomNumber(){
   return  Math.floor(Math.random()*Details.length)
}

// showPerson(getRandomNumber);

