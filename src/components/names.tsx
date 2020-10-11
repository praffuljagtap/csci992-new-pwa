import React from 'react'
import { makeStyles, Theme, Container, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom'

import Person from '../interfaces/person'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        fontSize: 25
    },
    buttons: {
        width: '100%'
    }
  })
)

type Props = {
    people: Person[] | null
    getImages: (person: Person) => void
}

const NamesComponent: React.FC<Props> = ({ people, getImages }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="md">
            <h1 className={classes.title} >Names</h1>
            {people === null ? (
                <p>No Names Found</p>
            ) : (
                <Grid container spacing={1}>
                    {people.map((person, index) => {
                        return (
                            <Grid key={index} container item lg={3} xl={3} sm={4} xs={12} >
                                <Zoom in={true}>
                                    <Button className={classes.buttons} onClick={() => {
                                        getImages(person)
                                    }} variant="outlined">
                                        {person.name}
                                    </Button>
                                </Zoom>
                            </Grid>
                        )
                    })}
                </Grid>
            )}
            {/* <p>No Images Available</p> */}
        </Container>
    )
}

export default NamesComponent