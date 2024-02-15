import React from "react";

import SummaryCards from "./SummaryCards";
import MainChart from "./MainChart";
import SmallCharts from "./SmallCharts";

import ActivityOverviews from "./ActivityOverviews";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const displayName =
    localStorage.getItem("displayName")?.split(" ")[0] || null;
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div className={styles.headerBox}>
          <div className={styles.headerBigText}>Hello {displayName}!</div>
          <div className={styles.headerSmallText}>
            We are on a mission to help developers like you to maintain
            resilient Kafka Applications
          </div>
        </div>
      </div>

      <div>
        <SummaryCards />
      </div>

      <div className={styles.belowSummaryCards}>
        <MainChart />

        <SmallCharts />

        <ActivityOverviews />
      </div>
    </div>
  );
};

export default Dashboard;
