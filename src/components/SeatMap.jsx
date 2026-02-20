import React from 'react';

export default function SeatMap({ selectedSeats, handleSeatClick }) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            {/* Steering Wheel / Front Indicator */}
            <div className="flex justify-end mb-8">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" /><path d="M12 12V22" /></svg>
                </div>
            </div>

            <div className="space-y-4">
                {rows.map(row => (
                    <div key={row} className="flex items-center gap-4 md:gap-8">
                        <span className="w-4 font-bold text-gray-400">{row}</span>
                        <div className="grid grid-cols-4 gap-4 flex-1">
                            {[1, 2, 3, 4].map((num, idx) => {
                                const id = `${row}${num}`;
                                const isSelected = selectedSeats.includes(id);
                                return (
                                    <React.Fragment key={id}>
                                        <button
                                            onClick={() => handleSeatClick(id)}
                                            className={`h-12 md:h-14 rounded-xl font-medium transition-all
                                                ${isSelected
                                                    ? 'bg-[#1DD100] text-white'
                                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-200'}`}
                                        >
                                            {id}
                                        </button>
                                        {/* Create the middle aisle gap after 2nd seat */}
                                        {idx === 1 && <div className="w-4 md:w-12"></div>}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}