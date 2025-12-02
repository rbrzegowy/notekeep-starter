import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NotificationsComponent } from '../notifications/notifications.component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NotificationsComponent, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
