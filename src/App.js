import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { selectLoading, setLoading, setPreference, setTickets, setUsers } from './features/ticketSlice';
import './App.css';
import LoadingScreen from './Screens/LoadingScreen';
import HomeScreen from './Screens/HomeScreen';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const fetchTickets = async () => {
    try {
      const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
      dispatch(setTickets(response.data.tickets));
      dispatch(setUsers(response.data.users));
    } catch (e) {
      console.log("Unable to fetch tickets. Please try again later", e);
    } finally {
      dispatch(setLoading(false));
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
      {isLoading ?
        <LoadingScreen />
        :
        <HomeScreen />
      }
    </div>
  );
}

export default App;
