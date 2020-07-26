import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import setVarianveColor from '../../helpers/setVarianceColor';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function DefiPulseListData(props) {
  return (
    <Paper
      style={{
        width: '100%',
        padding: '0.8em',
        marginTop: '1em'
      }}
      elevation={0}
    >
      <h2 style={{ marginTop: '0', marginBottom: '1em' }}>DeFi Pulse Data</h2>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        <Grid item style={{ height: '7em', width: '30%' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                TVL - USD
              </Typography>
              <Typography variant="body1">
                {Math.round(props.usd / 1000000 / 100) * 100} MM$
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                style={{ color: setVarianveColor(props.usdVar) }}
              >
                {props.usdVar}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{ height: '7em', width: '30%' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                TVL - ETH
              </Typography>
              <Typography variant="body1">{Math.round(props.eth / 1000 / 100) * 100} ME</Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                style={{ color: setVarianveColor(props.ethVar) }}
              >
                {props.ethVar}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{ height: '7em', width: '30%' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                TVL - BTC
              </Typography>
              <Typography variant="body1">{Math.round(props.btc / 1000 / 100) * 100} MB</Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                style={{ color: setVarianveColor(props.btcVar) }}
              >
                {props.btcVar}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{ height: '7em', width: '30%', marginTop: '0.5em' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                TVL - DAI
              </Typography>
              <Typography variant="body1">
                {Math.round(props.dai / 1000000 / 100) * 100} MMDAI
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                style={{ color: setVarianveColor(props.daiVar) }}
              >
                {props.daiVar}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </Paper>
  );
}
