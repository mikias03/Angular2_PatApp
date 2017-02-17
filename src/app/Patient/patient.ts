export class Patient {
  constructor(
    public patientID: number,
    public name: string,
    public dob: string,
    public serviceID: number,
    public service: string) { }
}