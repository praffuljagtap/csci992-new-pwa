import RouteInterface from "./interfaces/route"

const routes: RouteInterface[] = [
    { key: 0, link: 'overview', name: 'Overview' },
    { key: 1, link: 'search_by_text', name: 'Text' },
    { key: 2, link: 'search_by_letter', name: 'Letter' },
    { key: 3, link: 'search_by_image', name: 'Image' },
    { key: 4, link: 'search_by_name', name: 'Name' },
]

export default routes