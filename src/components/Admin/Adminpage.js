
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Tab, Nav, Card } from 'react-bootstrap';
import axios from 'axios';
import MediaCard from '../cards/MediaCard';
// import MediaCard from "./cards/MediaCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpdateButton from './UpdateButton';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CalenderDateTime from './Calender/CalenderDateTime';
import DeleteCalenderTime from './Calender/DeleteCalenderTime';
import UpdateCalenderTime from './Calender/UpdateCalenderTime';
import UserMeeting from './Calender/UserMeeting';


const Adminpage = () => {
  const [mediaPosts, setMediaPosts] = useState([]);
  const navigate = useNavigate();
  const [newUser, setNewAuthor] = useState({

    heading: '',
    description: '',
    link: '',
    photo: ''
  });

  const handleChange = (e) => {
    setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewAuthor({ ...newUser, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', newUser.heading);
    formData.append('description', newUser.description);
    formData.append('link', newUser.link);
    formData.append('photo', newUser.photo);
    axios.post('http://localhost:3001/media/add/', formData)
      .then(res => {
        // console.log(res);

        // console.log("successs")
        
        toast.success("Post Added successfully"); 
      setNewAuthor({ heading: '', description: '', link: '', photo: null });
    })
      .catch(err => {
      
        toast.error("post not added");
      });
  };
  const handleDelete = (postId) => {
    // Send DELETE request to your backend API to delete the post
    axios
      .delete(`http://localhost:3001/media/delete/${postId}`)
      .then((response) => {
        // Remove the deleted post from state
        setMediaPosts(mediaPosts.filter((post) => post._id !== postId));
          toast.success("Post deleted successfully");
      })
      .catch((error) => {
            toast.error("post not deleted");
      });
  };

  const handleUpdate = (postId, updatedData) => {
    const formData = new FormData();
    formData.append('heading', updatedData.heading);
    formData.append('description', updatedData.description);
    formData.append('link', updatedData.link);
    formData.append('photo', updatedData.photo);

    axios.put(`http://localhost:3001/media/update/${postId}`, formData)
        .then(res => {
           
            toast.success("post updated");
            // Update state with updated post
            setMediaPosts(mediaPosts.map(post => {
                if (post._id === postId) {
                    return { ...post, ...updatedData };
                }
                return post;
            }));
        })
        .catch(err => {
            console.log(err);
            toast.error("post not updated");
        });
};


  useEffect(() => {
    // Fetch media posts from your backend API
    axios
      .get("http://localhost:3001/media/allpost")
      .then((response) => {
        setMediaPosts(response.data.data.allMedia);
      })
      .catch((error) => {
           });
  }, []);
  

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('accessToken');
    // Redirect to login page
    navigate('/login');
};

const [allTimes, setAllTimes] = useState([]);

const addTime = (newTimes) => {
  setAllTimes((prevTimes) => [...prevTimes, ...newTimes]);
};

  return (
    <Container fluid style={{ marginTop: "8rem" ,height:"40rem"}}>
      
      <ToastContainer />
      
      <Row className="justify-content-center mt-5">
        <Col md={8}>
      
          <Tab.Container defaultActiveKey="addMedia">
            
            <Row>
            
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="addMedia">ADD MEDIA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="deleteMedia">DELETE MEDIA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="updateMedia">Update MEDIA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="addtimedate">Add Schedules</Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item>
                    <Nav.Link eventKey="deletetimedate">Delete Schedules</Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item>
                    <Nav.Link eventKey="updatetimedate">Update Schedules</Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item>
                    <Nav.Link eventKey="user_meet">User Meet</Nav.Link>
                  </Nav.Item>
                  
                 
             
                </Nav>
              </Col>
              <Col sm={9}>
              <Button onClick={handleLogout} variant="danger" style={{ float: "right" }}>Logout</Button>
       
                <Tab.Content>
                  <Tab.Pane eventKey="addMedia">
                    <Form
                      style={{
                        border: "none",
                        margin: "2rem 0",
                        padding: "2rem ",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      onSubmit={handleSubmit}
                      encType='multipart/form-data'>
                      {/* Form fields for adding media */}
                      <h2>Add New Media</h2>
                      <Form.Group controlId="formBasicPhoto">
                        <Form.Label>Picture</Form.Label>
                        <Form.Control
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="photo"
                          onChange={handlePhoto} />
                      </Form.Group>
                      <Form.Group controlId="formBasicName">
                        <Form.Label>Heading</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter heading"
                          name="heading"
                          value={newUser.heading}
                          onChange={handleChange} />
                      </Form.Group>
                      <Form.Group controlId="formBasicDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter description"
                          name="description"
                          value={newUser.description}
                          onChange={handleChange} />
                      </Form.Group>
                      <Form.Group controlId="formBasicFuel">
                        <Form.Label>Link</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter link"
                          name="link"
                          value={newUser.link}
                          onChange={handleChange} />
                      </Form.Group>
                      <Button
                        variant="none"
                        style={{
                          width: "100%",
                          margin: "2rem 0",
                          backgroundColor: "var(--darkblue)",
                          color: "white",
                          fontWeight: "700",
                          border: "2px solid var(--darkblue)"
                        }}
                        type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="deleteMedia">
                  <Row style={{ margin: "0 0 7rem 0" }}>
                  
          {mediaPosts.map((post, index) => (
            <Col lg={6} md={6} sm={12}  className="media-card-container">
              <MediaCard
              key={index}
                imagee={post.photo}
                head={post.heading}
                text={post.description}
                link={post.link}
              />
              {/* Delete button */}
              <button className="delete-button in-btn" style={{position:"relative",left:"36px"}} onClick={() => handleDelete(post._id)}>
                Delete
              </button>
            </Col>
          ))}
        </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="updateMedia">
                                        <Row style={{ margin: "0 0 7rem 0" }}>
                                            {mediaPosts.map((post, index) => (
                                                <Col lg={6} md={6} sm={12} key={index} className="media-card-container">
                                                    <MediaCard
                                                        imagee={post.photo}
                                                        head={post.heading}
                                                        text={post.description}
                                                        link={post.link}
                                                        onDelete={() => handleDelete(post._id)}
                                                    />
                                                    {/* Add UpdateButton component */}
                                                    {/* <UpdateButton onUpdate={(updatedData) => handleUpdate(post._id, updatedData)} /> */}
                                               
                                               
                                                    {/* <UpdateButton onUpdate={(updatedData) => handleUpdate(post._id, updatedData)} post={post} /> */}
                                                    {/* <UpdateButton onUpdate={(updatedData) => handleUpdate(post._id, updatedData)} post={post} /> */}

                                                    <UpdateButton
                                                   
                                                     onUpdate={(updatedData) => handleUpdate(post._id, updatedData)} post={post} />
 </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    







{/* ------
 */}
 <Tab.Pane eventKey="addtimedate">
               <CalenderDateTime/>
                  </Tab.Pane>



                  <Tab.Pane eventKey="deletetimedate">
               <DeleteCalenderTime/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="updatetimedate">
               <UpdateCalenderTime/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="user_meet">
               <UserMeeting/>
                  </Tab.Pane>
                                    </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Adminpage;