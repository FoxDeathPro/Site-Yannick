import React from 'react';
import Tabs from "../../components/Tabs/tabs";
import tabsData from '../../data/tabs';

const address = () => {
  return (
    <div>
      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default address;
