import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-cost-chart',
  templateUrl: './cost-chart.page.html',
  styleUrls: ['./cost-chart.page.scss'],
})
export class CostChartPage implements OnInit, AfterViewInit {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  doughnutChart: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.doughnutChartMethod();
  }

  ngOnInit() {
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15, 10, 7],
          backgroundColor: [
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

}
