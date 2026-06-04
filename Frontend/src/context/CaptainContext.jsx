import React from 'react';
import axios from 'axios';



const CaptainContext = ({children}) => {
    const navigate = useNavigate();

  return (
    <div>
        {children}
    </div>
  )
}

export default CaptainContext