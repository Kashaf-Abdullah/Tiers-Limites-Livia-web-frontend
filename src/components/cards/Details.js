import React from 'react';

const Details = (props) => {
  const screenWidth = window.innerWidth;

  return (
    <div className="votrags-det">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className='text'>
            {props.text}
          </p>
          <button className={props.btn_class} role="button">
            <a href={props.btnlink} target='_blank' style={{textDecoration:"none"}}>{props.btn}</a>
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6"></div>
      </div>
    </div>
  );
}

export default Details;
