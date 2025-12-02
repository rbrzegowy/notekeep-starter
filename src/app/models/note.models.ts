import { UUID } from "./uuid.model"

export type Note = {
  id: UUID,
  title: string,
  content: string,
  color: string,
  tags: string,
  createdDate: Date | string,
  notificationDate: Date | string | null
}