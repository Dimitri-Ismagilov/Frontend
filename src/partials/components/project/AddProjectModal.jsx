import React from "react";
import Modal from "../Modal";
import AddProjectForm from "../forms/AddProjectForm";

const AddProjectModal = ({ isOpen, onClose, clients, users }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="modal-title">Add New Project</h2>
        <AddProjectForm onClose={onClose} clients={clients} users={users} />
      </Modal>
    )
  }
  
  export default AddProjectModal