import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import setVarianveColor from '../../helpers/setVarianceColor';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function DappRadarListData(props) {
  return (
    <Paper
      style={{
        width: '100%',
        padding: '0.8em',
        marginTop: '1em'
      }}
      elevation={0}
    >
      <h2 style={{ marginTop: '0', marginBottom: '1em' }}>DappRadar Data</h2>
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
                Users
              </Typography>
              <Typography variant="body1">{props.users}</Typography>
              <Typography
                variant="subtitle2"
                style={{ color: setVarianveColor(props.usersStatus) }}
                gutterBottom
              >
                {props.usersChange} vs DA
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{ height: '7em', width: '30%' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Volume
              </Typography>
              <Typography variant="body1">
                {Math.round(props.volume / 1000000 / 10) * 10} MM$
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{ height: '7em', width: '30%' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Transactions
              </Typography>
              <Typography variant="body1">{props.txs}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item style={{ height: '7em', width: '100%', marginTop: '0.5em' }}>
          <Card style={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Evolution
              </Typography>
              <Typography variant="body1">
                <img alt="graph" src={props.graph}></img>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </Paper>
  );
}
