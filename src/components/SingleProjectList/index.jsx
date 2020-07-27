import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import SingleProjectListDetails from '../SingleProjectListDetails/index';

import './styles.css';

export default function SingleProjectList(props) {
  const { dappRadar, defiPulse, impact, DOTImpact } = props;
  const impactPercentage = impact * 100;
  const impactCalculated = impact !== 0;
  let DOTImpactValue;
  if (dappRadar && DOTImpact[dappRadar.slug]) {
    DOTImpactValue = DOTImpact[dappRadar.slug];
  } else if (defiPulse && DOTImpact[defiPulse.name]) {
    DOTImpactValue = DOTImpact[defiPulse.name];
  }

  DOTImpactValue = DOTImpactValue === 1 ? null : DOTImpactValue;

  return (
    <>
      {(dappRadar && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="summary-container">
              <Avatar alt={dappRadar.title} src={dappRadar.logo} style={{ marginRight: '0.5em' }} />
              <div className="summary-details">
                <Typography>{dappRadar.title}</Typography>
                <Typography>
                  {dappRadar.protocols[0]} - {dappRadar.category}
                  {(impactCalculated &&
                    ` - [Total Impact: ${Math.round(impactPercentage * 100) / 100} %]`) ||
                    ''}
                  {(DOTImpactValue && ` [DOT Impact: ${DOTImpactValue}]`) || ''}
                </Typography>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <SingleProjectListDetails dappRadar={dappRadar} defiPulse={defiPulse} />
          </AccordionDetails>
        </Accordion>
      )) ||
        (defiPulse && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="summary-container">
                <Avatar style={{ marginRight: '0.5em' }}>{defiPulse.name[0].toUpperCase()}</Avatar>
                <div className="summary-details">
                  <Typography>{defiPulse.name}</Typography>
                  <Typography>
                    {defiPulse.chain} - {defiPulse.category}
                    {(impactCalculated &&
                      ` - [Total Impact: ${Math.round(impactPercentage * 100) / 100} %]`) ||
                      ''}
                    {(DOTImpactValue && ` [DOT Impact: ${DOTImpactValue}]`) || ''}
                  </Typography>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <SingleProjectListDetails
                impact={impact}
                dappRadar={dappRadar}
                defiPulse={defiPulse}
              />
            </AccordionDetails>
          </Accordion>
        )) ||
        null}
    </>
  );
}
