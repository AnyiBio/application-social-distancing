import React from 'react'
import FormVideo from '../components/form/form-video';
import Header from '../components/header/header';
import SliderImg from '../components/slider-img/slider-img';
import './dashboard.css';

const Dashboard = () => {
    return (  
    <>
        <Header />
        <div className="dashboard-container">
            <h2>Do you want to know if you comply with the safety distance?</h2>
            <SliderImg />
        </div>
        <FormVideo />
    </>);
}
 
export default Dashboard;