
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateButton = ({ onUpdate, post }) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    heading: "",
    description: "",
    link: "",
    photo: null,
  });

  useEffect(() => {
    if (post) {
      setUpdatedData({
        heading: post.heading,
        description: post.description,
        link: post.link,
        photo: post.photo, // Set the photo from post data
      });
    }
  }, [post]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setUpdatedData({ ...updatedData, photo: e.target.files[0] });
  };

  const handleUpdate = () => {
    onUpdate(updatedData);
    setShowModal(false);
  };

  return (
    <>
      <button
        variant="primary"
        onClick={handleShowModal}
        className="in-btn"
        style={{ position: "relative", left: "36px" }}
      >
        Update
      </button>

      {/* Update Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display current image */}
          {updatedData.photo && (
            <img
              src={updatedData.photo}
              alt="Current Post"
              style={{ maxWidth: "100%", marginBottom: "1rem" }}
            />
          )}
          {/* Input for new image */}
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />
          {/* Other input fields */}
          <input
            type="text"
            name="heading"
            className="form-control"
            style={{margin:"2rem 0"}}
            placeholder="Enter heading"
            value={updatedData.heading}
            onChange={handleChange}
          />
          
          <textarea
            name="description"
            className="form-control"
            style={{margin:"2rem 0"}}
            placeholder="Enter description"
            value={updatedData.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="link"
            className="form-control"
            style={{margin:"2rem 0"}}
            placeholder="Enter link"
            value={updatedData.link}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateButton;
