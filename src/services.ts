import ImageInterface from "./interfaces/image"
import Person from "./interfaces/person"
import ReadImageInterface from "./interfaces/readImage"

const BASE_URL: string = 'http://localhost:5000/'

export const getImagesOfAPerson = async (person: Person) => {
    // const defaultImages: ImageInterface[] = [
    //     { link: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fdragonball-goku-kakarot-choose-custom-outfit-campaign-news-001.jpg?q=75&w=800&cbr=1&fit=max' },
    //     { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeVZBy5Uf70-tHpb6g-o5uPjlJT-yCDZHPOQ&usqp=CAU' },
    //     { link: 'https://cdn.vox-cdn.com/thumbor/UwcwFrpCeJa2oyQ42B8quvL-Ajk=/0x0:1200x675/1200x800/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/60470873/Di4EMHCUwAA9q6L.0.jpg' },
    //     { link: 'https://www.gematsu.com/wp-content/uploads/2020/01/DB-FighterZ-UI-Goku_01-17-20.jpg' },
    //     { link: 'https://cdn.hiptoro.com/wp-content/uploads/2020/03/Dragon-Ball-Super-Chapter-59-Release-Date-Spoilers-Goku-uses-Ultra-Instinct-Sign-to-defeat-Moro-1152x653.jpg' },
    //     { link: 'https://masculineepic.com/wp-content/uploads/2020/07/Goku-vs-Jiren.jpg' },
    //     { link: 'https://static2.thegamerimages.com/wordpress/wp-content/uploads/2018/10/goku-ssj2.jpg' },
    // ]
    return fetch(BASE_URL+'getImages/'+person.name)
        .then(response => response.json())
        .then((images: ImageInterface[]) => {
            images.map(image => {
                image.link = BASE_URL + image.link
            })
            return images
        })
}

export const getAllNames = async () => {
    return fetch(BASE_URL+'fetchNames')
        .then(response => response.json())
        .then((people: Person[]) => {
            return people
        })
}

export const getAlphabets = () => {
    const Alphabets: string[] = []
    for (var i = 0; i < 26; i ++) {
        Alphabets.push(String.fromCharCode(65+i))
    }
    return Alphabets
}

export const getNameByLetter = async (letter: string | null) => {
    return fetch(BASE_URL+'getNamesByLetter/'+letter)
        .then(response => response.json())
        .then((people: Person[]) => {
            return people
        })
}

export const getImages = async (person: Person) => {
    return fetch(BASE_URL+'getImages/'+person.name)
        .then(response => response.json())
        .then((image_names: string[]) => {
            return image_names
        })
}

export const readImage = (image: string | ArrayBuffer | null, name: string) => {
    return fetch(BASE_URL+'readImage', {
        method: 'POST',
        body: JSON.stringify({
            data: image,
            name: name
        })
    }).then(response => response.json())
    .then((imagesRead: ReadImageInterface) => {
        imagesRead.result?.map(each => {
            each.images.map(image => {
                image.link = BASE_URL + image.link
            })
        })
        return imagesRead
    })
}