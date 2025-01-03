import Header from './components/Header';
import './App.css';
import { useEffect,useState } from 'react';
import RevenueChart from './components/RevenueChart';
import RoomStatusChart from './components/RoomStatusChart';
function App() {
  const revenueData = {
    tariff: 27,
    exbed: 18,
    laundry: 12,
    postings: 24,
    otherServices: 3,
    totalPaid: 60000,
    outstanding: 25000,
    cancellation: 10000,
    refunds: 8800,
  };
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchRooms = () => {
      setTimeout(() => {
        setRooms([
          { number: "A101", type: "Deluxe", status: "occupied" },
          { number: "A102", type: "Dormitory", status: "available" },
          { number: "A103", type: "Double Deluxe", status: "dirty" },
          { number: "A104", type: "Suite", status: "available" },
        ]);
      }, 1000);
    };

    fetchRooms();
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className="row">
      <div className="col-md-6">
   <RevenueChart data={revenueData}/></div>
   <div className="col-md-6">
   <RoomStatusChart rooms={rooms}/></div></div>
    </div>
  );
}

export default App;
