import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lineChartSteppedData: Array<any> = [{
    data: [1, 8, 4, 8, 2, 2, 9],
    label: 'UpTime',
    borderWidth: 0,
    fill: true,
    // steppedLine: true
  }, {
    data: [.2, .1, .5, .25, 0, 0, 1],
    label: 'DownTime',
    borderWidth: 1,
    fill: true,
    // steppedLine: true
  }];
  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
  /*
  * Full width Chart Options
  */
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: 'bottom'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 9,
        }
      }]
    }
  };

  public lineChartColors: Array<any> = [{
    backgroundColor: 'rgba(63, 81, 181, 0.16)',
    borderColor: 'rgba(0,0,0,0)',
    pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
    pointBorderColor: 'rgba(0, 0, 0, 0)',
    pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
    pointHoverBorderColor: 'rgba(148,159,177,0)'
  }, {
    backgroundColor: 'rgba(0, 0, 0, .08)',
    borderColor: 'rgba(0,0,0,0)',
    pointBackgroundColor: 'rgba(0, 0, 0, 0.06)',
    pointBorderColor: 'rgba(0, 0, 0, 0)',
    pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
    pointHoverBorderColor: 'rgba(0, 0, 0, 0)'
  }];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';


  // Chart grid options
  doughnutChartColors1: any[] = [{
    backgroundColor: ['#fff', 'rgba(0, 0, 0, .24)',]
  }];
  doughnutChartColors2: any[] = [{
    backgroundColor: ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .15)',]
  }];
  total1: number = 500;
  data1: number = 200;
  doughnutChartData1: number[] = [this.data1, (this.total1 - this.data1)];

  total2: number = 600;
  data2: number = 400;
  doughnutChartData2: number[] = [this.data2, (this.total2 - this.data2)];
  doughnutLabels = ['Spent', 'Remaining']
  doughnutChartType = 'doughnut';
  doughnutOptions: any = {
    cutoutPercentage: 85,
    responsive: true,
    legend: {
      display: false,
      position: 'bottom'
    },
    elements: {
      arc: {
        borderWidth: 0,
      }
    },
    tooltips: {
      enabled: true
    }
  };

  photos = [{
    name: 'Photo 1',
    url: 'assets/images/sq-15.jpg'
  }, {
    name: 'Photo 2',
    url: 'assets/images/sq-8.jpg'
  }, {
    name: 'Photo 3',
    url: 'assets/images/sq-9.jpg'
  }, {
    name: 'Photo 4',
    url: 'assets/images/sq-10.jpg'
  }, {
    name: 'Photo 5',
    url: 'assets/images/sq-11.jpg'
  }, {
    name: 'Photo 6',
    url: 'assets/images/sq-12.jpg'
  }]
  tickets = [{
    path: '/auth/login',
    layer: 'frontend',
    message: 'Cannot read property name of undefined. SignInComponent.ts 47',
    date: new Date('12/02/2019'),
    isOpen: true
  }, {
    path: '/auth/login',
    layer: 'backend',
    message: 'Postgres Exception. Cannot insert null value into Audit_trail_user_id column',
    date: new Date('12/01/2019'),
    isOpen: true
  }, {
    path: '/auth/reset-password',
    layer: 'backend',
    message: 'Postgres Exception. Cannot insert null value into Audit_trail_user_id column',
    date: new Date('12/05/2019'),
    isOpen: false
  }, {
    path: '/audit-trail/29329',
    layer: 'backend',
    message: 'NullPointer Exception in AuditTrailBuilder.getName() 78',
    date: new Date('12/03/2019'),
    isOpen: true
  }]
  // users
  users = [
    {
      "name": "Snow Benton",
      "membership": "Paid Member",
      "phone": "+1 (956) 486-2327",
      "photo": "assets/images/face-4.jpg",
      "address": "329 Dictum Court, Minnesota",
      "registered": "2016-07-09"
    },
    {
      "name": "Kay Sellers",
      "membership": "Paid Member",
      "phone": "+1 (929) 406-3172",
      "photo": "assets/images/face-2.jpg",
      "address": "893 Garden Place, American Samoa",
      "registered": "2017-02-16"
    }
  ]

  projects = [{
    name: 'User Story',
    user: 'Watson Joyce',
    progress: 100,
    leader: 'Snow Benton'
  }, {
    name: 'Design Data Model',
    user: 'Morris Adams',
    progress: 30,
    leader: 'Watson Joyce'
  }, {
    name: 'Develop CR Algorithm',
    user: 'Jhone Doe',
    progress: 70,
    leader: 'Ada Kidd'
  }, {
    name: 'Payment Module',
    user: 'Ada Kidd',
    progress: 50,
    leader: 'Snow Benton'
  }, {
    name: 'Discount Module',
    user: 'Workman Floyd',
    progress: 50,
    leader: 'Robert Middleton'
  }]
  constructor() { }

  ngOnInit() {
  }

}
