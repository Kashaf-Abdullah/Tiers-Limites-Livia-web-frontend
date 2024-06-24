import React from 'react';

const MeineVortragsthemenCard = ({ topics,heading }) => {
  const listStyle = {
    fontSize: '0.7rem',
    listStyleType: 'none',
    paddingLeft: '0rem', 
    color: 'black',
    marginTop: '32px',
  };

  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
      <div className="MeineVortragsthemen-card">
        <h3 style={{ textAlign: 'center', fontSize: '17px' }}>{heading}</h3>
        <ul style={listStyle}>
          {topics.map((topic, index) => (
            <li key={index} style={{ margin: '10px 0', color: 'var(--black)' }}>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeineVortragsthemenCard;
