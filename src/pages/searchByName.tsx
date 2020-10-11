import React, { useEffect, useState } from 'react'
import { Container, makeStyles, Theme } from '@material-ui/core'
import ImagesComponent from '../components/images'
import ImageInterface from '../interfaces/image'

import { getAllNames, getImagesOfAPerson } from '../services'
import Person from '../interfaces/person'
import NamesComponent from '../components/names'


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
    message: {
        fontSize: 14,
        fontWeight: 200,
        textAlign: 'center'
    },
  })
)

const SearchByName: React.FC = () => {
    const classes = useStyles();
    
    const [ names, setNames ] = useState<Person[]>([]);
    const [ images, setImages ] = useState<ImageInterface[] | null>(null)

    const getNames = () => {
        getAllNames().then(fetchedNames => {
            if (names.length === 0) {
                setNames(fetchedNames);
            }
        })
    }

    useEffect(() => {
        getNames()
    }, [])

    // getNames() // Call by default

    const getImages = (person: Person) => {
        getImagesOfAPerson(person).then(fetchedImages => {
            setImages(fetchedImages)
        })
    }
    
    return (
        <Container maxWidth="xl">
            <Container className={classes.container} maxWidth="md">
                <h1 className={classes.title} >Search By Name</h1>
                <p className={classes.message} >Please select the Name of the Person whom you want to search.</p>
                {/* Select Name of the Person */}
                <NamesComponent people={names} getImages={getImages} />
                {/* Select Name of the Person End */}
            </Container>
            <ImagesComponent images={images} />
        </Container>
    )
}

export default SearchByName