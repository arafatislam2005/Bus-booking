export default function SuccessModal({ name, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full text-center shadow-2xl animate-in zoom-in duration-300">
        <div className="w-24 h-24 bg-green-50 text-[#1DD100] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-[#1DD100]/20">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-3xl font-black text-[#1DD100] mb-4">SUCCESS</h2>
        <p className="text-gray-600 font-bold mb-2">Thank you for Booking Our Bus Seats.</p>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed">We are working hard to find the best service and deals for you. Shortly you will find a confirmation in your email.</p>
        <button
          className="w-full py-4 bg-[#1DD100] text-white rounded-full font-bold text-lg hover:bg-[#19b000] transition-colors"
          onClick={onClose}
        >
          Continue
        </button>
      </div>
    </div>
  );
}