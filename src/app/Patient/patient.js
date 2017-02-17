"use strict";
var Patient = (function () {
    function Patient(patientID, name, dob, serviceID, service) {
        this.patientID = patientID;
        this.name = name;
        this.dob = dob;
        this.serviceID = serviceID;
        this.service = service;
    }
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map