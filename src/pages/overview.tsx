import { Container, makeStyles, Paper, Theme } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 36
    },
    paper: {
        padding: 45,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    paperContent: {
        lineHeight: 2,
        wordSpacing: 2,
        textAlign: 'center'
    }
  })
)


const Overview: React.FC = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="md">
            <h1 className={classes.title} >Face Based Retrival of Images</h1>
            <Paper className={classes.paper} elevation={3}>
                <h1>Overview</h1>
                <p className={classes.paperContent}>
                The purpose of the project (Effective Face-Based Retrieval of Archival Photos) is to give valuable and useful tools for curators and clients to look after better, oversee and safeguard documented photographic assortments. This is by applying state-of-the-art face detection and recognition techniques to conduct retrieval on an archival photographic collection of National Archives of Australia. In this project, clients can choose or enter a name to recover all the photographs containing this individual from the assortment of 28,912 photographs, without the need of any content explanation. The tools that we provide for the curators are a web application and mobile application that allows the user to upload an image or input the name of a person. Based on the input, the system generates all the images of the person and shows analytical results such as – who the person has taken the most pictures with?
                </p>
            </Paper>
        </Container>
    )
}

export default Overview