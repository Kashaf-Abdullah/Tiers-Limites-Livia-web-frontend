import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import i1 from '../../assets/info1.PNG';

const InfoCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="row" style={{ margin: "5rem 1rem 0 0" }}>
    <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center" data-aos="fade-in">

        <img src={props.image} alt="" className="info-card-img" />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6">
        <h4>{props.head}</h4>
        <p className="text" style={{color:"#182C47"}}>{props.text}</p>
        <button className="in-btn" role="button"  data-aos="fade-in">
      
        <a href={props.btnlink} target='_blank' style={{textDecoration:"none"}}> Weiterlesen</a>

       </button>
      </div>
    </div>
  );
};

export default InfoCard;
