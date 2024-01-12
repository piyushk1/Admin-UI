import SearchBar from '../SearchBar/SearchBar';
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import DataTable from '../DataTable/DataTable';
import Pagination from "../Pagination/Pagination";
import Modal from '../Modal/Modal';
import DeleteButton from '../DeleteButton/DeleteButton';
import "./Dashboard.css";
import axios from "axios";

export default function DashBoard() {
  // API endpoint to fetch data
  const ENDPOINT = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  // State variables
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRowItem, setEditRowItem] = useState(null);

  // Number of users to display per page
  const usersPerPage = 10;

  // Function to fetch users data from the API
  const getUsers = async () => {
    try {
      const response = await axios.get(ENDPOINT);
      const data = response.data;
      setUsers(data);
      setFilteredUsers(data);
    } catch (e) {
      console.error("Error getting users:", e);
    }
  };

  // Function to handle search input
  const search = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);
    const filterUser = (user) =>
      user.id.includes(searchText) ||
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.role.toLowerCase().includes(searchText);
    const filteredResults = users.filter(filterUser);
    setFilteredUsers(filteredResults);
    setCurrentPage(1);
  };

  // Function to open the edit modal
  const edit = (id) => {
    const editRowItem = filteredUsers.find((user) => user.id === id);
    setEditRowItem(editRowItem);
    setIsModalOpen(true);
  };

  // Function to delete a single row
  const deleteRow = (id) => {
    if (!selectedRows.includes(id)) {
      toast.error("Please select the rows to delete.");
      return;
    }

    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.id !== id)
    );

    toast.success("Deleted Successfully!");
  };

  // Function to delete selected rows
  const deleteSelected = () => {
    const updatedUsers = users.filter(
      (user) => !selectedRows.includes(user.id)
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRows([]);
    toast.success("Selected rows deleted successfully");
  };

  // Function to select/deselect all rows
  const selectAllRows = (event) => {
    const { checked } = event.target;
    const allRowIds = currentUsers.map((user) => user.id);

    if (checked && selectedRows.length !== allRowIds.length) {
      setSelectedRows(allRowIds);
      toast.warn("Hey You Selected All !", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
    } else {
      setSelectedRows([]);
    }
  };

  // Function to handle individual row selection
  const handleRow = (event, id) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
      toast.success("Selected", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id)
      );
    }
  };

  // Function to handle pagination
  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indices for the current page
  const start = (currentPage - 1) * usersPerPage;
  const last = start + usersPerPage;
  const currentUsers = filteredUsers.slice(start, last);

  // Fetch users data on component mount
  useEffect(() => {
    getUsers();
  }, []);

  // Render the dashboard components
  return (
    <div className="DashBoard">
      <SearchBar handleSearch={search} searchText={searchText} />
      <>
        <DataTable
          users={currentUsers}
          selectedRows={selectedRows}
          handleRow={handleRow}
          edit={edit}
          deleteRow={deleteRow}
          selectAllRows={selectAllRows}
        />
        <Pagination
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          totalItems={filteredUsers.length}
          handlePagination={handlePagination}
        />
        <DeleteButton
          deleteSelected={deleteSelected}
          selectedRows={selectedRows}
        />
        {isModalOpen && (
          <Modal editRowItem={editRowItem} setIsModalOpen={setIsModalOpen} />
        )}
      </>
    </div>
  );
}
