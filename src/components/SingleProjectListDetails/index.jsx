import React from 'react';

import Grid from '@material-ui/core/Grid';

import './styles.css';
import DappRadarListData from '../DappRadarListData/index';
import DefiPulseListData from '../DefiPulseListData/index';

export default function SingleProjectListDetails({ dappRadar, defiPulse }) {
  return (
    <>
      {(dappRadar && (
        <div>
          <div className="description">
            <span className="desciption-text">
              {dappRadar.description.replace('<p>', '').replace('</p>', '')}
            </span>
            <a className="url" href={dappRadar.url} target="_blank" rel="noopener noreferrer">
              {dappRadar.url}
            </a>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <DappRadarListData
                    users={dappRadar.weeklyUsers}
                    usersChange={dappRadar.changes.dau.label}
                    usersStatus={dappRadar.changes.dau.status}
                    volume={dappRadar.totalVolumeLastWeekInUSD}
                    txs={dappRadar.txLastWeek}
                    graph={dappRadar.hourlyDauGraphUrl}
                  />
                </Grid>
              </Grid>
              <Grid item xs={6}>
                {(defiPulse && (
                  <Grid container spacing={2}>
                    <DefiPulseListData
                      usd={defiPulse.value.tvl.USD.value}
                      usdVar={defiPulse.value.tvl.USD.relative_1d}
                      eth={defiPulse.value.tvl.ETH.value}
                      ethVar={defiPulse.value.tvl.ETH.relative_1d}
                      btc={defiPulse.value.tvl.BTC.value}
                      btcVar={defiPulse.value.tvl.BTC.relative_1d}
                      dai={defiPulse.value.balance.ERC20.DAI.value}
                      daiVar={defiPulse.value.balance.ERC20.DAI.relative_1d}
                    />
                  </Grid>
                )) ||
                  null}
              </Grid>
            </Grid>
          </div>
        </div>
      )) ||
        (defiPulse && (
          <div>
            <div className="description">
              <span className="desciption-text"></span>
              <a className="url" href={defiPulse.website} target="_blank" rel="noopener noreferrer">
                {defiPulse.website}
              </a>
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}></Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <DefiPulseListData
                      usd={defiPulse.value.tvl.USD.value}
                      usdVar={defiPulse.value.tvl.USD.relative_1d}
                      eth={defiPulse.value.tvl.ETH.value}
                      ethVar={defiPulse.value.tvl.ETH.relative_1d}
                      btc={defiPulse.value.tvl.BTC.value}
                      btcVar={defiPulse.value.tvl.BTC.relative_1d}
                      dai={defiPulse.value.balance.ERC20.DAI.value}
                      daiVar={defiPulse.value.balance.ERC20.DAI.relative_1d}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        )) ||
        null}
    </>
  );
}
