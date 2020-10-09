import React, { useState } from 'react'
import { Container, makeStyles, Theme } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


import Person from '../interfaces/person';
import ImagesComponent from '../components/images';
import ImageInterface from '../interfaces/image';


const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        fontSize: 30
    },
    search: {
        marginTop: 20
    },
    button: {
        margin: theme.spacing(1),
        width: 200,
        marginTop:30,
        padding: 8
    },
  })
)

const SearchByText: React.FC = () => {
    const classes = useStyles();
    const [ names, setNames ] = useState(() => {
        // fetch names
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
    });
    const [ selectedPerson, setSelectedPerson ] = useState<Person | null>(null)
    const [ images, setImages ] = useState<ImageInterface[] | null>(null)

    const getImages = () => {
        //fetch images of that specific person
        if (selectedPerson != null) {
            const defaultImages: ImageInterface[] = [
                { people: ['Person 1', 'Person2'], link: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fdragonball-goku-kakarot-choose-custom-outfit-campaign-news-001.jpg?q=75&w=800&cbr=1&fit=max' },
                { people: ['Person 1', 'Person2'], link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeVZBy5Uf70-tHpb6g-o5uPjlJT-yCDZHPOQ&usqp=CAU' },
                { people: ['Person 1', 'Person2'], link: 'https://cdn.vox-cdn.com/thumbor/UwcwFrpCeJa2oyQ42B8quvL-Ajk=/0x0:1200x675/1200x800/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/60470873/Di4EMHCUwAA9q6L.0.jpg' },
                { people: ['Person 1', 'Person2'], link: 'https://www.gematsu.com/wp-content/uploads/2020/01/DB-FighterZ-UI-Goku_01-17-20.jpg' },
                { people: ['Person 1', 'Person2'], link: 'https://cdn.hiptoro.com/wp-content/uploads/2020/03/Dragon-Ball-Super-Chapter-59-Release-Date-Spoilers-Goku-uses-Ultra-Instinct-Sign-to-defeat-Moro-1152x653.jpg' },
                { people: ['Person 1', 'Person2'], link: 'https://masculineepic.com/wp-content/uploads/2020/07/Goku-vs-Jiren.jpg' },
                { people: ['Person 1', 'Person2'], link: 'https://static2.thegamerimages.com/wordpress/wp-content/uploads/2018/10/goku-ssj2.jpg' },
            ]
            setImages(defaultImages)
        } else {
            // Display Error Message
        }
    }


    return (
        <Container maxWidth="xl">
            <Container className={classes.container} maxWidth="md">
                <h1 className={classes.title} >Search By Text</h1>
                <Autocomplete
                    id="combo-box-demo"
                    className={classes.search}
                    options={names}
                    fullWidth
                    onChange = {(event, person) => {
                        if (person != null) {
                            setSelectedPerson(person)
                        }
                    }}
                    getOptionLabel={(person: Person) => person.name}
                    renderInput={(params) => <TextField {...params} label="Enter the Name of the Person" variant="outlined" />}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={getImages}
                    startIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </Container>
            <ImagesComponent images={images} />
        </Container>
    )
}

export default SearchByText