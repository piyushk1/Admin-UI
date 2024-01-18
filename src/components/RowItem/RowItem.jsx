import "./RowItem.css";
const RowItem = ({
  user,
  selected,
  handleRow,
  edit,
  deleteRow
}) => {
  return (
    <tr className={selected ? "selected" : ""}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={(event) => handleRow(event, user.id)}
        />
      </td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td className="btn-container">
        <button onClick={() => edit(user.id)}>
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={() => deleteRow(user.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default RowItem;