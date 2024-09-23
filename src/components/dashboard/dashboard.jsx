import React from "react";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import { Col, Row, Card, Button } from "react-bootstrap";
import SchoolCalendar from "./SchoolCalendar";
import StudentsData from "./StudentsData";
import DashboardComplaint from "./Complaint";


const totalTransactions = {
  series: [
    {
      name: 'Income',
      data: [750000, 800000, 850000, 700000, 750000, 900000, 837000, 950000, 700000, 850000, 900000, 750000]
    },
    {
      name: 'Expense',
      data: [500000, 550000, 600000, 450000, 500000, 650000, 500000, 600000, 450000, 550000, 600000, 500000]
    }
  ],
  options: {
    chart: {
      type: 'area',
      height: 350,
    },
    colors: ['#A5DEE5', '#5F9EA0'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val / 1000 + "k"; // Format y-axis values to "k" format
        }
      }
    },
    grid: {
      borderColor: '#e0e0e0', // Light gray color for grid lines
      strokeDashArray: 4,      // Dashes for the grid lines
    },
    tooltip: {
      x: {
        format: 'MMM dd, yyyy'
      },
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        colors: ['#FF5733']
      }
    },
    fill: {
      opacity: 0.4,
    },
  }
};


export default function Dashboard() {



  return (
    <div>
      <Row>
        <Col lg={7} md={12} sm={12} xl={8}>
          <Row>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className="dashboard_card_wrapper overflow-hidden">
                <Card.Body className="card-body">
                  <div className="dashboard_card">
                    <div className="dashboard_icon">
                      <img src="/img/dashboard.png" alt="" />
                    </div>
                    <div>
                      <h6 className="top_box_title">Students</h6>
                    </div>
                  </div>
                  <div className="custom_counter">
                    <CountUp
                      end={1200}
                      separator=","
                      start={0}
                      duration={2.94}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className="dashboard_card_wrapper overflow-hidden">
                <Card.Body className="card-body">
                  <div className="dashboard_card">
                    <div className="dashboard_icon">
                      <img src="/img/teacher.png" alt="" />
                    </div>
                    <div>
                      <h6 className="top_box_title">Teachers</h6>
                    </div>
                  </div>
                  <div className="custom_counter">
                    <CountUp
                      end={1200}
                      separator=","
                      start={0}
                      duration={2.94}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className="dashboard_card_wrapper overflow-hidden">
                <Card.Body className="card-body">
                  <div className="dashboard_card">
                    <div className="dashboard_icon">
                      <img src="/img/teacher.png" alt="" />
                    </div>
                    <div>
                      <h6 className="top_box_title">Staff</h6>
                    </div>
                  </div>
                  <div className="custom_counter">
                    <CountUp
                      end={1200}
                      separator=","
                      start={0}
                      duration={2.94}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className="dashboard_card_wrapper overflow-hidden">
                <Card.Body className="card-body">
                  <div className="dashboard_card">
                    <div className="dashboard_icon">
                      <img src="/img/earn.png" alt="" />
                    </div>
                    <div>
                      <h6 className="top_box_title">Earnings</h6>
                    </div>
                  </div>
                  <div className="custom_counter">
                    <span>₹</span>
                    <CountUp
                      end={142000}
                      separator=","
                      start={0}
                      duration={2.94}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col >
              <Card>
                <Card.Header className="card-header">
                  <h3 className="card-title">Earnings</h3>
                </Card.Header>
                <Card.Body className="card-body pb-0">
                  <div id="chartArea" className="chart-donut">
                    <ReactApexChart
                      options={totalTransactions.options}
                      series={totalTransactions.series}
                      type="area"
                      height={325}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={5} md={12} sm={12} xl={4}>
          <SchoolCalendar />
        </Col>
      </Row>
      <Row>
        <Col>
          <StudentsData />
        </Col>
      </Row>
      <Row>
        <Col>
          <DashboardComplaint />
        </Col>
      </Row>


    </div>
  );
}
