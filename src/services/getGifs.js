const apiKey = 'tl2xuXB5kCBdfVNVBb7zp5K8dHQ7Tz5o'


export default function getGifs({ keyword = 'morty' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=10&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            //guardamos datos obtenidos de objetos de la API de gifs
            if (Array.isArray(data)) {
                const gifs = data.map(image =>{
                const { images, title, id } = image
                const { url } = image.images.downsized_medium
                return { title, id, url }
                })
                //array con 10 url de imagenes.Lo configuramos en la web de la API así.
                return gifs
            }
        })
}