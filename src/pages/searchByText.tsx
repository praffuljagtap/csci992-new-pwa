import React, { useState } from 'react'
import { Container, makeStyles, Theme } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'


import Person from '../interfaces/person'
import ImagesComponent from '../components/images'
import ImageInterface from '../interfaces/image'

import { getPeople, getImagesOfAPerson } from '../services'


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
    const [ names, setNames ] = useState<Person[]>([]);
    const [ selectedPerson, setSelectedPerson ] = useState<Person | null>(null)
    const [ images, setImages ] = useState<ImageInterface[] | null>(null)

    const getNames = () => {
        // fetch names
        const fetchedNames: Person[] = getPeople()
        if (names.length === 0) {
            setNames(fetchedNames)
        }
    }

    getNames() // Called by default

    const getImages = () => {
        //fetch images of that specific person
        if (selectedPerson !== null) {
            getImagesOfAPerson(selectedPerson).then(response => {
                setImages(response)
            })
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
                    // onMouseOver={getNames}
                    // onClick = {getNames}
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