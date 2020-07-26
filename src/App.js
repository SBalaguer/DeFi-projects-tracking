import React, { Component } from 'react';

import './App.css';

import HomePage from './components/HomePage';
import Overview from './components/Overview';
import Container from '@material-ui/core/Container';

import { getAllProjectsInCategory } from './services/dappradar';
import { getAllProjects } from './services/defipulse';

import normalization from './helpers/normalization.json';
import DOTImpact from './helpers/DOTimpact.json';
import impactCalulator from './helpers/impactCalcuator';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consolidatedData: [],
      dappRadarData: [],
      defiPulseProjects: [],
      searchQuery: ''
    };
  }

  async componentDidMount() {
    const defiProjects = await getAllProjectsInCategory('defi');
    const dexProjects = await getAllProjectsInCategory('exchanges');
    const defiPulseProjects = await getAllProjects();
    let dappRadarData = [...defiProjects.list, ...dexProjects.list];

    let consolidatedData = normalization.map((namingPairs) => {
      return {
        defiPulse:
          defiPulseProjects.find((project) => project.name === namingPairs.defiPulse) || null,
        dappRadar: dappRadarData.find((project) => project.slug === namingPairs.dappRadar) || null
      };
    });

    consolidatedData = consolidatedData.map((info) => {
      const impact = impactCalulator(info);
      return { ...info, impact };
    });
    consolidatedData = this.normalizeData(consolidatedData);

    // const totalImpact = consolidatedData.reduce((acc, val) => {
    //   if (val.impact) {
    //     return (acc += val.impact);
    //   } else {
    //     return acc;
    //   }
    // }, 0);

    // consolidatedData = consolidatedData
    //   .map((value) => {
    //     if (value.impact) {
    //       return { ...value, impact: value.impact / totalImpact };
    //     } else {
    //       return { ...value, impact: value.impact / totalImpact };
    //     }
    //   })
    //   .sort((a, b) => {
    //     return b.impact - a.impact;
    //   });

    this.setState({
      dappRadarData,
      defiPulseProjects,
      consolidatedData
    });
  }

  normalizeData = (dataToBeNormalized) => {
    let consolidatedData = dataToBeNormalized;
    consolidatedData = dataToBeNormalized.sort((a, b) => {
      return b.impact - a.impact;
    });
    const min = 0;
    const max = consolidatedData[0].impact;
    return (consolidatedData = consolidatedData.map((value) => {
      const impact = (value.impact - min) / (max - min);
      return { ...value, impact };
    }));
  };

  onSearchChange = (event) => {
    const value = event.target.value;

    this.setState({ searchQuery: value });
  };

  filterConsilidatedData = (data) => {
    return data.filter((value) => {
      const searchQuery = this.state.searchQuery.toUpperCase();
      let dappRadarName;
      let defiPulseName;
      if (value.dappRadar) {
        dappRadarName = value.dappRadar.slug.toUpperCase();
        return dappRadarName.includes(searchQuery);
      }
      if (value.defiPulse) {
        defiPulseName = value.defiPulse.name.toUpperCase();
        return defiPulseName.includes(searchQuery);
      }
    });
  };

  render() {
    const { consolidatedData, searchQuery } = this.state;
    return (
      <Container
        maxWidth="lg"
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}
      >
        <Overview
          DOTImpact={DOTImpact}
          onSearchChange={this.onSearchChange}
          searchQuery={searchQuery}
          consolidatedData={consolidatedData}
        />
        <HomePage
          DOTImpact={DOTImpact}
          consolidatedData={this.filterConsilidatedData(consolidatedData)}
          //consolidatedData={consolidatedData}
        />
      </Container>
    );
  }
}

export default App;
