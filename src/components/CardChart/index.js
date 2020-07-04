import React from "react";
import { CCard, CCardBody, CRow, CCol } from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import icHelp from "../../assets/img/ic-help.svg";
import "./style.scss";

const CardChart = () => {
  const doughnut = {
    labels: ["Na média", "Acima da média", "Abaixo da média"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#1070ca", "#ec4c47", "#f7d154"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
    options: {
      maintainAspectRatio: false,
      cutoutPercentage: 80,
      responsive: true,
      legend: {
        pointStyle: "dot",
        position: "right",
        labels: {
          usePointStyle: true,
          fontColor: "rgba(0, 0, 0, 0.87)",
          fontStyle: "500",
          fontSize: 12,
          fontFamily: "'Inter', sans-serif",
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 10,
        },
      },
      legendCallback: function (chart) {
        return "Test";
      },
    },
  };
  return (
    <CCard className="card-chart">
      <CCardBody>
        <CRow>
          <CCol>
            <span className="price">Preços - Drye x KBB</span>
            <img src={icHelp} className="ic_help" alt="info" />
          </CCol>
        </CRow>
        <CRow className="">
          <CCol md="12">
            <div className="chart-wrapper">
              <CChart
                type="doughnut"
                datasets={doughnut.datasets}
                labels={doughnut.labels}
                options={doughnut.options}
              />
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default CardChart;
