Singe Page Application - Movie study group. Aplikacja pozwala na przeglądanie filmów, dodawanie ich do kilku list - polubionych, nielubianych i do obejrzenia. 

Uzyte technologie: HTML5, CSS3, JavaScript, React.js

Projekt został zbudowany z użyciem React – popularnego frameworka do tworzenia interfejsów użytkownika. React opiera się na komponentowej architekturze, co pozwala na tworzenie dynamicznych i wydajnych aplikacji typu SPA.

Projekt wykorzystuje podejście modułowe i komponentowe.

Komponenty:
Każda sekcja aplikacji (np. HeroSection, MovieCard, MyList) została zaimplementowana jako osobny komponent React.
	•	Komponenty są przechowywane w folderze /components.

Strony:
Strony (np. Home, MyList) są zorganizowane w folderze /pages. Każda strona odpowiada za określoną funkcjonalność aplikacji.

Style:
Pliki CSS/SCSS są zorganizowane w strukturze odpowiadającej komponentom i stronom.

Utils:
Logika wspólna, np. obsługa localStorage, znajduje się w folderze /utils.

W aplikacji użyto React Router do zarządzania ruchem użytkownika między stronami. Plik App.js zawiera konfigurację routera z trasami

Aplikacja nie korzysta z bezpośredniego połączenia z bazą danych. Dane są pobierane z zewnętrznego API (TMDB), a lokalne dane użytkownika (np. ulubione filmy) są przechowywane w localStorage.
	•	Użyto biblioteki Axios do wykonywania zapytań HTTP
    •   Dane z API są dynamicznie wyświetlane w komponentach, takich jak HeroSection i MovieDetails.


Aby uruchomić aplikację, nalezy uzyc komendy

npm install

Po instalacji pakietów wystarczy wpisac komendę

npm start

Uruchomi ona aplikację na lokalnym serwerze.

