import React from 'react'
import { makeStyles, Theme, Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

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
  })
)

type Props = {
    images: ImageInterface[] | null
}

const ImagesComponent: React.FC<Props> = ({ images }) => {
    console.log(images)
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
                                <img src={image.link} />
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