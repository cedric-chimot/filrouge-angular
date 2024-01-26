import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StagiaireFormulaireComponent } from "./components/stagiaire-formulaire/stagiaire-formulaire.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StagiaireFormulaireComponent]
})
export class AppComponent {
  title = 'filrouge';
}
