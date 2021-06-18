import React from 'react'
import TeamAvatars from '../../components/team-avatars/team-avatars';
import Header from '../../components/header/header';
import SliderImg from '../../components/slider-img/slider-img';
import anyi from '../../assets/img/anyi.jpg';
import edu from '../../assets/img/edu.jpg';
import { names, nickNames } from '../../utils/teamNames'
import './dashboard.css';

const Dashboard = () => {
    return (  
        <div className="dashboard-page">
            <Header />
            <div className="dashboard-container">
                <h2>Do you want to know if you comply with the safety distance?</h2>
                <SliderImg />
            </div>
            <h1>The team</h1>
            <div className="team-container">
                {names.map((item, index)=> (
                        <TeamAvatars imgAvatar={index === 0 ? anyi : ''} name={item}/>
                ))}
            </div>
        </div>
    );
}
 
export default Dashboard;