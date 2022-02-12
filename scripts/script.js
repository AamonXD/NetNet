import {dataPopu, dataReco, dataSeries} from './data.js';


function load () {
    document.addEventListener('DOMContentLoaded', (e) => {
        e.preventDefault(mostrarImagenes);
    });
};

function mostrarImagenes (k, arreglo, genero) {
    let fragment = document.createDocumentFragment();
    let contenedor = document.getElementById(k);
    arreglo.forEach((element,index)=>{
        const recipeImage = document.createElement('div');
        const image = document.createElement('img');
        image.classList.add('imgs');
        recipeImage.setAttribute('id', `${genero}-${index}`);
        recipeImage.classList.add('img-peliculas');
        image.setAttribute('src',element.image);
        recipeImage.appendChild(image);
        fragment.appendChild(recipeImage);
        contenedor.appendChild(fragment);
        console.log(fragment);
    });
};

mostrarImagenes('insertarPopulares', dataPopu, 'populares');
mostrarImagenes('insertarRecomendaciones', dataReco, 'recomendaciones');
mostrarImagenes('series', dataSeries, 'series');

