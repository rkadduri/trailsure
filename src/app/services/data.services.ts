// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import emailData from '../../assets/emails.json';
// import policiesData from '../../assets/policies.json';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataService {
//   private readonly emailDataUrl = 'assets/emails.json'; // Path to email data JSON
//   private readonly policiesDataUrl = 'assets/policies.json'; // Path to policies data JSON

//   constructor(private readonly http: HttpClient) {}
//   getEmailData(): Observable<any[]> {
//     return this.http.get<any[]>(this.emailDataUrl).pipe(
//       catchError(() => {
//         console.warn('Using fallback email data from local file');
//         return of(
//           emailData.map((emailRecord) => ({
//             id: emailRecord.id,
//             time: emailRecord.time,
//             subject: emailRecord.subject || 'No Subject',
//             body: emailRecord.body || 'No body content',
//             category: emailRecord.category || 'General',
//             from: emailRecord.from || 'no-reply@mockemail.com',
//             emailId: this.generateMockEmail(emailRecord.from),
//             keyPhrases: emailRecord.keyPhrases || [],
//           }))
//         );
//       })
//     );
//   }
//   generateMockEmail(from: any): any {
//     throw new Error('Method not implemented.');
//   }

//   getPoliciesData(): Observable<any[]> {
//     return this.http.get<any[]>(this.policiesDataUrl).pipe(
//       catchError(() => {
//         console.warn('Using fallback policies data from local file');
//         return of(
//           policiesData.map((policy) => ({
//             id: policy.PolicyId,
//             policyNumber: policy.PolicyNumber || 'N/A',
//             customerId: policy.CustomerId,
//             customerName: policy.CustomerName,
//             emailId: policy.EmailId,
//             status: policy.Status,
//             coverageType: policy.CoverageType || 'N/A',
//             startDate: policy.StartDate,
//             endDate: policy.EndDate,
//             premiumAmount: policy.PremiumAmount || 'N/A',
//             phoneNumber: policy.PhoneNumber || 'N/A',
//           }))
//         ); 
//       })
//     );
//   }
// }



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import emailData from '../../assets/emails.json';
// import policiesData from '../../assets/policies.json';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataService {
//   private readonly emailDataUrl = 'assets/emails.json'; // Path to email data JSON
//   private readonly policiesDataUrl = 'assets/policies.json'; // Path to policies data JSON


//   constructor(private readonly http: HttpClient) {}

//   getEmailData(): Observable<any[]> {
//     return this.http.get<any[]>(this.emailDataUrl).pipe(
//       catchError(() => {
//         console.warn('Using fallback email data from local file');
//         return of(emailData);
//       })
//     );
//   }

//   getPoliciesData(): Observable<any[]> {
//     return this.http.get<any[]>(this.policiesDataUrl).pipe(
//       catchError(() => {
//         console.warn('Using fallback policies data from local file');
//         return of(policiesData);
//       })
//     );
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import emailData from '../../assets/emails.json';
// import policiesData from '../../assets/policies.json';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataService {
//   private readonly emailDataUrl = 'assets/emails.json'; // Path to email data JSON
//   private readonly livePoliciesApiUrl =
//     'https://trailsure.azurewebsites.net/api/ai?type=Policies&code=K6QC7AdLXvWDZSNkValENQ7eoUvY03ZfGtzC4Fgr3SErAzFuPYVPCg%3D%3D';

//   constructor(private readonly http: HttpClient) {}

  
//   getEmailData(): Observable<any[]> {
//     return this.http.get<any[]>(this.emailDataUrl).pipe(
//       catchError(() => {
//         console.warn('Using fallback email data from local file');
//         return of(emailData);
//       })
//     );
//   }


//   getPoliciesData(): Observable<any[]> {
//     return this.http.get<any[]>(this.livePoliciesApiUrl).pipe(
//       catchError(() => {
//         console.warn('Using fallback policies data from local file');
//         return of(policiesData);
//       })
//     );
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Live API URLs
  private readonly emailDataUrl =
    'https://trailsure.azurewebsites.net/api/ai?type=emails&code=K6QC7AdLXvWDZSNkValENQ7eoUvY03ZfGtzC4Fgr3SErAzFuPYVPCg%3D%3D';
  private readonly policiesDataUrl =
    'https://trailsure.azurewebsites.net/api/ai?type=Policies&code=K6QC7AdLXvWDZSNkValENQ7eoUvY03ZfGtzC4Fgr3SErAzFuPYVPCg%3D%3D';

    private readonly crmLeadsUrl =
    'https://trailsure.azurewebsites.net/api/CRMLeads?code=fTalk2X1tGuDCsJI5pizCIbWcj90Kwq8Wob6OPoNDQOQAzFuXH8l5Q%3D%3D';


private readonly userDataUrl = 'assets/users.json';

  constructor(private readonly http: HttpClient) {}



  // private getAuthToken(): string {
  //   // Replace with actual token retrieval logic (e.g., from localStorage or a service)
  //   return localStorage.getItem('authToken') || 'K6QC7AdLXvWDZSNkValENQ7eoUvY03ZfGtzC4Fgr3SErAzFuPYVPCg%3D%3D';
  // }
 
  
  // private getHttpOptions(): { headers: HttpHeaders } {
  //   const token = this.getAuthToken();
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     }),
  //   };
  // }

   /**
   * Fetches user data for login.
   */
  //  getUserData(): Observable<{ username: string; password: string }[]> {
  //   return this.http.get<{ username: string; password: string }[]>(this.userDataUrl).pipe(
  //     catchError((error) => {
  //       console.error('Failed to fetch user data:', error);
  //       return of([]);
  //     })
  //   );
  // }

  // /**
  //  * Fetches email data from the live API, with token-based authentication.
  //  */
  // getEmailData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.emailDataUrl, this.getHttpOptions()).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Failed to fetch email data:', error);
  //       return of([]);
  //     })
  //   );
  // }

  // /**
  //  * Fetches policies data from the live API, with token-based authentication.
  //  */
  // getPoliciesData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.policiesDataUrl, this.getHttpOptions()).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Failed to fetch policies data:', error);
  //       return of([]);
  //     })
  //   );
  // }

  // /**
  //  * Fetches CRM leads data from the live API, with token-based authentication.
  //  */
  // getCRMLeadsData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.crmLeadsUrl, this.getHttpOptions()).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Failed to fetch CRM leads data:', error);
  //       return of([]);
  //     })
  //   );
  // }
 
  getEmailData(): Observable<any[]> {
    return this.http.get<any[]>(this.emailDataUrl).pipe(
      catchError((error) => {
        console.error('Failed to fetch email data:', error);
        // Return an empty array or handle error as needed
        return of([]);
      })
    );
  }

  
  getPoliciesData(): Observable<any[]> {
    return this.http.get<any[]>(this.policiesDataUrl).pipe(
      catchError((error) => {
        console.error('Failed to fetch policies data:', error);
        // Return an empty array or handle error as needed
        return of([]);
      })
    );
  }

  getCRMLeadsData(): Observable<any[]> {
    return this.http.get<any[]>(this.crmLeadsUrl).pipe(
      catchError((error) => {
        console.error('Failed to fetch CRM leads data:', error);
        return of([]);
      })
    );
  }

  getUserData(): Observable<{ username: string; password: string }[]> {
    return this.http.get<{ username: string; password: string }[]>(this.userDataUrl).pipe(
      catchError((error) => {
        console.error('Error loading user data:', error);
        return of([]); 
      })
    );
  }


}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataService {
//   //Live API URLs

//     private readonly emailDataUrl =
//     'https://trailsure.azurewebsites.net/api/ai?type=emails&code=K6QC7AdLXvWDZSNkValENQ7eoUvY03ZfGtzC4Fgr3SErAzFuPYVPCg%3D%3D';
//   private readonly policiesDataUrl =
//     'https://trailsure.azurewebsites.net/api/ai?type=Policies&code=K6QC7AdLXvWDZSNkValENQ7eoUvY03ZfGtzC4Fgr3SErAzFuPYVPCg%3D%3D';

//     private readonly crmLeadsUrl =
//     'https://trailsure.azurewebsites.net/api/CRMLeads?code=fTalk2X1tGuDCsJI5pizCIbWcj90Kwq8Wob6OPoNDQOQAzFuXH8l5Q%3D%3D';


//   // Local user data
//   private readonly userDataUrl = 'assets/users.json';

//   constructor(private readonly http: HttpClient) {}


//   // private getAuthToken(): string {
//   //   if (typeof window !== 'undefined' && window.localStorage) {
//   //     return localStorage.getItem('authToken') || 'K6QC7AdLXvWDZSNkValENQ7eoUvY03ZfGtzC4Fgr3SErAzFuPYVPCg%3D%3D';
//   //   } else {
//   //     return 'default_token'; 
//   //   }
//   // }
  
//   private getHttpOptions(): { headers: HttpHeaders } {
//     const token = this.getAuthToken();
//     return {
//       headers: new HttpHeaders({
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       }),
//     };
//   }

//   /**
//    * Fetches user data for login from the local JSON file.
//    */
//   getUserData(): Observable<{ username: string; password: string }[]> {
//     return this.http.get<{ username: string; password: string }[]>(this.userDataUrl).pipe(
//       catchError((error) => {
//         console.error('Failed to fetch user data:', error);
//         return of([]);
//       })
//     );
//   }

//   //getUserData(): Observable<{ username: string; password: string }[localStorage.setItem]> {
//     //     return this.http.get<{ username: string; password: string }[]>(this.userDataUrl).pipe(
//     //       catchError((error) => {
//     //         console.error('Failed to fetch user data:', error);
//     //         return of([]);
//     //       })
//     //     );
//     //   }
//   /**
//    * Fetches email data from the live API with token-based authentication.
//    */
//   getEmailData(): Observable<any[]> {
//     return this.http.get<any[]>(this.emailDataUrl, this.getHttpOptions()).pipe(
//       catchError((error: HttpErrorResponse) => {
//         console.error('Failed to fetch email data:', error);
//         console.log('Error details:', error);
//         return of([]); // Return empty array in case of error
//       })
//     );
//   }

//   /**
//    * Fetches policies data from the live API with token-based authentication.
//    */
//   getPoliciesData(): Observable<any[]> {
//     return this.http.get<any[]>(this.policiesDataUrl, this.getHttpOptions()).pipe(
//       catchError((error: HttpErrorResponse) => {
//         console.error('Failed to fetch policies data:', error);
//         return of([]); // Return empty array in case of error
//       })
//     );
//   }

//   /**
//    * Fetches CRM leads data from the live API with token-based authentication.
//    */
//   getCRMLeadsData(): Observable<any[]> {
//     return this.http.get<any[]>(this.crmLeadsUrl, this.getHttpOptions()).pipe(
//       catchError((error: HttpErrorResponse) => {
//         console.error('Failed to fetch CRM leads data:', error);
//         return of([]); // Return empty array in case of error
//       })
//     );
//   }
// }
