import ImageInterface from "./interfaces/image"
import Person from "./interfaces/person"

export const getImagesOfAPerson = async (person: Person) => {
    const defaultImages: ImageInterface[] = [
        { people: ['Person 1', 'Person2'], link: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fdragonball-goku-kakarot-choose-custom-outfit-campaign-news-001.jpg?q=75&w=800&cbr=1&fit=max' },
        { people: ['Person 1', 'Person2'], link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeVZBy5Uf70-tHpb6g-o5uPjlJT-yCDZHPOQ&usqp=CAU' },
        { people: ['Person 1', 'Person2'], link: 'https://cdn.vox-cdn.com/thumbor/UwcwFrpCeJa2oyQ42B8quvL-Ajk=/0x0:1200x675/1200x800/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/60470873/Di4EMHCUwAA9q6L.0.jpg' },
        { people: ['Person 1', 'Person2'], link: 'https://www.gematsu.com/wp-content/uploads/2020/01/DB-FighterZ-UI-Goku_01-17-20.jpg' },
        { people: ['Person 1', 'Person2'], link: 'https://cdn.hiptoro.com/wp-content/uploads/2020/03/Dragon-Ball-Super-Chapter-59-Release-Date-Spoilers-Goku-uses-Ultra-Instinct-Sign-to-defeat-Moro-1152x653.jpg' },
        { people: ['Person 1', 'Person2'], link: 'https://masculineepic.com/wp-content/uploads/2020/07/Goku-vs-Jiren.jpg' },
        { people: ['Person 1', 'Person2'], link: 'https://static2.thegamerimages.com/wordpress/wp-content/uploads/2018/10/goku-ssj2.jpg' },
    ]
    return await defaultImages
}

export const getPeople = () => {
    const fetchedNames: Person[] = [
        { name: 'Person 1' },
        { name: 'Person 2' },
        { name: 'Person 3' },
        { name: 'Person 4' },
        { name: 'Person 5' },
        { name: 'Person 6' },
        { name: 'Person 7' },
        { name: 'Person 8' },
        { name: 'Person 9' },
        { name: 'Person 10' },
    ]
    return fetchedNames
}

export const getAlphabets = () => {
    const Alphabets: string[] = []
    for (var i = 0; i < 26; i ++) {
        Alphabets.push(String.fromCharCode(65+i))
    }
    return Alphabets
}

export const getNameByLetter = async (letter: string | null) => {
    const fetchedNames: Person[] = [
        { name: 'Person 1' },
        { name: 'Person 2' },
        { name: 'Person 3' },
        { name: 'Person 4' },
        { name: 'Person 5' },
        { name: 'Person 6' },
        { name: 'Person 7' },
        { name: 'Person 8' },
        { name: 'Person 9' },
        { name: 'Person 10' },
    ]
    return fetchedNames
}

export const getAllNames = async () => {
    const fetchedNames: Person[] = [
        { name: 'Person 1' },
        { name: 'Person 2' },
        { name: 'Person 3' },
        { name: 'Person 4' },
        { name: 'Person 5' },
        { name: 'Person 6' },
        { name: 'Person 7' },
        { name: 'Person 8' },
        { name: 'Person 9' },
        { name: 'Person 10' },
    ]
    return fetchedNames
}