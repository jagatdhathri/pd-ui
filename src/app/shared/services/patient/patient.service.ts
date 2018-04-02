import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**Model */
import { Patient } from '../../../shared/model/patient';

import { Constants } from '../../../shared/constants';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }


  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(Constants.WEB_API_URL, patient);
  }

}
