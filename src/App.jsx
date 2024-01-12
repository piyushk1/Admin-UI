import './App.css';
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from './components/DashBoard/DashBoard'

function App() {


  return (
    <>
    <DashBoard/>
    <ToastContainer autoClose={1000} />
    </>
  )
}

export default App
