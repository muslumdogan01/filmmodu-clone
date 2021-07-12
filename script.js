let filmTürleri = document.querySelector('#filmTürleri');
let showFilmList = document.querySelector('#showFilmList');
let navbarMenu = document.querySelector('.navbar_menü');
let closeButton = document.querySelector('#closeButton');


//  NavBar Alanı

let filmList = ["4K","Aile","Aksiyon","Animasyon","Belgesel","bilim-kurgu",
"Dram","Fantastik","Gerilim","Gizem","Hint Filmleri" ,"Hint Filmleri","Kısa film","Komedi","Korku","Kült Filmleri"
, "Macera", "Müzik","Romantik","Savaş","Stand Up","Stand Up", "Oscar Ödüllü Fimler","Suç",
"Tarih","Tavsiye Fimler","Tv Film","Vahşi Batı"
];



filmList.forEach(function(films){
    
    document.querySelector('#filmTürleri').innerHTML += `<li class='liStyle'><a>${films}</a></li>`;
    filmTürleri.childNodes
})
showFilmList.addEventListener('click', function(){
    navbarMenu.classList.toggle('show');
})
// closeButton.addEventListener('click',function(){
//     navbarMenu.classList.toggle('show');
// })

//  NavBar Alanı Sonu


// CONTENT SLİDER ALANI

let models=[
    {
        name: 'Planet',
        description:'David Attenborough: A life on Our',
        imdb:'İMDB:6.4',
        pixel:'1080p',
        img:'/img/bmw.jpg'

    },
    {
        name: 'Enola Holmes',
        description:'David Attenborough: A life on Our',
        imdb:'İMDB:7.4',
        pixel:'750p',
        img:'/img/honda.jpg'
    },
    {
        name: 'The Tomorrow War',
        description:'Geleceğin Savaşı',
        imdb:'3.4',
        pixel:'1080p',
        img:'img/mazda.jpg'
    },
    {
        name: 'Enola Holmes',
        description:'TheTomorrowWar',
        imdb:'8.4',
        pixel:'750p',
        img:'img/skoda.jpg'
    },
    {
        name: 'The Ice Road',
        description:'The Ice Road',
        imdb:'9.8',
        pixel:'1080p',
        img:'img/volvo.jpg'
    },
    {
        name: 'Army of the Dead',
        description:'Ölüler Ordusu',
        imdb:'7.4',
        pixel:'750p',
        img:'img/bmw.jpg'
    },
    {
        name: 'Nobody',
        description:'Önemsiz Biri',
        imdb:'2.4',
        pixel:'1080p',
        img:'img/mazda.jpg'
    },
]

let index=0;
let index2=0;
let slaytCount= models.length;
let slaytCount2= models.length;



// SLİDER LEFT

showSlide(index)

function showSlide(i){

    index = i;

    if(i<0){
        index = slaytCount -1;
    }
    if(i >= slaytCount){
        index=0;
    }

    document.querySelector('.content_slider_left_name').textContent = models[index].name;
    document.querySelector('.content_slider_left_name2').textContent=models[index].description;
    document.querySelector('.content_slider_left_body .imdb').textContent=models[index].imdb;
    document.querySelector('.content_slider_left_body .pixel').textContent=models[index].pixel;
    document.querySelector('.content_slider_left_img').setAttribute('src',models[index].img);
    
}





// document.querySelector('.card-link').setAttribute('href',models[index].link);

document.querySelector('.fa-chevron-left').addEventListener('click', function(){
    index--;
    showSlide(index);
    console.log(index);
})

//SLİDER RİGHT

function showSlide(i){

    index2 = i;

    if(i<0){
        index2 = slaytCount2 -1;
    }
    if(i >= slaytCount){
        index2=0;
    }
    document.querySelector('.content_slider_right_name').textContent = models[index2].name;
document.querySelector('.content_slider_right_name2').textContent=models[index2].description;
document.querySelector('.content_slider_right_body .imdb').textContent=models[index2].imdb;
document.querySelector('.content_slider_right_body .pixel').textContent=models[index2].pixel;
document.querySelector('.content_slider_right_img').setAttribute('src',models[index2].img);

}


document.querySelector('.fa-chevron-right').addEventListener('click', function(){
    index2++;
    showSlide(index2);
    console.log(index2);
})


// CONTENT SLİDER ALANI SONU