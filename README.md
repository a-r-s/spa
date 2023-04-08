# IT SPA

Single Page Application dla ośrodka SPA dedykowanego programistom.

Aplikacja umożliwia: 

- Przeglądanie dostępnych pokoi  (m.in. pokój Makintosza, pokoj w piwnicy)
- Dodawanie wybranych pokoi do koszyka 
- Przeglądanie dostępnych zabiegów (m.in. masaż rozgrzanym monitorem)
- Dodawanie wybranych zabiegów do koszyka 
- Wybór daty przyjazdu i wyjazdu oraz pokoju  
- Rejestrację użytkownika
- Podsumowanie składanego zamówienia

### Uruchomienie (konsola):
Znajdując się w głównym folderze aplikacji należy wpisać `npm install` (jednorazowo): stworzy się folder node_modules.
Jeśli folder node_modules znajduje się w głównym folderze aplikacji, aby uruchomić ją lokalnie należy wpisać w konsoli `npm run start:db` oraz `npm run start:app`.


## Rejestracja

Komponent rejestracji użytkownika.
Rejestracja polega na zapisaniu danych użytkownika (e-mail i hasła) w pliku `database.json`.
Nie jest  możliwa rejestracja użytkownika o identycznym adresie e-mail.


## Pokoje

Wyświetlanie listy dostępnych pomieszczeń, m.in. pokój z widokiem na serwerownię, pokój linuksiarzy.


## Booking

W widoku 'Pokoje' użytkownik ma możliwość wybrać datę przyjazdu i odjazdu. Nie może wybrać daty przyjazdu wcześniejszej niż bieżąca.
Wybrana data wyjazdu nie może być dalsza niż rok od daty przyjazdu.


## Zabiegi 

Wyświetlanie listy dostępnych zabiegów, m.in. masaż rozgrzanym monitorem, biczowanie kablem od myszy.


## Koszyk

Komponent koszyka, który wyświetla podsumowanie zamówienia. Koszyk umożliwia nanoszenie poprawek do zamówienia.

## Technologie

- HTML, Bootstrap
- CSS, Sass
- JavaScript
- Node, Express