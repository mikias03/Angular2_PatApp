// Observable Version
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Patient }              from './patient';
import { PatientService }       from './patient.service';
import {PaginatePipe, PaginationControlsComponent, PaginationService} from 'ng2-pagination';
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