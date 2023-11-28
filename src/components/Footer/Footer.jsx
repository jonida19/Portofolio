import React from 'react'
import "../Footer/footer.css"
import { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className='footer'> 
      Built from scratch with &nbsp;<FavoriteIcon/> &nbsp;&nbsp;
      &#169; Copyright {currentYear} Jonida Durbaku. All rights reserved.
    </footer>
  )
}

export default Footer