"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Observable Version
var core_1 = require('@angular/core');
var patient_service_1 = require('./patient.service');
var PatientComponent = (function () {
    function PatientComponent(patientService) {
        this.patientService = patientService;
        this.mode = 'Observable';
    }
    PatientComponent.prototype.ngOnInit = function () { this.getPatients(); };
    PatientComponent.prototype.getPatients = function () {
        var _this = this;
        this.patientService.getPatients()
            .subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.errorMessage = error; });
    };
    PatientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'patient-list',
            templateUrl: './patientlist.component.html',
            providers: [patient_service_1.PatientService],
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.component.js.map