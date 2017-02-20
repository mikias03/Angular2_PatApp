import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { FormsModule }   from '@angular/forms';


@Pipe({
  name: 'serviceFilter'
})

export class serviceFilter implements PipeTransform {
  transform(patients: any, service: any) :any {
  	if(service === undefined) return patients;
  	return patients.filter (function(patient) {
  		 return patient.service.toLowerCase().includes(service.toLowerCase());
  	})
   
  }
}