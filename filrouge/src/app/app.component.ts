import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StagiaireFormulaireComponent } from "./components/stagiaire-formulaire/stagiaire-formulaire.component";
import { NavBarComponent } from "./commons/navbar/nav-bar.component";
import { FooterComponent } from "./commons/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StagiaireFormulaireComponent, NavBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'filrouge';
}
