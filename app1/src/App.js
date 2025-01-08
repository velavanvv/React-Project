import Header from './components/Header';
import './App.css';
import { useEffect } from 'react';
import RevenueChart from './components/RevenueChart';
import RoomStatusChartWithSwitcher from "./components/RoomStatusChartWithSwitcher";
import ReservationType from './components/ReservationType';
import MostRecentBills from './components/MostRecentBills';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import RoomStatusChart from './components/RoomStatusChart';



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once on scroll
    });
  }, []);

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
  const rooms = [
    { number: "101", type: "Deluxe Suite", status: "occupied" },
    { number: "102", type: "Single Room", status: "available" },
    { number: "103", type: "Double Room", status: "cleaning" },
    { number: "104", type: "Family Suite", status: "occupied" },
    { number: "6", type: "Family Suite", status: "occupied" },
    { number: "7", type: "Family Suite", status: "cleaning" },
    { number: "8", type: "Family Suite", status: "occupied" },
    { number: "95", type: "Family Suite", status: "cleaning" },
    { number: "23", type: "Family Suite", status: "occupied" },
    { number: "643", type: "Family Suite", status: "available" },
    { number: "623", type: "Family Suite", status: "cleaning" },
    { number: "6234", type: "Family Suite", status: "occupied" },
    { number: "343", type: "Family Suite", status: "available" },
    { number: "545", type: "Family Suite", status: "cleaning" },
    { number: "453", type: "Family Suite", status: "occupied" },
    { number: "5443", type: "Family Suite", status: "cleaning" },
    { number: "546", type: "Family Suite", status: "available" },
    { number: "43436", type: "Family Suite", status: "available" },
  ];

  return (
    <div className="App">
      <Header/>
      <div className="row">
      <div className="col-md-6" data-aos="fade-up">
  <div className="col-md-12" data-aos="fade-right">
    <ReservationType reservationTypes={reservationTypes} />
  </div>
  <div className="col-md-12" data-aos="fade-left">
    <MostRecentBills bills={bills} />
  </div>
</div>
<div className="col-md-6" data-aos="fade-up">
  <RevenueChart data={revenueData} />
</div>
<div className="col-md-12" data-aos="zoom-in">
          <RoomStatusChartWithSwitcher />
        </div>
        <div className="col-md-12" data-aos="zoom-in">
          <RoomStatusChart  rooms={rooms}/>
        </div>
     
      </div>
    </div>
  );
}

export default App;
