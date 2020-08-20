import React from 'react';
import Logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'
const Landing =()=>{
    return(
       <div id="page-landing">
           <div id="page-landing-content" className="conteiner">
               <div className="logo-conteiner">
                   <img src={Logo} alt="Proffy"/>
                   <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landing} 
                alt="plataforma de estudos" 
                className="hero-image"/>
              
              
               <div className="buttons-conteiner">
                <a href="#" className="study">
                    <img src={studyIcon} alt="estudar"/>
                    Estudar
                </a>
                <a href="#" className="give-classes">
                    <img src={giveClassesIcon} alt="estudar"/>
                    Dar Aulas
                </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt=""/>
                </span>
           </div>
       </div>
    )
}
export default Landing;