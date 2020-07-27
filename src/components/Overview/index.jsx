import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { Bubble } from 'react-chartjs-2';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Select } from '@material-ui/core';

import './styles.css';

export class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      datasets: [],
      options: {
        legend: {
          display: false
        },
        aspectRatio: 1,
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';
              const pointData = data.datasets.find(
                (value) => value.data[0].y === tooltipItem.yLabel
              );
              const impact = pointData.data[0].r / 25;
              if (label) {
                label += ': ';
              }
              label += `${Math.round(impact * 100) / 100}`;
              return label;
            }
          }
        },
        scales: {
          yAxes: [
            {
              display: false,
              gridLines: {
                drawBorder: false,
                display: false
              },
              ticks: {
                suggestedMax: 2.5
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Weekly Users'
              }
            }
          ]
        }
      }
    };
  }

  calculateDataset = () => {
    const { consolidatedData } = this.props;
    const datasets = consolidatedData.reduce((acc, value, index) => {
      if (value.dappRadar) {
        const chartValue = {
          label: value.dappRadar.slug,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 10,
          pointHitRadius: 10,
          data: [
            {
              x: Number(value.dappRadar.weeklyUsers),
              // y: value.dappRadar.txLastWeek,
              y: Math.random() + 1,
              r: value.impact * 25
            }
          ]
        };
        return [...acc, chartValue];
      } else {
        return acc;
      }
    }, []);

    this.setState({ datasets });
  };

  componentDidMount() {
    this.calculateDataset();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.calculateDataset();
    }
  }

  render() {
    const { labels, datasets, options } = this.state;
    const data = { labels, datasets };
    return (
      <Paper elevation={3} className="overview-container">
        <Typography variant="h3" style={{ marginBottom: '1em' }}>
          Market Impact Estimation
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <div style={{ width: '100%' }}>
            <Bubble data={data} options={options} />
          </div>
          <div style={{ width: '100%' }}>
            <Typography variant="h6" style={{ marginTop: '0.75em', marginBottom: '0.75em' }}>
              Analysis break-dow
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '1em' }}>
              This analysis composes information from DefiPulse and DappRadar, aiming to understand
              which are the most impactful DeFi/Dex projects given their Traded Volume, Number of
              Users, Number of Transactions and TVL.
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '1em' }}>
              Search for a Project
            </Typography>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              <form noValidate autoComplete="off">
                <TextField
                  onChange={this.props.onSearchChange}
                  variant="outlined"
                  id="standard-basic"
                  name="project-name"
                  value={this.props.searchQuery}
                  label="Project Name"
                />
              </form>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">Display</InputLabel>
                <Select
                  native
                  value={this.props.displayType}
                  onChange={this.props.onTypeChange}
                  label="Display Type"
                >
                  <option value="list">List</option>
                  <option value="table">Table</option>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Overview;
