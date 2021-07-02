import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TeamAvatars from '../../components/team-avatars/team-avatars';
import Header from '../../components/header/header';
import SliderImg from '../../components/slider-img/slider-img';
import { names } from '../../utils/teamNames';
import Footer from '../../components/footer/footer';
import './dashboard.css';

const Dashboard = () => {

    const history = useHistory();
    const handleClickUpload = () => history.push('upload')
    return (  
        <div className="dashboard-page">
            <Header />
            <div className="dashboard-container">
                <div className="d-flex flex-column justify-content-evenly">
                    <h2>Do you want to know if you comply with the safety distance?</h2>
                    <Button 
                        className="align-self-center" 
                        variant="contained" 
                        color="secondary" 
                        onClick={handleClickUpload}
                        size="large"
                    >
                        START NOW
                    </Button>
                </div>
                <SliderImg />
            </div>
            <h1 className="m-4 text-white align-self-center">The team</h1>
            <div className="team-container">
                {names.map((item)=> (
                        <TeamAvatars imgAvatar={item.avatar} name={item.name} letter={item.letter}/>
                ))}
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}
 
export default Dashboard;