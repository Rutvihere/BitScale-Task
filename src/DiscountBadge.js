import React from 'react';
import { Box, Typography } from '@mui/material';

const DiscountBadge = ({ discount }) => {
  return (
    <Box
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      padding="2px 8px"
      gap="4px"
      width="70px"  
      height="20px" 
      bgcolor="#ECFDF3"
      borderRadius="12px" 
      marginRight="10px" 
    > 

      <Typography
        variant="body2"
        fontFamily="Lato"
        fontWeight={500}
        fontSize="16px" 
        lineHeight="15px"
        textAlign="center"
        color="#027A48"
        noWrap 
      >
        {discount}
      </Typography>
    </Box>
  );
};

export default DiscountBadge;
