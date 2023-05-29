// // import ColorThief from './color-thief-2.3.2/dist/color-thief.mjs'

// // get all card elements.
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

// function shuffleArray(arr) {
//     // Loop em todos os elementos
//     for (let i = arr.length - 1; i > 0; i--) {
//         // Escolhendo elemento aleatório
//         const j = Math.floor(Math.random() * (i + 1));
//         // Reposicionando elemento
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     // Retornando array com aleatoriedade
//     return arr;
//     // }
//     // $.getJSON(
//     //     'https://mapacultural.secult.ce.gov.br/api/agent/find', {
//     //         '@files': '(avatar):url',
//     //         'id': 'eq(36565)'
//     //     },
//     //     function(response) { console.log(response[0]['@files:avatar'].url); });

//     function refresh(area) {
//         var page = parseInt(Math.random() * (250 - 1));

//         console.log(page);
//         $.getJSON(
//             'https://mapacultural.secult.ce.gov.br/api/agent/find', {
//                 '@select': 'id, name, shortDescription, endereco',
//                 '@files': '(avatar):url',
//                 '@limit': 10,
//                 '@page': page,
//                 'term:area': 'LIKE(' + area + ')'
//             },
//             function(response) {
//                 console.log(response);
//                 var cont = `<img class="logo" src="./assets/Logo_01.png" alt="">
//             <label for="area">
//             <input type="text" id="area" name="lname">
//             <div class="submit"></div>
//         </label>`;
//                 var body = document.querySelector('body');

//                 response.forEach(function(element) {
//                     if (element.hasOwnProperty('@files:avatar')) {
//                         cont += `<div class="container">
//                         <div class="card-profile">
//                             <div class="card">
//                                 <img class="card-image" src="${element['@files:avatar'].url}">
//                                 <div class="card-text">
//                                     <span>${element.name}</span>
//                                     <span>${element.shortDescription}</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="container-column">
//                             <div class="container-card">
//                                 <div class="card-gallery"></div>
//                                 <div class="card-gallery"></div>
//                             </div>
//                             <div class="container-card">
//                                 <div class="card-gallery"></div>
//                                 <div class="card-gallery"></div>
//                             </div>
//                             <div class="container-card">
//                                 <div class="card-gallery"></div>
//                                 <div class="card-gallery"></div>
//                             </div>
//                         </div>
//                     </div>`;
//                         console.log(element['@files:avatar'].url);
//                     } else {
//                         console.log('não tem');
//                     }
//                 })
//                 body.innerHTML = cont;
//                 var contCard = document.querySelectorAll('.container-card');
//                 contCard.forEach(async(card) => {
//                         var num = Math.floor(Math.random() * (60 - 30)) + 30;
//                         var num2 = 100 - num;
//                         var nums = [num, num2];
//                         var nums2 = shuffleArray(nums);

//                         card.children[0].style.height = nums2[1] + '%';
//                         card.children[1].style.height = nums2[0] + '%';
//                     })
//                     // response.forEach(function(element) {
//                     //     var body = document.querySelector('body');
//                     //     console.log(element['@files.avatar'].url);
//                     //         body.innerHTML = `<div class="container">
//                     //         <div class="card-profile">
//                     //             <div class="card">
//                     //                 <img class="card-image" src="${element['@files.avatar'].url}">
//                     //                 <div class="card-text">
//                     //                     <span>${element.name}</span>
//                     //                     <span>${element.name}</span>
//                     //                 </div>
//                     //             </div>
//                     //         </div>
//                     //         <div class="container-column">
//                     //             <div class="container-card">
//                     //                 <div class="card-gallery"></div>
//                     //                 <div class="card-gallery"></div>
//                     //             </div>
//                     //             <div class="container-card">
//                     //                 <div class="card-gallery"></div>
//                     //                 <div class="card-gallery"></div>
//                     //             </div>
//                     //             <div class="container-card">
//                     //                 <div class="card-gallery"></div>
//                     //                 <div class="card-gallery"></div>
//                     //             </div>
//                     //         </div>
//                     //     </div>`;
//                     // })
//             });
//     }
let tag = document.querySelectorAll('.tag');
console.log(tag);

function clicar() {
    for (let i = 0; i < tag.length; i++) {
        if (tag[i].addEventListener('click', function() {
                window.location = './home.html?area=' + tag[i].innerHTML + '&local=';
                console.log(tag[i].innerHTML);
            })) {}

    }
}
clicar();