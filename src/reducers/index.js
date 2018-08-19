import food from '../data/food'

const initialState = {
    food,
    searchTerm: '',
}

const reducer = (state = initialState, action) => {
    // switch between the action type
    switch (action.type) {
    case 'SEARCH_INPUT_CHANGED': {
        const { searchTerm } = action.payload
        return {
            ...state,
            searchTerm,
            food: searchTerm ? food.filter(
                (food) => (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
            ) : food,
        }
    }
    default:
        return state
    }
}

export default reducer
