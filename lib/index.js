"use strict";

require("fslightbox");

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};
/* import{ suma,saludo } from './operaciones';
import Swal from 'sweetalert2';

document.write(`<h2>${suma(1,2)}</h2>`);
document.write(`<h2>${suma(10,2)}</h2>`);
console.log(suma(1,2));
console.log(suma(10,2));

console.log(saludo);

Swal.fire({
  title: 'Diana',
  text: 'Modal with a custom image.',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
}) */

/* import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component()); */