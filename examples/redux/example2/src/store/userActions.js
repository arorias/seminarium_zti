// akcje
export const SET_NAME = 'SET_NAME'


// kreatory akcji
const setName = (name) => {
    console.log("Kreator akcji:", name);

    return {
        type: SET_NAME,
        name
    }
}

export default setName
