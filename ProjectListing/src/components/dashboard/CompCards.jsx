import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import CompanyCard from '../cards/CompanyCard';
import CompanyCardData from '../cards/CompanyCardData';

export default function CompCards() {

  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    fetchBusinessData();
  }, []);

  const fetchBusinessData = () => {
    fetch(`${API_LINK}/api/business`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setBusinessData(data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 className="text-3xl">
        Businesses
      </h1>
      <div className='h-full flex flex-wrap justify-center p-4 item-top'>
        {businessData.slice(0, 6).map((BusinessData, index) => (
          <CompanyCardData key={index} companyData={BusinessData}/>
        ))}
        {/* <CompanyCardData />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard /> */}
      </div>
    </>
  )
}
