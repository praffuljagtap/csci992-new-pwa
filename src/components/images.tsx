import React from 'react'
import { makeStyles, Theme, Container, Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom'

import ImageInterface from '../interfaces/image'

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
    paper: {
        width: '100%',
        maxHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover': {
            scale: 1.02,
            opacity: 0.8,
            cursor: 'pointer'
        }
    },
    images: {
        width: '100%',
        objectFit: 'cover'
    }
  })
)

type Props = {
    images: ImageInterface[] | null
}

const ImagesComponent: React.FC<Props> = ({ images }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="md">
            <h1 className={classes.title} >Result</h1>
            {images === null ? (
                <p>No Images Available</p>
            ) : (
                <Grid container spacing={1}>
                    {images.map((image, index) => {
                        return (
                            <Grid key={index} container item lg={4} xl={4} sm={4} xs={12} >
                                <Zoom in={true}>
                                    <Paper className={classes.paper} elevation={4}>
                                        <img className={classes.images} alt={image.people.join(', ')} src={image.link} />
                                    </Paper>
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

export default ImagesComponent