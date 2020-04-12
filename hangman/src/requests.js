const getPuzzle = async (wordcount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordcount}`)
    
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch data')
    }
}

export { getPuzzle as default }