# Przykład 2 - Użycie komponentu `Switch`

W przedstawionym przykładzie zostały dodane komomponenty `Home`, `About`, `AboutContact` oraz `NotFound`. Zostało dla nich utworzone routowanie z użyciem `react router`.

## Brak Switch
Pierwszy przykład (`routing1`) pokazuje działanie routowania, gdy ścieżki nie są opakowane w komponent switch. Wyświetlane są wszystkie komponenty do których wystąpiło dopasowanie.

## Zła kolejność ścierzek
W drugim przykładzie (`routing2`) zaprezentowany jest błąd związany z niepoprawną kolejnością listowania ścierzek. Ponieważ ścieżka `'/about'` jest przed ścieżką `'/about/contact'` następuje dopasowanie do tej pierwszej.

Problem ten można rozwiązać zmieniając kolejność listowania lub dodając atrybut `exact` przy ścieżce `'/about'`.

## Poprawne działanie
Plik `index.js` pokazuje poprawne działanie routowania w aplikacjach react.

W głównym komponencie `App` zawieramy komponent `BrowserRouter` a w nim `Switch` który będzie zarządzał mapowaniem adresów na komponenty.
Gdy nie wystąpiło dopasowanie, renderowany jest komponent `NotFound`.

