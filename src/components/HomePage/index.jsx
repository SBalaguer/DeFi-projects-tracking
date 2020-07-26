import React from 'react';
import List from '@material-ui/core/List';

import SingleProjectList from '../SingleProjectList/index';

const HomePage = ({ consolidatedData, DOTImpact }) => {
  return (
    <List style={{ width: '62%' }}>
      {consolidatedData &&
        consolidatedData.map((project) => {
          return (
            <SingleProjectList
              key={Date.now() * Math.random()}
              DOTImpact={DOTImpact}
              {...project}
            />
          );
        })}
    </List>
  );
};

export default HomePage;
