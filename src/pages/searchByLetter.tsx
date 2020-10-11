import React, { useState } from 'react'
import { Container, makeStyles, Theme } from '@material-ui/core'
import ImagesComponent from '../components/images'
import ImageInterface from '../interfaces/image'

import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { getAlphabets, getImagesOfAPerson, getNameByLetter } from '../services'
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
    alphabetsContainer: {
        maxWidth: '100vw',
        overflowX: 'auto',
        marginTop: 30
    },
    alphabets: {
        fontSize: 16,
        fontWeight: 500,
        paddingLeft: 20,
        paddingRight: 20
    }
  })
)

const SearchByLetter: React.FC = () => {
    const classes = useStyles();
    // all Alphabets
    const alphabets = getAlphabets()
    
    const [ names, setNames ] = useState<Person[]>([]);
    const [ images, setImages ] = useState<ImageInterface[] | null>(null)

    const [ selectedLetter, selectLetter ] = useState<string | null>(null)
    const handleSelectAlphabet = (event: React.MouseEvent<HTMLElement>, newLetter: string | null) => {
        selectLetter(newLetter);
        getNameByLetter(newLetter).then(fetchedNames => {
            setNames(fetchedNames);
        })
    };

    const getImages = (person: Person) => {
        getImagesOfAPerson(person).then(fetchedImages => {
            setImages(fetchedImages)
        })
    }

    
    return (
        <Container maxWidth="xl">
            <Container className={classes.container} maxWidth="md">
                <h1 className={classes.title} >Search By Letter</h1>
                <p className={classes.message} >Please select the Initial Letter of the Person whom you want to search.</p>

                {/* Select Alphabets */}
                <ToggleButtonGroup
                    value={selectedLetter}
                    exclusive
                    className={classes.alphabetsContainer}
                    onChange={handleSelectAlphabet}
                    aria-label="Selected Alphabet"
                    >
                        {alphabets.map((alphabet, index) => {
                            return (
                                <ToggleButton className={classes.alphabets} key={index} value={alphabet} aria-label={alphabet}>
                                    {alphabet}
                                </ToggleButton>
                            )
                        })}
                </ToggleButtonGroup>
                {/* Select Alphabets End*/}

                {/* Select Name of the Person */}
                <NamesComponent people={names} getImages={getImages} />
                {/* Select Name of the Person End */}
            </Container>
            <ImagesComponent images={images} />
        </Container>
    )
}

export default SearchByLetter