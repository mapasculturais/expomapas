// import ColorThief from './color-thief-2.3.2/dist/color-thief.mjs'

// get all card elements.
// const cards = document.querySelectorAll(".card");

// // create colorthief instance
// const colorThief = new ColorThief();

// cards.forEach(async(card) => {
//     const image = card.children[0];
//     const text = card.children[1];

//     // get palette color from image
//     const palette = await extractColor(image);

//     const primary = palette[0].join(",");
//     const secondary = palette[1].join(",");

//     // change color
//     card.style.background = `rgb(${primary})`;
//     text.style.color = `rgb(${secondary})`;
// });

// // async function wrapper
// function extractColor(image) {
//     // image.crossOrigin = 'Anonymous';
//     return new Promise((resolve) => {
//         const getPalette = () => {
//             return colorThief.getPalette(image, 4);
//         };

//         // as said in the colorthief documentation, 
//         // we have to wait until the image is fully loaded.

//         if (image.complete) {
//             return resolve(getPalette());
//         }

//         image.onload = () => {
//             resolve(getPalette());
//         };
//     });
// }

// var contCard = document.querySelectorAll('.container-card');

// contCard.forEach(async(card) => {
//     var num = Math.floor(Math.random() * (60 - 30)) + 30;
//     var num2 = 100 - num;
//     var nums = [num, num2];
//     var nums2 = shuffleArray(nums);

//     card.children[0].style.height = nums2[1] + '%';
//     card.children[1].style.height = nums2[0] + '%';
// })

function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}
// $.getJSON(
//     'https://mapacultural.secult.ce.gov.br/api/agent/find', {
//         '@files': '(avatar):url',
//         'id': 'eq(36565)'
//     },
//     function(response) { console.log(response[0]['@files:avatar'].url); });

function refresh(area) {
    var page = parseInt(Math.random() * (250 - 1));
    var tag = (decodeURIComponent(area[1]));

    if (area[0] == "area") {
        $.getJSON(
            'https://mapacultural.secult.ce.gov.br/api/agent/find', {
                '@select': 'id, name, shortDescription, endereco, location',
                '@files': '(avatar, gallery):url',
                '@limit': 10,
                '@page': page,
                'term:area': 'LIKE(' + tag + ')'
            },
            function(response) {
                render(response);
            });
    }
    if (area[0] == "name") {
        var nome = area[1].replace("+", " ");
        console.log(nome);
        $.getJSON(
            'https://mapacultural.secult.ce.gov.br/api/agent/find', {
                '@select': 'id, name, shortDescription, endereco, location',
                '@files': '(avatar, gallery):url',
                '@limit': 10,
                'term:tag': 'LIKE(%' + nome + '%)',
                'shortDescription': 'ILIKE(%' + area[3] + '%)'
            },
            function(response) {
                render(response);
            });

    }

}

function render(response) {
    console.log(response);
    var cont = `<img class="logo" src="./assets/Logo_01.png" alt="">
            <form action="./home.html">
            <label for="area">
            <input type="text" id="area" name="name">
            <input type="submit" class="submit" value="">
        </label>
        <label for="local">
            <input type="text" id="local" name="local">
            <input type="submit" class="submit" value="">
        </label> </form>`;
    var body = document.querySelector('body');

    response.forEach(function(element) {
        if (element.hasOwnProperty('@files:avatar') && element.hasOwnProperty('@files:avatar')) {
            if (Array.isArray(element['@files:gallery']) == true && element['@files:gallery'].length > 5) {
                cont += `<div class="container">
                        <div class="card-profile">
                            <div class="card">
                                <img class="card-image" src="${element['@files:avatar'].url}">
                                <div class="card-text">
                                    <span>${element.name}</span>
                                    <span>${element.shortDescription}</span>
                                    <a href="https://mapacultural.secult.ce.gov.br/agente/${element.id}/" target="_blank">SAIBA MAIS</a>
                                </div>
                            </div>
                        </div>
                        <div class="container-column">
                            <div class="container-card">
                                <div class="card-gallery" style="background-image: url(${element['@files:gallery'][0].url});"></div>
                                <div class="card-gallery" style="background-image: url(${element['@files:gallery'][1].url});"></div>
                            </div>
                            <div class="container-card">
                                <div class="card-gallery" style="background-image: url(${element['@files:gallery'][2].url});"></div>
                                <div class="card-gallery" style="background-image: url(${element['@files:gallery'][3].url});"></div>
                            </div>
                            <div class="container-card">
                                <div class="card-gallery" style="background-image: url(${element['@files:gallery'][4].url});"></div>
                                <div class="card-gallery" style="background-image: url(${element['@files:gallery'][5].url});"></div>
                            </div>
                        </div>
                    </div>`;
                console.log(element['@files:avatar'].url);
                console.log(element['@files:gallery']);
            } else {
                console.log('nao tem msm');
            }

        } else {
            console.log('não tem');
        }
    })
    body.innerHTML = cont;
    var contCard = document.querySelectorAll('.container-card');
    contCard.forEach(async(card) => {
        var num = Math.floor(Math.random() * (60 - 30)) + 30;
        var num2 = 100 - num;
        var nums = [num, num2];
        var nums2 = shuffleArray(nums);

        card.children[0].style.height = nums2[1] + '%';
        card.children[1].style.height = nums2[0] + '%';
    })

}
const queryString = window.location.search;
// var tag = (decodeURIComponent(queryString.split("=")[1]));
var tag = (queryString.split(/[\&=]+/));

tag[0] = tag[0].replace('?', '');
tag[0] = tag[0].replace('l', '')
console.log(tag)
refresh(tag);