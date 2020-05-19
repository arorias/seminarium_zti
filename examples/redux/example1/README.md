# Przykład 1 - Łączenie komponentów ze Store

W tym przykładzie zostało zademonstrowane połączenie komponentu (`DisplayName`) ze store oraz pobranie z niego danych.

W folderze `components` znajdują się wszystkie komponenty, w katalogu `store` elementy potrzebne do tworzenia magazynu i nim zarządzania.

## Tworzenie store

Store został stworzony w pliku `index.js` za pomocą funkcji z biblioteki `redux` - `createStore`. Jako argument przyjmuje on reducer, który będzie z nim interreagował.

```
const store = createStore(rootReducer);
```

Został też dodany `Provider` który będzie udostępniał store wszystkim komponentom, które zostały połączone.

## Reducer

W pliku `/store/rootReducer.js` znajduje się prosty reducer, który zwraca stan, niezależnie od akcji. Stan początkowy store zdefiniowany jest na początku pliku, domyślne imię to `Imię użytkownika`.

## Komponent

W aplikacji dodany został jeden komponent - `DisplayName`, któego zadaniem jest wyświetlenie imienia. Pobierane jest ono z atrybutów (props), co jest możliwe dzięki połączeniu komponentu ze store.

Komponent obudowywany jest za pomocą funkcji `connect`, która jako argument przyjmuje funkcję mapującą wybrane stany store na atrybuty.

```
const mapStateToProps = (state) => {
    return {
        userName: state.name,
    };
}

export default connect(mapStateToProps)(DisplayName);
```

