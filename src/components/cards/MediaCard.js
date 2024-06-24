

import React from "react";
const truncateText = (text, limit) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const MediaCard = (props) => {
  const { imagee, head, text, link } = props;
  
  // Truncate the heading, description, and link text with specific limits
  const truncatedHeading = truncateText(head, 20); // Change 20 to your desired character limit
  const truncatedText = truncateText(text, 100); // Change 100 to your desired character limit
  const truncatedLink = truncateText(link, 30); // Change 30 to your desired character limit

  return ( 

    <div className="media-card">
    <div style={{ width: '100%', height: '16rem', overflow: 'hidden', borderRadius: '15px' }}>
      <img 
        src={`http://localhost:3001/images/${imagee}`}
        alt={head} 
        style={{ width: "100%", height: "100%", objectFit: "contain" }} 
      />
    </div>
    <p className="media-heading" style={{ color: "var(--darkblue)", fontWeight: "600", margin: "1rem 0 0.5rem 0" }}>
      {truncatedHeading}
    </p>
    <p className="media-text" style={{ margin: "5px" }}>
      {truncatedText}
    </p>
    <a className="media-link" href={link} style={{ marginBottom: "3rem", textDecoration: "none", color: "black" }}>
      {truncatedLink}
    </a>
  </div> 
  );
};

export default MediaCard;
