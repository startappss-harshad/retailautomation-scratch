import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import EarningCard from "./EarningCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";

import { Grid } from "@mui/material";
import PopularCard from "./PopularCard";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <EarningCard />
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <TotalOrderLineChartCard />
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Grid container spacing={1}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <TotalIncomeDarkCard />
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <TotalIncomeLightCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TotalGrowthBarChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <PopularCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <div className="header">
        <div className="card-section" style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <EarningCard />
            <TotalOrderLineChartCard />
          </div>
          <div style={{}}>
            <TotalIncomeDarkCard />
            <TotalIncomeLightCard />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
