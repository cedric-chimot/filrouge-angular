import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { StagiaireServiceService } from '../../services/stagiaires/stagiaire-service.service';
import { Stagiaires } from '../../models/stagiaires.model';

@Component({
  selector: 'app-stagiaire-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './stagiaire-formulaire.component.html',
  styleUrl: './stagiaire-formulaire.component.css'
})
export class StagiaireFormulaireComponent {
  stagiairesForm: FormGroup = this.formBuider.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    telephone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pseudo: ['', Validators.required],
    mdp: ['', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/),
      Validators.minLength(8)
    ]],
    role: ['', Validators.required],
  })

  submitted: boolean = false;

  stagiaires: any[] = [];
  stagiaire!: Stagiaires;

  constructor(private formBuider: FormBuilder, private stagiaireService: StagiaireServiceService) {};

  ngOnInit() {
    
  }

  addStagiaire(): void {
    this.stagiaires.push(this.stagiairesForm.value);
    this.stagiaireService.createStagiaire(this.stagiairesForm.value).subscribe((stagiairesForm) => {
      this.stagiaire = stagiairesForm
      alert("Stagiaire créé avec succès !")
    });
  }

  onSubmit() {
    this.submitted = true;

    if(this.stagiairesForm.invalid) {
      return false;
    } else {
      this.addStagiaire();
      this.submitted = false;
      this.stagiairesForm.reset();
      return true;
    }
    
  }

  get form() {
    return this.stagiairesForm.controls;
  }

}
