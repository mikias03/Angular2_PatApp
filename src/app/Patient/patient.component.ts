// Observable Version
import { Component, OnInit } from '@angular/core';
import { Patient }              from './patient';
import { PatientService }       from './patient.service';

@Component({
  moduleId: module.id,
  selector: 'patient-list',
  templateUrl: './patientlist.component.html',
  providers: [ PatientService ],
  
})
export class PatientComponent implements OnInit {
  errorMessage: string;
  patients: Patient[];
  mode = 'Observable';

  constructor (private patientService: PatientService) {}

  ngOnInit() { this.getPatients(); }

  getPatients() {
    this.patientService.getPatients()
                     .subscribe(
                       patients => this.patients = patients,
                       error =>  this.errorMessage = <any>error);
  }

}