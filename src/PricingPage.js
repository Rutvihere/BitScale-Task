import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';
import PricingCard from './PricingCard';

const PricingPage = () => {
  const [alignment, setAlignment] = useState('monthly');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const plans = [
    {
      title: 'Trial',
      price: 'Try now',
      additionalText: 'Get personalized template',
      features: [
        '25+ data sources',
        'GPT4, LinkedIn and others',
        'Access to slack community',
        '10+ templates to scale your outbound',
      ],
      buttonLabel: 'Try Now',
    },
    {
      title: 'Growth',
      price: '$229',
      originalPrice: '$459',
      discount: '50% off',
      frequency: '/month',
      features: [
        <span style={{ color: '#1E90FF', fontWeight: 'bold' }}>8,000 Credits</span>,
        'Webhook, HTTP API',
        'Credit rollover',
        'Outbound email integrations',
        'Dedicated 3 hours of support',
      ],
      buttonLabel: 'Continue with Growth',
    },
    {
      title: 'Booster',
      price: '$499',
      originalPrice: '$999',
      discount: '50% off',
      frequency: '/month',
      features: [
        '25,000 Credits',
        'Webhook, HTTP API',
        'Credit rollover',
        'Outbound email integrations',
        'Dedicated 8 hours of support',
        'Advanced models',
        '2 way Hubspot integration',
      ],
      buttonLabel: 'Continue with Booster',
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      additionalText: 'For individual pricing',
      features: [
        'Data privacy certification',
        'Priority Support',
        'Dedicated Bitscale expert',
        'Private Slack Channel',
        'Collaborative workspace and templates',
      ],
      buttonLabel: 'Try Now',
    },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Inter' }}>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          style={{
            backgroundColor: '#e0f2fe',
            borderRadius: '10px',
            padding: '5px',
          }}
        >
          <ToggleButton value="monthly" style={{ border: 'none', fontWeight: 'bold', backgroundColor: alignment === 'monthly' ? '#ffffff' : '#e0f2fe' }}>
            Monthly
          </ToggleButton>
          <ToggleButton value="annual" style={{ border: 'none' , fontWeight: 'bold'}}>
            Annual
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Grid container justifyContent="center" spacing={3} textAlign="left">
        {plans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <PricingCard plan={plan} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PricingPage;
