export default [
  {
    Header: 'Project Name',
    accessor: (project) => {
      if (project.dappRadar) {
        return project.dappRadar.title;
      } else if (project.defiPulse) {
        return project.defiPulse.name;
      } else {
        return 'N/A';
      }
    }
  },
  {
    Header: 'Volume P7D MMUSD',
    accessor: (project) => {
      if (project.dappRadar) {
        return Math.round((project.dappRadar.tokenVolumeLastWeekInUSD / 1000000) * 100) / 100;
      } else {
        return 'N/A';
      }
    }
  },
  {
    Header: 'TXs P7D',
    accessor: (project) => {
      if (project.dappRadar) {
        return `${Number(project.dappRadar.txLastWeek)}`;
      } else {
        return 'N/A';
      }
    }
  },
  {
    Header: 'Users P7D',
    accessor: (project) => {
      if (project.dappRadar) {
        return `${Number(project.dappRadar.weeklyUsers)}`;
      } else {
        return 'N/A';
      }
    }
  },
  {
    Header: 'Users vDA',
    accessor: (project) => {
      if (project.dappRadar) {
        return project.dappRadar.changes.dau.label;
      } else {
        return 'N/A';
      }
    }
  },
  {
    Header: 'TVL MMUSD',
    accessor: (project) => {
      if (project.defiPulse) {
        return Math.round((project.defiPulse.value.tvl.USD.value / 1000000) * 100) / 100;
      } else {
        return 'N/A';
      }
    }
  },
  {
    Header: 'Impact',
    accessor: (project) => {
      return Math.round(project.impact * 100) / 100;
    }
  }
];
