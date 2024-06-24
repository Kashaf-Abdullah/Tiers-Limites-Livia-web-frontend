



import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import cons1 from "../assets/cons1.PNG";
import ConsultingCard from "./cards/ConsultingCard";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-bootstrap/Modal";
import { Popup, DatePicker } from "react-date-time-picker-popup";
import "react-date-time-picker-popup/dist/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import the arrow left icon from Font Awesome
import ConsultingSection from "./ConsultingSection";
import axios from 'axios'
import {  Button, Card,  Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Consulting = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [timeZones, settimeZones] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  // const [selectedDates, setSelectedDates] = useState([]);
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState(new Date());
  
  const [selectedDate, setSelectedDate] = useState(null); // State to keep track of selected date
  const [timeSlots, setTimeSlots] = useState([]); // State to store time slots
  const [schedules, setSchedules] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [message, setMessage] = useState('');

  const containerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "800px",
    maxHeight: "562px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "3px",
    color: "#000",
    zIndex:"1000"
  };

  const sectionStyle = {
    width: isWide ? "30%" : "30%",
    display: "inline-block",
    verticalAlign: "top",
    padding: "10px",
    marginTop: "20px",
    transition: "width 0.3s ease-in-out", // Add transition for smooth effect
  };

  const calendarSectionStyle = {
    width: isWide ? "70%" : "70%",
    display: "inline-block",
    verticalAlign: "top",
    padding: "10px",
    marginTop: "20px",
    borderLeft: "1px solid #000",
  };

  const renderTimeZones = () => {
    const timeZone = [];
    for (let i = 1; i <= 24; i++) {
      const appoint = i % 5 === 0 ? false : true;
      timeZone.push({ time: i, appoint });
    }
    settimeZones(timeZone);
  };

  const formSectionStyle = {
    width: "70%",
    fontSize:'13px',
    display: "inline-block",
    verticalAlign: "top",
    marginTop: "10px",
    padding: "0 20px",
    borderLeft:'1px solid #000'
  };

  const days = [ "SO", "MO", "DI", "MI", "DO", "FR","SA"];


  const updateCurrentDate = (newDate) => {
    setCurrentDate(newDate);
  };

  function isSameDate(date1, date2) {
    const d1 = date1 instanceof Date ? date1 : new Date(date1);
    const d2 = date2 instanceof Date ? date2 : new Date(date2);

    

    // Compare the dates
    return d1.toDateString() === d2.toDateString();
  }

  const getCurrentMonthYear = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();
    return `${currentMonth} ${currentYear}`;
  };
  const getWeeksOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    const weeksArray = [];
    let week = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      week.push("");
    }

    for (let i = 1; i <= daysInMonth; i++) {
      week.push(new Date(year, month, i));
      if (new Date(year, month, i).getDay() === 6 || i === daysInMonth) {
        while (week.length < 7) {
          week.push("");
        }
        weeksArray.push([...week]);
        week = [];
      }
    }

    return weeksArray;
  };

  const today = new Date();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    renderTimeZones();
    updateCurrentDate(new Date());
  }, []);


  // const handleSubmit = (dates) => {
  //   setSelectedDates(dates);
  //   setShowContactForm(true);
  //   setOpen(false);
  // };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };
  const border_style = {
    border: "2px solid #8a8a8a",
  };

  const handleSubmit = (selectedDateTime) => {
    // Handle submission of selected date and time
    console.log("Selected Date and Time:", selectedDateTime);
    setVisible(false); // Close the date-time picker popup
    setShowContactForm(true); // Open the contact form
  };

  useEffect(() => {
    if (visible) {
      // When the form is visible, disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // When the form is hidden, enable scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to re-enable scrolling when component unmounts or visibility changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  const openForm = () => {
    setVisible(true);
  };

  const closeForm = () => {
    setVisible(false);
  };

  
  // const today = new Date();

  // const isSameDate = (date1, date2) => {
  //   return (
  //     date1.getDate() === date2.getDate() &&
  //     date1.getMonth() === date2.getMonth() &&
  //     date1.getFullYear() === date2.getFullYear()
  //   );
  // };

  
  // const [timeSlots, setTimeSlots] = useState([]);  
  
  const [specialDates, setSpecialDates] = useState([]);
  useEffect(() => {
    const fetchSpecialDates = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/schedules');
        const specialDatesFromDB = response.data.map(entry => new Date(entry.date));
        setSpecialDates(specialDatesFromDB);
      } catch (error) {
        console.error('Error fetching special dates:', error);
      }
    };
    fetchSpecialDates();
  }, []);

  const fetchTimeSlots = async (date) => {
    try {
      const formattedDate = new Date(date);
      const response = await axios.get('http://localhost:3001/api/schedules');
      const matchingEntry = response.data.find(entry => {
        const entryDate = new Date(entry.date);
        return formattedDate.toDateString() === entryDate.toDateString();
      });

      if (matchingEntry) {
        setTimeSlots(matchingEntry.times);
      } else {
        setTimeSlots([]);
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
    }
  };
  const selectTime = (time) => {
    console.log('Time selected:', time);
    setSelectedTime(time);
    console.log('Selected time state updated to:', time);
  };
  
  
  // const [selectedDate, setSelectedDate] = useState(null);
const [selectedTime, setSelectedTime] = useState(null);

 


  // form 

  const [formValues, setFormValues] = useState({
    date: '',
    time: '',
    firma: '',
    vorname: '',
    email: '',
    anrede: '',
    nachname: '',
    telefon: '',
    ziel: ''
  });
  // State to manage visibility
  // const [showContactForm, setShowContactForm] = useState(true);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/schedulemeeting');
      setSchedules(response.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };
  const handleDateClick = async (date) => {
    setSelectedDate(date);
    await fetchTimeSlots(date);
    setIsWide(true);

    

  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      console.error('Date and time must be selected before submitting the form.');
      return;
    }
    setShowConfirmModal(true);
  };
  const confirmSubmit = async () => {
    try {
      const formData = {
        ...formValues,
        date: selectedDate,
        time: selectedTime,
      };
      const response = await axios.post('http://localhost:3001/api/schedulemeeting', formData);
      await sendEmailNotification(formData);
     
      setMessage('Form data saved successfully!');
      setShowConfirmModal(false);
      
      setVisible(false);
      // toast.success("scedule is succesfuully email");

  
         window.location.reload(); // Reload the page
     
    } catch (error) {
      setMessage('Error saving form data');
      console.error('Error saving form data:', error);
    }
  };
  const sendEmailNotification = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3001/api/sendEmail', formData);
      console.log(response.data);
      // Handle email sent successfully
    
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle email sending error
    }
  };


  return (
    <Container id="consulting">
     
<ConsultingSection/>
      <div className="votrags-det" style={{ marginTop: "1.9rem" }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
           <p className="text">
           Bereit, Ihre Social-Media-Präsenz auf das nächste Level zu bringen? Buchen Sie jetzt Ihren kostenlosen Ersttermin und lassen Sie uns gemeinsam Ihren Erfolgsweg planen! Ich stehe bereit, um Ihnen massgeschneiderte Lösungen anzubieten, die Ihre Marke strahlen lassen.
           </p>

            <button
            className="cons-btn"
        role="button"
        onClick={openForm}>
              <a style={{ textDecoration: "none", color: "var(--darkblue)" }}>
                Jetzt unverbindliches Erstgespräch buchen
              </a>
            </button>
            {visible && (
              <div className="overlay">
              <div style={containerStyle}>
                <div style={sectionStyle}>

              
                  {/* First section content */}
                  <h6 className="calender-left">Unverbindliches Erstgespräch
buchen</h6>
                  {/* <p style={{ fontSize: "14px" }}>consultation</p> */}
                  <div style={{ marginTop: "30px" }}>
                    <svg
                      style={{ width: "15px", height: "15px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    <span style={{ fontSize: "13px", marginLeft: "10px",fontWeight:"lighter" }}>
                      15min
                    </span>
                  </div>

                  {/* <p style={{ fontSize: "12px", marginTop: "20px" }}>
                    Text about the rllbai conversatyone e.g- It will happen or
                    e.g. that this conversation will be held on google meets and
                    you will receive the code 15 minutes before meeting
                  </p> */}
                  <button
              role="button"
              onClick={closeForm}
              className="close-button"
              style={{width:"23px",height:"27px" ,position: "fixed", top: "3px", left: "2%", transform: "translateX(-50%)",backgroundColor:"var(--darkblue)",color:"white" }}
>
    <FontAwesomeIcon icon={faTimes} style={{ color: "var(--white)" }} />
</button>


                </div>
                {!showContactForm ? (
                  <div style={{ ...calendarSectionStyle }}>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          width: isWide ? "60%" : "100%",
                          display: "inline-block",
                          transition: "width 0.3s ease-in-out",
                        }}
                      >
                       <div className="form-para" style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
                       <h6 style={{ fontSize: "13px", textAlign: "center",fontWeight:"lighter"  }}>
                        Datum & Uhrzeit wählen
                        </h6>
                   
<button
  style={{
    border: "1px solid #fff",
    // paddingTop: "10px",
    // paddingBottom: "10px",
    fontSize: "12px",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
  onClick={() => setIsWide(!isWide)}
>
  {isWide ? (
    <>
      <FaArrowLeft style={{ marginRight: "5px" }} /> {/* Add the arrow left icon */}
      
    </>
  ) : (
    <>
  
      <FaArrowRight style={{ marginLeft: "5px" }} /> {/* Add the arrow right icon */}
    </>
  )}
</button>
</div>
                       
                        <div style={{ textAlign: "center", marginTop: "30px" }}>
                          <button
                            style={{
                              marginRight: "10px",
                              border: "none",
                              background: "#00000000"
                            
                            }}
                            onClick={() => {
                              const newDate = new Date(currentDate);
                              newDate.setMonth(newDate.getMonth() - 1);
                              updateCurrentDate(newDate);
                            }}
                          >
                            <svg
                              style={{ width: "12px", height: "12px" }}
                              version="1.0"
                              xmlns="http://www.w3.org/2000/svg"
                              width="512.000000pt"
                              height="512.000000pt"
                              viewBox="0 0 512.000000 512.000000"
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <g
                                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#000000"
                                stroke="none"
                              >
                                <path
                                  d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188
                            -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123
                            1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163
                            177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978
                            c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97
                            -127 119 -175 137 -71 27 -136 27 -202 2z"
                                />
                              </g>
                            </svg>
                          </button>
                          <span>{getCurrentMonthYear()}</span>
                          <button
                            style={{
                              marginLeft: "10px",
                              border: "none",
                              background: "#00000000",
                            }}
                            onClick={() => {
                              const newDate = new Date(currentDate);
                              newDate.setMonth(newDate.getMonth() + 1);
                              updateCurrentDate(newDate);
                            }}
                          >
                            <svg
                              style={{ width: "12px", height: "12px" }}
                              version="1.0"
                              xmlns="http://www.w3.org/2000/svg"
                              width="512.000000pt"
                              height="512.000000pt"
                              viewBox="0 0 512.000000 512.000000"
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <g
                                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#000000"
                                stroke="none"
                              >
                                <path
                                  d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                            -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                            c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                            -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                            1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                            -1230 1193 -72 26 -136 26 -207 -1z"
                                />
                              </g>
                            </svg>
                          </button>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                          }}
                        >
                          {days.map((label, index) => (
                            <div
                              key={index}
                              style={{
                                flex: 1,
                                fontSize: "13px",
                                textAlign: "center",
                              }}
                            >
                              {label}
                            </div>
                          ))}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            marginTop: "10px",
                          }}
                        >
                        {getWeeksOfMonth().map((week, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom:"6px"
            }}
          >
            {week.map((date, dayIndex) => {
              const isToday = isSameDate(date, new Date()); // Assuming today's date is fetched correctly
              const isSpecialDate = specialDates.some((specialDate) => isSameDate(date, specialDate));
              return (
                <div
                  key={dayIndex}
                  style={{
                    // flex: "0 0 14%",
                    fontSize: "13px",
                    textAlign: "center",
                    padding: "5px",
                    width:"35px",
                    borderRadius: "50%", // Make the date div round
                    border:  isSpecialDate ? "2px solid #000" : "0px solid yellow",
                  }}
                  onClick={() => {
                    if (isSpecialDate) {
                      handleDateClick(date);
                      console.log(date); // Yahaan value console mein print ho rahi hai
                    }
                  }}
                >
                  {date instanceof Date ? date.getDate() : date}
                </div>
  );
})}

                            </div>
                          ))}
                        </div>

                        <div style={{ marginTop: "30px", marginLeft: "10px" }}>
                          <button
                            style={{
                              marginRight: "10px",
                              border: "none",
                              fontSize: "12px",
                              background: "#00000000",
                              fontWeight:"lighter" 
                            }}
                            onClick={() => setIsWide(!isWide)}
                          >
                            Zeitzone
                          </button>
                        </div>

                        <div style={{ marginTop: "20px", marginLeft: "10px" }}>
                          <svg
                            style={{ width: "12px", height: "12px" }}
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="512.000000pt"
                            height="512.000000pt"
                            viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <g
                              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                              fill="#000000"
                              stroke="none"
                            >
                              <path
                                d="M2360 5114 c-114 -11 -328 -47 -434 -75 -352 -90 -701 -266 -982
                          -495 -85 -69 -360 -342 -352 -349 2 -2 80 19 173 46 137 41 216 57 407 84
                          l237 33 102 57 103 57 117 -32 117 -33 188 9 189 9 66 100 c36 55 70 100 75
                          100 5 0 50 -6 99 -14 81 -12 113 -11 314 9 l224 21 65 71 c36 38 105 96 152
                          128 l87 58 128 -19 c86 -13 141 -17 168 -12 l41 8 -74 34 c-176 79 -443 154
                          -665 187 -97 15 -453 26 -545 18z m653 -152 c42 -24 77 -46 77 -50 0 -7 -195
                          -157 -228 -176 -9 -5 -66 -14 -128 -20 l-112 -12 -52 34 -52 33 73 46 c97 60
                          333 192 339 190 3 -1 40 -21 83 -45z m-1056 -144 l53 -22 75 24 c41 13 76 22
                          78 19 18 -24 77 -133 74 -136 -3 -2 -81 -24 -173 -48 l-169 -44 -83 47 -83 47
                          32 25 c17 14 55 44 83 67 28 23 53 42 56 42 2 1 28 -9 57 -21z"
                              />
                              <path
                                d="M3120 4547 l0 -52 101 -100 c118 -117 239 -251 239 -265 0 -5 -27
                          -23 -60 -40 -60 -30 -61 -30 -112 -15 -28 8 -87 29 -130 47 l-78 32 0 67 0 66
                          -52 21 c-29 11 -76 29 -104 40 l-51 21 -34 -150 -34 -149 -99 -22 c-54 -12
                          -100 -28 -103 -35 -3 -7 -1 -45 4 -85 l8 -73 135 -26 c74 -14 136 -26 137 -25
                          1 1 12 60 24 131 12 72 23 131 24 133 1 1 51 -5 111 -14 80 -12 123 -24 160
                          -45 46 -26 61 -29 138 -29 l86 0 56 -112 c53 -106 65 -121 211 -272 l154 -160
                          -6 -41 c-14 -86 -3 -82 -160 -61 l-100 13 -211 -106 -212 -106 -154 -185
                          c-154 -185 -155 -186 -174 -265 l-20 -80 -47 -3 c-40 -3 -66 5 -158 47 l-110
                          50 -87 -43 c-48 -23 -93 -45 -99 -49 -8 -5 -6 -28 7 -79 10 -40 21 -86 25
                          -103 l7 -30 43 50 43 50 77 3 77 4 -7 -95 -7 -96 62 -18 c56 -15 68 -24 127
                          -89 l64 -71 101 29 100 29 107 -16 c58 -9 174 -34 257 -56 83 -21 179 -42 214
                          -46 37 -3 70 -13 79 -22 9 -9 62 -69 119 -133 l103 -116 219 -129 c121 -70
                          219 -133 218 -138 -2 -6 -66 -131 -143 -277 l-139 -267 -151 -69 -150 -69 -59
                          -157 -59 -157 -210 -142 c-116 -78 -214 -145 -220 -148 -12 -9 -56 -163 -47
                          -167 12 -5 185 47 295 89 877 331 1510 1126 1630 2049 66 505 -12 989 -231
                          1449 -65 135 -169 311 -184 311 -5 0 -20 -4 -33 -9 -13 -5 -111 -17 -218 -26
                          -107 -9 -203 -20 -214 -25 -11 -4 -45 -46 -74 -94 -30 -47 -55 -86 -56 -86 -1
                          0 -21 7 -45 15 -28 10 -92 60 -198 156 l-157 141 -41 117 c-71 201 -70 199
                          -179 297 l-100 90 -110 22 c-60 12 -116 22 -122 22 -9 0 -13 -17 -13 -53z"
                              />
                              <path
                                d="M455 3875 c-27 -7 -62 -16 -77 -19 -30 -7 -74 -81 -152 -254 -243
                          -541 -290 -1148 -131 -1725 83 -305 229 -600 428 -866 93 -124 365 -396 490
                          -490 513 -383 1142 -567 1747 -510 63 6 116 12 118 14 2 1 -3 70 -10 153 l-12
                          151 58 240 58 240 -57 203 c-54 192 -62 213 -152 380 l-94 176 80 169 c45 93
                          81 173 81 179 0 6 -35 21 -77 34 -75 21 -82 26 -178 121 l-100 98 -212 47
                          -211 48 -71 145 -71 146 0 -88 0 -88 -32 3 c-29 3 -48 25 -215 251 l-183 248
                          0 204 0 205 -131 213 c-72 116 -133 215 -137 218 -4 4 -101 -11 -217 -32 -180
                          -33 -231 -39 -353 -39 l-143 0 -70 45 c-38 24 -69 48 -69 52 1 5 40 38 87 76
                          89 70 90 73 8 52z"
                              />
                            </g>
                          </svg>

                          <span
                            style={{ fontSize: "11px", marginLeft: "20px" ,fontWeight:"lighter" }}
                          >
                          Mitteleuropäische zeit(
  {new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })})
                                 </span>
                        </div>
                      </div>
                      {isWide ? 
  <div  style={{
                            width: isWide ? "50%" : "0%",
                            display: "inline-block",
                            verticalAlign: "top",
                            maxHeight: "385px",
                            overflowY: "auto",
                            padding: "0 5px",
                            transition: "width 0.3s ease-in-out",
                          }}>
   {timeSlots.length > 0 ? (
                          <ul>
                            {timeSlots.map((time, index) => (
                              <li
                                style={{
                                  border: "1px solid #000",
                                  paddingTop: "6px",
                                  paddingBottom: "6px",
                                  fontSize: "10px",
                                  borderRadius: "10px",
                                  textAlign: "center",
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "6px",
                                  justifyContent: "center",
                                  minWidth: "70px",
                                }}
                                onClick={() => {
                                  // console.log("Selected Time Slot:", slot);
                                  setShowContactForm(true);
                                  selectTime(time)
                                
                                }}
                                key={index}
                              >
                                {time}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>No available time slots for this date.</p>
                        )}
                      </div>
                      :
                       null
                       }
                    </div>
                  </div>
                ) : (
  <>
  
  <div style={formSectionStyle}>
      <div className="form-para" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <p className="">
          Ich benötige noch ein paar Informationen über Sie
        </p>
        <button
          style={{
            border: '1px solid #fff',
            fontSize: '12px',
            borderRadius: '10px',
            textAlign: 'center',
            backgroundColor: 'white'
          }}
          onClick={() => {
            setShowContactForm(false);
          }}
        >
          <FaArrowLeft style={{ marginRight: '5px' }} /> {/* Add the arrow left icon */}
        </button>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="row mb-2">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control"
              name="firma"
              style={{
                ...border_style,
                borderRadius: '5px',
                marginBottom: '10px',
                fontSize: '13px',
              }}
              placeholder="Firma..."
              value={formValues.firma}
              onChange={handleInputChange}
              />
            <input
              type="text"
              className="form-control mb-2"
              name="vorname"
              style={{ ...border_style, borderRadius: '5px', fontSize: '13px' }}
              placeholder="Vorname..."
              value={formValues.vorname}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              style={{ ...border_style, borderRadius: '5px', fontSize: '13px' }}
              placeholder="Email..."
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              type="text"
              className="form-control"
              name="anrede"
              style={{ ...border_style, borderRadius: '5px', fontSize: '13px' }}
              placeholder="Anrede..."
              value={formValues.anrede}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="form-control"
              name="nachname"
              style={{
                ...border_style,
                borderRadius: '5px',
                margin: '10px 0',
                fontSize: '13px',
              }}
              placeholder="Nachname..."
              value={formValues.nachname}
              onChange={handleInputChange}
            />
            <input
              type="number"
              className="form-control"
              name="telefon"
              style={{ ...border_style, borderRadius: '5px', fontSize: '13px' }}
              placeholder="Telefon..."
              value={formValues.telefon}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <textarea
              className="form-control"
              name="ziel"
              style={{
                ...border_style,
                borderRadius: '5px',
                height: '150px',
                resize: 'none',
                fontSize: '13px',
              }}
              placeholder="Schreiben Sie hier, was Ihr Ziel ist mit unserer Zusammenarbeit..."
              rows="3"
              value={formValues.ziel}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <button
          className="in-btn"
          type="submit"
          style={{
            ...border_style,
            width: '12rem',
            textAlign: 'center',
            padding: '10px',
            margin: '10px 0',
            display: 'block',
            marginRight: 'auto',
            color: '#8a8a8a',
            textDecoration: 'none',
            color: 'var(--skin)',
          }}
        >
          Termin Buchen
        </button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}

<Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Submission</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Are you sure you want to submit the form?</p>
    <ul>
      <li>Date: {selectedDate?.toDateString()}</li>
      <li>Time: {selectedTime}</li>
      <li>Firma: {formValues.firma}</li>
      <li>Vorname: {formValues.vorname}</li>
      <li>Email: {formValues.email}</li>
      <li>Anrede: {formValues.anrede}</li>
      <li>Nachname: {formValues.nachname}</li>
      <li>Telefon: {formValues.telefon}</li>
      <li>Ziel: {formValues.ziel}</li>
    </ul>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={confirmSubmit}>
      Confirm
    </Button>
  </Modal.Footer>
</Modal>

    </div>
                  </>
                )}
              </div>
              
              </div>
            )}
          </div>
        </div>
      </div>

     
    </Container>
  );
};

export default Consulting


