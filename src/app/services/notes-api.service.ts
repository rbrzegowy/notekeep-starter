import { Injectable } from '@angular/core'
import data from '../../assets/data.json'
import { of, throwError } from 'rxjs'
import { Note } from '../models/note.models'

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  loadNotes() {
    const shouldResponseOk = Math.random() > 0.5
    return shouldResponseOk ? of(data as Note[]) : throwError(() => 'Failed to load notes list!')
  }
}