1. Utwórz pustą aplikację
1. Utwórz komponent note-form (formularz notatki)
1. W komponencie note-form utwórz formularz nowej notatki 
1. Utwórz komponent notes-list (lista notatek)
1. Zamockuj kilka notatek w json-ie i wyświetl je w komponencie listy notatek
1. Dodaj routing /list - lista notatek, /new - formularz notatki
1. W głównym komponencie dodaj przyciski nawigacyjne do w/w adresów

## Kolejne kroki
1. Wyświetl tagi na liście notatek jako osobne div-y:
  (1) za pomocą @for(),  
  (2) za pomocą dyrektywy strukturalna zmieniająca a, b, c na <div class="tag">a</div>, <div class="tag">b</div>, ...)


  ### Model notatki
 ```typescript
 type Note = {
  id: UUID,
  title: string,
  content: string,
  color: string,
  tags: string,
  createdDate: ISOString,
  notificationDate: ISOString | null
}
```