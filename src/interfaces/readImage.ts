import PersonWithImage from "./personWithImage";

interface ReadImageInterface {
    anyFacesDetected: boolean
    anyFacesInDatabase?: boolean
    result?: PersonWithImage[]
}

export default ReadImageInterface