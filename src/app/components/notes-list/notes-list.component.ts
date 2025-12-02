import { Component, inject } from '@angular/core'
import { Notes } from '../../models/notes.model' with {type: "json"}
import { Observable } from 'rxjs'
import { AsyncPipe, DatePipe } from '@angular/common'
import { Note } from '../../models/note.models'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-notes-list',
    imports: [],
    templateUrl: './notes-list.component.html',
    styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {

}
