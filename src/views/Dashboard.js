import React from 'react';
import ChartistGraph from 'react-chartist';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Topbar from './Topbar';
import GridItem from '../components/Grid/GridItem.jsx';
import Card from '../components/Card/Card.jsx';
import CardHeader from '../components/Card/CardHeader.jsx';
import CardBody from '../components/Card/CardBody.jsx';
import CardFooter from '../components/Card/CardFooter.jsx';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import { dailySalesChart } from 'variables/charts.jsx';

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <GridItem xs={12} sm={12} md={6}>
                <Card chart>
                  <CardHeader color="success">
                    <ChartistGraph
                      className="ct-chart"
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Daily Sales</h4>
                    <p className={classes.cardCategory}>
                      <span className={classes.successText}>
                        <ArrowUpward className={classes.upArrowCardCategory} />{' '}
                        55%
                      </span>{' '}
                      increase in today sales.
                    </p>
                  </CardBody>
                  <CardFooter chart>
                    <div className={classes.stats}>
                      <AccessTime /> updated 4 minutes ago
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>

              <Grid container spacing={24} xs={12} justify="center">
                <Paper className={classes.root} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(Dashboard);
