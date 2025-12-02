import { TimeoutSpinnerDirective } from './../../directives/timeout-spinner.directive'
import { Observable } from 'rxjs'
import { Component, inject } from '@angular/core'
import { Notifications } from '../../models/notifications.model'
import { AsyncPipe } from '@angular/common'

@Component({
    selector: 'app-notifications',
    imports: [AsyncPipe, TimeoutSpinnerDirective],
    templateUrl: './notifications.component.html',
    styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notifications$!: Observable<Notifications>


  closeNotification(index: number) {
  }
}
