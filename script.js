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
        imdb:'6.4'
    },
    {
        name: 'Enola Holmes',
        description:'David Attenborough: A life on Our',
        imdb:'7.4'
    },
    {
        name: 'The Tomorrow War',
        description:'Geleceğin Savaşı',
        imdb:'3.4'
    },
    {
        name: 'Enola Holmes',
        description:'TheTomorrowWar',
        imdb:'8.4'
    },
    {
        name: 'The Ice Road',
        description:'The Ice Road',
        imdb:'9.8'
    },
    {
        name: 'Army of the Dead',
        description:'Ölüler Ordusu',
        imdb:'7.4'
    },
    {
        name: 'Nobody',
        description:'Önemsiz Biri',
        imdb:'2.4'
    },
]





document.querySelector('.card-title').textContent = models[index].name;

document.querySelector('.card-img-top').setAttribute('src',models[index].Image)

document.querySelector('.card-link').setAttribute('href',models[index].link);



// CONTENT SLİDER ALANI SONU