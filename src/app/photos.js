class Photos {
    async getPhotos() {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10') //URL objeto de fotos(json placeholder)
        const photos = await res.json(); //Convierte de PROMISE a JSON
        return photos;
    }
}

export default Photos;