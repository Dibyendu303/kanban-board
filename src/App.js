import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios"
import Navbar from './Components/Navbar';
import { setPreference, setTickets, setUsers } from './features/ticketSlice';
import './App.css';
import Footer from './Components/Footer';
import CardContainer from './Components/Card/CardContainer';

function App() {
  const dispatch = useDispatch();

  const fetchTickets = async () => {
    try {
      const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
      dispatch(setTickets(response.data.tickets));
      dispatch(setUsers(response.data.users));
    } catch (e) {
      console.log("Unable to fetch tickets. Please try again later", e);
    }
  }

  useEffect(() => {
    fetchTickets();
    const savedPreference = JSON.parse(localStorage.getItem("kanbanBoard"));
    if (savedPreference) {
      dispatch(setPreference(savedPreference));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
