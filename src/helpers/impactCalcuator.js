import DOTImpact from '../helpers/DOTimpact.json';

export default (project) => {
  let impact;

  if (
    project.defiPulse &&
    project.defiPulse.value.tvl.USD.value > 0 &&
    project.dappRadar &&
    project.dappRadar.totalVolumeLastWeekInUSD > 0
  ) {
    //the project has volume and tvl
    const volUsers =
      project.dappRadar.totalVolumeLastWeekInUSD / Number(project.dappRadar.weeklyUsers) / 1000;
    const volTransact =
      project.dappRadar.totalVolumeLastWeekInUSD / project.dappRadar.txLastWeek / 1000;
    impact =
      0.2 * Number(project.dappRadar.weeklyUsers) +
      0.1 * project.dappRadar.txLastWeek +
      (0.3 * project.defiPulse.value.tvl.USD.value) / 1000 +
      0.1 * (volUsers + volTransact);
    const DOTImpactValue = DOTImpact[project.defiPulse.name];
    return impact * DOTImpactValue;
  } else if (project.dappRadar && project.dappRadar.volumeLastDay > 0) {
    //the project has volume and no tvl
    //volume will be a proxy of tvl
    const volUsers =
      project.dappRadar.totalVolumeLastWeekInUSD / Number(project.dappRadar.weeklyUsers) / 1000;
    const volTransact =
      project.dappRadar.totalVolumeLastWeekInUSD / project.dappRadar.txLastWeek / 1000;
    impact =
      0.2 * Number(project.dappRadar.weeklyUsers) +
      0.1 * project.dappRadar.txLastWeek +
      (0.3 * project.dappRadar.totalVolumeLastWeekInUSD) / 1000 +
      0.1 * (volUsers + volTransact);
    const DOTImpactValue = DOTImpact[project.dappRadar.slug];
    return impact * DOTImpactValue;
  } else if (project.defiPulse && project.defiPulse.value.tvl.USD.value > 0) {
    //the project has tvl and no volume and no users and no txs
    //tvl will be a proxy of volume
    //average defi users and avg defi transactions used
    const averageUsers = 33411 / 4 / 5;
    const averageTxs = 6431.716049382716 / 5;

    const volUsers = project.defiPulse.value.tvl.USD.value / averageUsers / 1000;
    const volTransact = project.defiPulse.value.tvl.USD.value / averageTxs / 1000;
    impact =
      0.2 * averageUsers +
      0.1 * averageTxs +
      (0.3 * project.defiPulse.value.tvl.USD.value) / 1000 +
      0.1 * (volUsers + volTransact);
    const DOTImpactValue = DOTImpact[project.defiPulse.name];
    return impact * DOTImpactValue;
  } else {
    return 0;
  }
};
