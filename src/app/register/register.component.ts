import { Component, OnInit } from '@angular/core';

/** Service */
import { PatientService } from '../shared/services/patient/patient.service';

/**Model */
import { Patient } from '../shared/model/patient';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  patient: Patient;

  constructor(private patientService: PatientService) {
    this.patient = new Patient();
  }

  ngOnInit() {

  }

  registerPatient() {
    alert(this.patient.lastName);
    return this.patientService.createPatient(this.patient).subscribe(data => {
      this.patient = data;
    });
  }
}
