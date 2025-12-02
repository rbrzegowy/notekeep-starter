import { Component } from '@angular/core'
import { NoteFormComponent } from "../note-form/note-form.component"
import { NotesListComponent } from "../notes-list/notes-list.component"

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NoteFormComponent, NotesListComponent]
})
export class HomeComponent {

}
