import { Note } from "./note.models"

export type NewNote = Omit<Note, 'id'>
