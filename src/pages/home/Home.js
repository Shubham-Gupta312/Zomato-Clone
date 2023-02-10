import React, { useState } from 'react'
import Delivery from '../../components/delivery/Delivery';
import DiningOut from '../../components/diningOut/DiningOut';
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import NightLife from '../../components/nightLife/NightLife';
import TabOptions from '../../components/tabOption/TabOptions'

const correctScreen = (tab) => {
    switch(tab){
        case "Delivery":
            return <Delivery/>;
        case "Dining Out":
            return <DiningOut/>;
        case "NightLife":
            return <NightLife/>;
        default:
            return <Delivery/>;
    }

};

const Home = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {correctScreen(activeTab)}
      <Footer/>
    </div>
  )
}

export default Home
