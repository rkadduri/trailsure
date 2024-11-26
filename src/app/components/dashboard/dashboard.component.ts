import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataService } from '../../services/data.services';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
//import { NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { filter } from 'rxjs/operators';


interface Policy {
  policyId: string;
  customerId: string;
  customerName: string;
  emailId: string;
  startDate: string;
  endDate: string;
  Status: string;
  coverageType: string;
}

interface Email {
  //id: string;
  customerId: string;
  customerName: string;
  time: string;
  subject: string;
  from: string;
  status: string;
  category: string;
}

interface CRMLead {
  id: string;
  from: string;
  time: string;
  subject: string;
  body: string;
  category?: string; 
}


@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatTableModule, CommonModule, MatTabsModule,FormsModule ],
})
export class DashboardComponent implements OnInit {
  displayedPolicyColumns: string[] = [
    'policyId',
    'customerId',
    'customerName',
    'emailId',
    'startDate',
    'endDate',
    'status',
    'coverageType',
  ];

  displayedEmailColumns: string[] = [
    'customerId',
    'customerName',
    'from',
    'category',
    'subject',   
    'time',    
    'status',
    
  ];

  displayedCrmLeadColumns: string[] = [
    'id',
    'from',
    'time',
    'subject',
    'category',
    //'keyPhrases',
  ];

  policyDataSource = new MatTableDataSource<Policy>([]);
  emailDataSource = new MatTableDataSource<Email>([]);
  crmLeadsDataSource = new MatTableDataSource<CRMLead>([]);
status: any;
  router: any;

  constructor(private readonly dataService: DataService) {}
  statusCounts: { [key: string]: number } = {};

  categoryCounts: Record<string, number> = {};
  totalUniqueCustomers: number = 0;
  totalCustomers: number = 0;
  crmLeadsCount: number = 0;


  ngOnInit(): void {
    this.loadPoliciesData();
    this.loadEmailData();
    this.loadCrmLeadsData();
    
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.loadPoliciesData();
    //     this.loadEmailData();
    //     this.loadCrmLeadsData();
    //   });
  }
 
  loadPoliciesData(): void {
    this.dataService.getPoliciesData().subscribe({
      next: (data) => {
     //   console.log('Policies Data:', data);
        this.policyDataSource.data = data;
        this.calculateStatusCounts(data);
      },
      error: (err) => {
        console.error('Failed to load policy data:', err);
      },
    });
  }

  loadEmailData(): void {
    this.dataService.getEmailData().subscribe({
      next: (data) => {
        this.emailDataSource.data = data;
       // this.calculateCategoryCounts(data);
        this.calculateMetrics(data);
      },
      error: (err) => {
        console.error('Failed to load email data:', err);
      },
    });
  }

  loadCrmLeadsData(): void {
    this.dataService.getCRMLeadsData().subscribe({
      next: (data) => {
      //  console.log('CRM Leads API response:', data);
        //this.crmLeadsDataSource.data = data;
        this.crmLeadsDataSource.data = data; // Set data
        this.crmLeadsCount = data.length; // Calculate count
      },
      error: (err) => {
        console.error('Failed to load CRM Leads data:', err);
      },
    });
  }

  // pilice status 
  calculateStatusCounts(data: Policy[]): void {
    this.statusCounts = {};
    data.forEach((policy) => {
       // console.log('Policy Status:', policy.status);
      const status = policy.Status;
      this.statusCounts[status] = (this.statusCounts[status] || 0) + 1;
     // console.log('Status Counts:', this.statusCounts);
    });
  }

  
  
  calculateMetrics(emails: Email[]): void {
    // Total number of emails (one-to-one with customers in email dataset)
    this.totalCustomers = emails.length;

    // Unique customers
    const uniqueCustomers = new Set(emails.map((email) => email.customerId));
    this.totalUniqueCustomers = uniqueCustomers.size;

    // Category counts
    this.categoryCounts = emails.reduce((counts, email) => {
      counts[email.category] = (counts[email.category] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);

    // Status counts
    this.statusCounts = emails.reduce((counts, email) => {
      counts[email.status] = (counts[email.status] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);
  }

  getCategoryList(): string[] {
    return Object.keys(this.categoryCounts);
  }

  getStatusList(): string[] {
    return Object.keys(this.statusCounts);
  }

}
