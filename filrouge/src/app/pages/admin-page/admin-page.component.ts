import { Component } from '@angular/core';
import { AdminNavbarComponent } from "../../commons/admin-navbar/admin-navbar.component";
import { AdminSidebarComponent } from "../../commons/admin-sidebar/admin-sidebar.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-admin-page',
    standalone: true,
    templateUrl: './admin-page.component.html',
    styleUrl: './admin-page.component.css',
    imports: [AdminNavbarComponent, AdminSidebarComponent, MatToolbarModule, MatIconModule, MatButtonModule, RouterModule]
})
export class AdminPageComponent {

}
