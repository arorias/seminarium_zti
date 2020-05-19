
const initialState = {
    name: "Imię użytkownika"
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_NAME': {
            console.log('Reducer:',  'akcja SET_NAME');
            return {
                ...state,
                name: action.name
            };
        }
        default: {
            console.log('Reducer:',  'akcja default');
            return state;
        }
    }
}

export default rootReducer;