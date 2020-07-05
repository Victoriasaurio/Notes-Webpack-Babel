import Photos from './photos';
import './index.css';

const photos = new Photos();

//Obteniendo el objeto de fotos
async function main() {
    console.log(await photos.getPhotos());
}

//Código de JavaScript 2019-Probar para BABEL
function isValidJSON(text) {
    try {
        JSON.parse(text); //Si es JSON retorna un TRUE
        return true;
    } catch {
        return false;
    }
}

document.write(isValidJSON('test'));
main();