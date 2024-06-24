import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
const ConsultingCard = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 my-3">
<div class="flip-card-cons" tabIndex="0">
  <div class="flip-card-inner-cons">
  <div class="flip-card-front-cons consulting-cards" style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly", borderRadius:"20px"}}>

       <h4 style={{color: "var(--skin)"}}>{props.head}</h4>
        {/* <p className="text" style={{color: "var(--skin)"}}>

{props.text}

        </p> */}
  
    
    </div>
    <div class="flip-card-back-cons">
    <div className="consulting-cards " style={{textAlign:"center",backgroundColor:"var(--darkblue)",color:"var(--white)",padding:"2rem",margin:"0.7rem 0",borderRadius:"20px",width:"100%",height:"100%"}}  data-aos="fade-in">
        {/* <h4 style={{color: "var(--skin)"}}>{props.head}</h4> */}
        <p className='text' style={{color: "var(--skin)", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
            {props.text}
          </p>
    </div>
    </div>

</div>
</div>
    
        
          </div>
  )
}

export default  ConsultingCard
