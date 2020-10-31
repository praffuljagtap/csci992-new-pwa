import React, { useState } from 'react'
import { Container, makeStyles, Theme } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'


import ImagesComponent from '../components/images'
import ImageInterface from '../interfaces/image'

import { readImage } from '../services'


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
    button: {
        margin: theme.spacing(1),
        width: 200,
        marginTop:30,
        padding: 8
    },
  })
)

const SearchByImage: React.FC = () => {
    const classes = useStyles();
    const uploadRef = React.createRef<HTMLInputElement>()
    const [ images, setImages ] = useState<ImageInterface[] | null>(null)

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            // const data = URL.createObjectURL(img)
            let reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onloadend = () => {
                let base64Image = reader.result
                readImage(base64Image).then(response => {
                    console.log(response)
                })
            }
        }
    }

    const clickUpload = () => {
        uploadRef.current?.click()
    }

    return (
        <Container maxWidth="xl">
            <Container className={classes.container} maxWidth="md">
                <h1 className={classes.title} >Search By Image</h1>
    
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={clickUpload}
                    startIcon={<SearchIcon />}
                >
                    Upload Image
                </Button>
                <input
                    type="file"
                    style={{ display: "none" }}
                    ref={uploadRef}
                    onChange={uploadImage}
                />
            </Container>
            <ImagesComponent images={images} />
        </Container>
    )
}

export default SearchByImage