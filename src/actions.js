export default searchTermChanged = (searchTerm) => {
    return {
        type: 'SEARCH_INPUT_CHANGED',
        payload: { searchTerm },
    }
}

