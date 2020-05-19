# Przykład 2 - Wywoływanie akcji

Przykład ten stanowi rozszerzenie przykładu 1. Zostały dodane funkcjonalności demonstrujące wywoływanie prostej akcji.

Przepływ danych można śledzić poprzez logi aplikacji.

## Akcja

W pliku `/store/userActions.js` dodana została akcja `SET_NAME` oraz odpowiadający jej kreator akcji. Ustawia on `name` na nową wartość. 
Akcję tą odbiera `rootReducer` i zgodnie z otrzymanymi danymi ustawia state.


```
    switch(action.type){
        case 'SET_NAME': {
            return {
                ...state,
                name: action.name
            };
        }
        ...
    }

```

## Wywoływanie akcji

Stworzona akcja musi jeszcze zostać udostępniona komponentowi. Podobnie jak w przypadku pobieraniu stanu dzieje się to za pomocą funkcji mapującej operację `dispatch` wywoływaną na akcji na atrybuty komponentu. Funkcja mapująca musi zostać przekazana jako argument `connect`.


```
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {dispatch(setName(name))} 
    };
}

export default connect(null, mapDispatchToProps)(ChangeName);

```
