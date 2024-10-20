import React from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DiscountBadge from './DiscountBadge';

const PricingCard = ({ plan }) => {
  return (
    <Card
      elevation={3}
      style={{
        width: '280px',
        height: '800px',
        borderRadius: '7px',
        paddingBottom: '20px',
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '0.89px solid #ccc',
        background: plan.title === 'Booster' ? 'linear-gradient(180deg, #1E429F 0%, #0B1839 100%)' : '',
        color: plan.title === 'Booster' ? 'white' : '',
        fontFamily: 'Inter',
      }}
    >
      <CardContent style={{ marginTop: '-10px' }}>
        {/* Title and Popular Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}>
          <Typography variant="h6" style={{ textAlign: 'left', fontFamily: 'Inter' }}>
            {plan.title}
          </Typography>
          {plan.title === 'Booster' && (
            <div style={{
              background: '#CEE0FF',
              borderRadius: '12px',
              padding: '4px 8px',
              fontFamily: 'Inter',
              fontSize: '12px',
              marginLeft: '19px',
            }}>
              <Typography variant="body2" style={{ color: '#053D99', fontWeight: '500' }}>
                Popular
              </Typography>
            </div>
          )}
        </div>

        {/* Price Section with Discount */}
        <Box display="flex" alignItems="center" marginTop="10px" textAlign="left">
          <Typography variant="h4" color={plan.title === 'Booster' ? 'white' : 'black'} style={{ fontWeight: 'bolder', fontFamily: 'Inter', fontSize: '2.0rem' }}>
            {plan.price}
          </Typography>
          {plan.frequency && (
            <Typography variant="body2" color={plan.title === 'Booster' ? 'white' : 'grey'} style={{ fontWeight: 'bold', fontSize: '1rem', marginLeft: '8px', fontFamily: 'Inter' }}>
              {plan.frequency}
            </Typography>
          )}
        </Box>

        {/* Original Price */}
        {plan.originalPrice && (
          <Box display="flex" alignItems="center" mt={1}>
            <DiscountBadge discount={plan.discount} />
            <Typography
              variant="body2"
              style={{
                textDecoration: 'line-through',
                color: plan.title === 'Booster' ? '#B0B0B0' : '#888',
                fontFamily: 'Inter',
                fontSize: '1.3rem',
                fontWeight: 'bolder'
              }}
            >
              {plan.originalPrice}
            </Typography>
          </Box>
        )}

        {/* Additional Text for Trial and Enterprise */}
        {plan.additionalText && (
          <Typography variant="body2" style={{ color: plan.title === 'Booster' ? '#B0B0B0' : '#888', fontSize: '0.875rem', marginTop: '8px', fontFamily: 'Inter' }}>
            {plan.additionalText}
          </Typography>
        )}

        {/* Features Section */}
        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px', textAlign: 'left', fontFamily: 'Inter' }}>
          {plan.features.map((feature, i) => (
            <li key={i} style={{ marginTop: '10px', display: 'flex', alignItems: 'center', fontFamily: 'Inter', lineHeight: '1.5' }}>
              <CheckCircleIcon style={{ marginRight: '8px', color: plan.title === 'Booster' ? 'white' : '#1F2A37', fontSize: '20px' }} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Specific Bullet Points for Each Plan */}
        {plan.title === 'Trial' && (
          <div>
            <div style={{ borderBottom: '1px solid blue', marginTop: '280px' }} />
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px', textAlign: 'left', color: 'darkgrey', fontFamily: 'Inter',  fontWeight: 'bold'}}>
              <li style={{ 
                marginTop: '10px', 
                position: 'relative', 
                paddingLeft: '20px' ,
                fontSize: '0.95rem'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  width: '2px', 
                  height: '2px', 
                  borderRadius: '50%', 
                  border: '2px solid grey', 
                  backgroundColor: 'grey' 
                }} />
                Explore product capabilities
              </li>
            </ul>
          </div>
        )}
        
        {plan.title === 'Growth' && (
          <div>
            <div style={{ borderBottom: '1px solid blue', marginTop: '235px' }} />
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px', textAlign: 'left', color: 'darkgrey', fontFamily: 'Inter',  fontWeight: 'bold'}}>
              <li style={{ 
                marginTop: '10px', 
                position: 'relative', 
                paddingLeft: '20px',
                fontSize: '0.95rem' 
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  width: '2px', 
                  height: '2px', 
                  borderRadius: '50%', 
                  border: '2px solid grey', 
                  backgroundColor: 'grey' 
                }} />
                Unlimited leads search
              </li>
              <li style={{ 
                marginTop: '10px', 
                position: 'relative', 
                paddingLeft: '20px',
                fontSize: '0.95rem' 
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  width: '2px', 
                  height: '2px', 
                  borderRadius: '50%', 
                  border: '2px solid grey', 
                  backgroundColor: 'grey' 
                }} />
                Fully enriched 15,000 leads
              </li>
              <li style={{ 
                marginTop: '10px', 
                position: 'relative', 
                paddingLeft: '20px',
                fontSize: '0.95rem' 
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  width: '2px', 
                  height: '2px', 
                  borderRadius: '50%', 
                  border: '2px solid grey', 
                  backgroundColor: 'grey' 
                }} />
                Personalized outreach at scale
              </li>
            </ul>
          </div>
        )}

        {plan.title === 'Enterprise' && (
          <div>
            <div style={{ borderBottom: '1px solid blue', marginTop: '240px' }} />
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px', textAlign: 'left', color: 'darkgrey', fontFamily: 'Inter', fontWeight: 'bold' }}>
              <li style={{ 
                marginTop: '10px', 
                position: 'relative', 
                paddingLeft: '20px' ,
                fontSize: '0.95rem'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  width: '2px', 
                  height: '2px', 
                  borderRadius: '50%', 
                  border: '2px solid grey', 
                  backgroundColor: 'grey' ,
                  
                }} />
                Perfect for High-Volume End-to-End CRM Data Enrichment
              </li>
              <li style={{ 
                marginTop: '10px', 
                position: 'relative', 
                paddingLeft: '20px',
                fontSize: '0.95rem' 
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  width: '2px', 
                  height: '2px', 
                  borderRadius: '50%', 
                  border: '2px solid grey', 
                  backgroundColor: 'grey' ,
                  fontSize: '0.875rem'
                }} />
                Unlimited list of leads with unlimited data points
              </li>
            </ul>
          </div>
        )}

        {plan.title === 'Booster' && (
        <div style={{ borderBottom: '1px solid white', marginTop: '165px' }} />
        )}

        {plan.title === 'Booster' && (
        <ul style={{ 
            listStyle: 'none', 
            paddingLeft: 0, 
            marginTop: '20px', 
            textAlign: 'left', 
            color: 'white', 
            fontFamily: 'Inter' 
        }}>
        <li style={{ 
            marginTop: '10px', 
            position: 'relative', 
            paddingLeft: '20px',
            fontSize: '0.95rem' 
        }}>
        <span style={{ 
            position: 'absolute', 
            left: 0, 
            top: '50%', 
            transform: 'translateY(-50%)', 
            width: '6px', 
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'white' 
        }} />
        Unlimited leads search
        </li>
        <li style={{ 
            marginTop: '10px', 
            position: 'relative', 
            paddingLeft: '20px' ,
            fontSize: '0.95rem'
        }}>
        <span style={{ 
            position: 'absolute', 
            left: 0, 
            top: '50%', 
            transform: 'translateY(-50%)', 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            backgroundColor: 'white' 
        }} />
        Fully enriched 15,000 leads
        </li>
        <li style={{ 
            marginTop: '10px', 
            position: 'relative', 
            paddingLeft: '20px',
            fontSize: '0.95rem'
        }}>
            <span style={{ 
                position: 'absolute', 
                left: 0, 
                top: '50%', 
                transform: 'translateY(-50%)', 
                width: '6px', 
                height: '6px', 
                borderRadius: '50%', 
                backgroundColor: 'white' 
                
                }} />
                Personalized outreach at scale
                </li>
            </ul>
            )}
        </CardContent>
        <Button 
        variant="contained"
        style={{ 
            backgroundColor: plan.title === 'Booster' ? 'white' : undefined,
            color: plan.title === 'Booster' ? 'black' : undefined, 
            fontFamily: 'Inter',
            fontSize: '0.875rem',
            textTransform: 'capitalize',
            width: '250px',
            margin: '0 auto', 
        }}
        >
        {plan.buttonLabel}
        </Button>
    </Card>
  );
};

export default PricingCard;
