# Przykład 1 - `Link` vs `NavLink`

Przykład pokazuje rożnicę w działaniu komponentów `Link` oraz `NavLivk`.

Stworzone zostały komponenty nawigacyjne: `NavbarLink` oraz `NavbarNavlink`, zawierający linki do poszczególnych stron. Znajdują się one w pliku `App.js`. W przypadku większych projektów każdy komponent powinien być umieszczony w osobnym pliku, w odpowiednim katalogu.

Przełączając się po między stronami można zauważyć, że w dolnym pasku, który zawiera `NavLink` kolor aktywnego linku zmienia się. Jako atrybuty dostały dodane `exact`, aby podświetlane było tylko jedno, dokładne dopasowanie (podobnie jak przy paths) oraz `activeClassName`, który specyfikuje klasę elementu aktywnego.

Nawet gdy dodamy atrybut `activeClassName` do komponentu `Link` nie zobaczymy zmiany klasy, stylu.

Podsumowywując: powinniśmy używać `NavLink` gdy jest potrzeba wskazywania, który element jest aktywny, jak na przykład na paskach nawigacyjnych.

