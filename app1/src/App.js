import Header from './components/Header';
import './App.css';
import { useEffect,useState } from 'react';
import RevenueChart from './components/RevenueChart';
import RoomStatusChart from './components/RoomStatusChart';
import ReservationType from './components/ReservationType';
import MostRecentBills from './components/MostRecentBills';
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
  const reservationTypes = [
    { name: "Direct", count: 31 },
    { name: "Reservations", count: 12 },
    { name: "Agent", count: 17 },
    { name: "Channel Manager", count: 842 },
    { name: "Company", count: 32 },
    { name: "Booking Engine", count: 842 },
  ];
  const bills = [
    { billNo: 501, guestName: "Mr. John Smith", reservationNo: 2274, paymode: "Cash", amount: 1800 },
    { billNo: 302, guestName: "Ms. Scarlet Johanson", reservationNo: 2568, paymode: "Card", amount: 1700 },
    { billNo: 106, guestName: "Mr. Sylvester Stallone", reservationNo: 2256, paymode: "Cash", amount: 3500 },
    { billNo: 103, guestName: "Mr. Robert Downey Junior", reservationNo: 2271, paymode: "Card", amount: 3899 },
  ];

  return (
    <div className="App">
      <Header/>
      <div className="row">
     
   <div className="col-md-6">
   <div className="col-md-12">
   <ReservationType reservationTypes={reservationTypes}/></div>
   <div className="col-md-12">
   <MostRecentBills bills={bills}/></div></div>
   <div className="col-md-6">
   <RevenueChart data={revenueData}/></div>
   <div className="col-md-12">
   <RoomStatusChart rooms={rooms}/></div></div>
  
    </div>
  );
}

export default App;
