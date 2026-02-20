export default function BookingForm({ selectedSeats, price, form, onChange, onNext }) {
    const total = selectedSeats.length * price;

    return (
        <div className="space-y-6">
            <div className="bg-[#F7F8F8] p-6 rounded-2xl">
                <table className="w-full text-left">
                    <thead className="border-b border-dashed border-gray-300">
                        <tr className="font-bold">
                            <th className="pb-4">Seat <span className="bg-[#1DD100] text-white px-2 rounded-sm text-xs ml-1">{selectedSeats.length}</span></th>
                            <th className="pb-4">Class</th>
                            <th className="pb-4 text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-500 font-medium">
                        {selectedSeats.map(seat => (
                            <tr key={seat} className="border-b border-gray-100">
                                <td className="py-4 uppercase">{seat}</td>
                                <td className="py-4">Economy</td>
                                <td className="py-4 text-right">{price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between mt-6 font-bold text-lg">
                    <span>Total Price</span>
                    <span>BDT {total}</span>
                </div>
            </div>

            <div className="space-y-4">
                <label className="block">
                    <span className="font-bold block mb-2">Passenger Name*</span>
                    <input required name="name" placeholder="Enter your name" value={form.name} onChange={onChange} className="w-full p-4 rounded-xl bg-white border border-gray-100 outline-none focus:ring-2 ring-[#1DD100]" />
                </label>
                <label className="block">
                    <span className="font-bold block mb-2">Phone Number*</span>
                    <input required name="phone" placeholder="Enter your phone number" value={form.phone} onChange={onChange} className="w-full p-4 rounded-xl bg-white border border-gray-100 outline-none focus:ring-2 ring-[#1DD100]" />
                </label>
                <button
                    onClick={onNext}
                    disabled={selectedSeats.length === 0 || !form.phone}
                    className="w-full py-4 bg-[#1DD100] text-white rounded-2xl font-black text-xl hover:bg-[#19b000] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    );
}