import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**Model */
import { Patient } from '../../../shared/model/patient';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }


  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>('//localhost:9090/patient', patient);
  }

}
