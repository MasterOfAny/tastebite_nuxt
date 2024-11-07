const processLink = (str: string, transform: boolean) => {
    if (transform) {
        return str?.toLocaleLowerCase().replace(/ /g, '-')
    } else {
        return str?.replace(/-/g, ' ')
    }
}

export default processLink