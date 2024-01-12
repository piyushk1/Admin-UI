import RowItem from "../RowItem/RowItem";
import "./DataTable.css";
const DataTable = ({
  users,
  selectedRows,
  handleRow,
  edit,
  deleteRow,
  selectAllRows,
}) => {

  //show 10 users
  const currentUsers = users.slice(0, 10);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectedRows.length === currentUsers.length}
              onChange={selectAllRows}
              className="checkbox-input"
            />
            <span className="checkbox-custom"></span>
          </th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <RowItem
            key={user.id}
            user={user}
            selected={selectedRows.includes(user.id)}
            handleRow={handleRow}
            edit={edit}
            deleteRow={deleteRow}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;