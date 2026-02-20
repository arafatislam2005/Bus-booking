import React, { useState } from 'react'; // MUST HAVE THIS LINE TO FIX CONSOLE ERROR
import Header from './components/Header';
import Hero from './components/Hero';
import SeatMap from './components/SeatMap';
import BookingForm from './components/BookingForm';
import SuccessModal from './components/SuccessModal';

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [isBooked, setIsBooked] = useState(false);

  const PRICE_PER_SEAT = 550;

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) return prev.filter((id) => id !== seatId);
      if (prev.length < 4) return [...prev, seatId];
      alert("Maximum 4 seats allowed");
      return prev;
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F7F8F8]">
      <Header />
      <Hero />

      {/* Best Offers Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#030712]">Best offers for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coupon 1 */}
          <div className="bg-[#FFBF0F] rounded-3xl flex items-center justify-between px-10 py-8 relative">
            <div><h3 className="text-4xl font-black text-black/80">15% OFF</h3><p className="font-bold">on your next purchase</p></div>
            <div className="border-l-2 border-dashed border-white h-full mx-4"></div>
            <div className="text-center">
              <h4 className="text-2xl font-black text-black/80 uppercase">NEW15</h4>
              <p className="text-sm opacity-60 font-bold">Coupon Code</p>
            </div>
          </div>
          {/* Coupon 2 */}
          <div className="bg-[#F78C9C] rounded-3xl flex items-center justify-between px-10 py-8 relative">
            <div><h3 className="text-4xl font-black text-black/80">20% OFF</h3><p className="font-bold">on your next purchase</p></div>
            <div className="border-l-2 border-dashed border-white h-full mx-4"></div>
            <div className="text-center">
              <h4 className="text-2xl font-black text-black/80 uppercase">Couple 20</h4>
              <p className="text-sm opacity-60 font-bold">Coupon Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Panel */}
      <section className="max-w-6xl mx-auto bg-white rounded-[2.5rem] border-t-2 border-[#1DD100] p-10 shadow-sm mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">P.H Paribahan</h2>
          <p className="text-gray-400 mt-2">Luxury AC Coach (27 seats available)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 pr-0 lg:pr-10 lg:border-r-2 border-dashed border-gray-200">
            <h3 className="text-xl font-bold mb-6">Select Your Seat</h3>
            <SeatMap selectedSeats={selectedSeats} handleSeatClick={handleSeatClick} />
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold mb-6">Select Your Seat</h3>
            <BookingForm
              selectedSeats={selectedSeats}
              price={PRICE_PER_SEAT}
              form={form}
              onChange={handleFormChange}
              onNext={() => setIsBooked(true)}
            />
          </div>
        </div>
      </section>

      {isBooked && (
        <SuccessModal
          name={form.name}
          onClose={() => {
            setIsBooked(false);
            setSelectedSeats([]);
            setForm({ name: '', phone: '', email: '' });
          }}
        />
      )}
    </div>
  );
}

export default App;