
import "./DeleteButton.css";
const DeleteButton = ({ handleDeleteSelected, selectedRows }) => {
  return (
    <button
      className="delete-selected-button"
      onClick={handleDeleteSelected}
      disabled={selectedRows.length === 0}
    >
      Delete Selected
    </button>
  );
};

export default DeleteButton;