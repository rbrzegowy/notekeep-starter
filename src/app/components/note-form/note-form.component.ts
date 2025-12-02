import { Component, effect, inject, input } from '@angular/core'
import { FormsModule, NgModel } from '@angular/forms'
import { Note } from '../../models/note.models'
import { UUID } from '../../models/uuid.model'
import { NewNote } from '../../models/new-note.model'

@Component({
    selector: 'app-note-form',
    imports: [],
    templateUrl: './note-form.component.html',
    styleUrl: './note-form.component.scss'
})
export class NoteFormComponent {

  note: NewNote = {
    createdDate: '',
    title: '',
    content: '',
    color: '',
    tags: '',
    notificationDate: null
  }

  onSave() {
    // generowanie id: crypto.randomUUID()
  }
}
