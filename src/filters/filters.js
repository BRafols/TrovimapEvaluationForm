const date = (string) => {
    const date = new Date(string)

    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
}

export {
    date
}