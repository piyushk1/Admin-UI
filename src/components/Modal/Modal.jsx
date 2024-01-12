import "./Modal.css";
const Modal = ({ editRowItem, setIsModalOpen }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Row</h3>
        <p>ID: {editRowItem?.id}</p>
        <p>Name: {editRowItem?.name}</p>
        <p>Email: {editRowItem?.email}</p>
        <p>Role: {editRowItem?.role}</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;