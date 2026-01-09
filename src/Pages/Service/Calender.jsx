import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import png from '../../assets/logo.png'

const Calender = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        return { firstDay, daysInMonth };
    };

    const isPastDate = (day) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        return checkDate < today;
    };

    const handleDateClick = (day) => {
        if (!isPastDate(day)) {
            setSelectedDate({
                day,
                month: currentDate.getMonth(),
                year: currentDate.getFullYear()
            });
        }
    };

    const handlePrevMonth = () => {
        const today = new Date();
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);

        // Only allow going back if the previous month is not before the current month
        if (prevMonth.getMonth() >= today.getMonth() && prevMonth.getFullYear() >= today.getFullYear()) {
            setCurrentDate(prevMonth);
        } else if (prevMonth.getFullYear() > today.getFullYear()) {
            setCurrentDate(prevMonth);
        }
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const canGoPrevious = () => {
        const today = new Date();
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);

        if (prevMonth.getFullYear() > today.getFullYear()) return true;
        if (prevMonth.getFullYear() === today.getFullYear() && prevMonth.getMonth() >= today.getMonth()) return true;

        return false;
    };

    const handleBookAppointment = () => {
        if (selectedDate) {
            setShowModal(true);
            // Future: Add emailjs integration here
            console.log('Booking appointment for:', selectedDate);
        }
    };

    const { firstDay, daysInMonth } = getDaysInMonth(currentDate);
    const blanks = Array(firstDay).fill(null);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
        <div className="min-h-screen bg-black font-KronaOne flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Booking Card */}
                <div className="bg-gray-100 rounded-3xl p-8 mb-6 shadow-2xl">
                    <div className="flex justify-between h-full items-start ">
                        {/* Left Section */}
                        <div className="flex-1 border-2 space-y-3 flex flex-col justify-between h-full w-full">
                            <img src={png} alt="" className='w-12' />
                            <h1 className="text-3xl  text-red-600 mb-2">Appointment</h1>
                            <h2 className="text-3xl  text-red-600 mb-8">booking</h2>

                            <div className="space-y-2">
                                <p className="text-xl font-bold text-gray-800">30 min</p>
                                <p className="text-sm text-red-600 font-medium max-w-xs">
                                    web conference details<br />provided upon confirmation
                                </p>
                            </div>
                        </div>

                        {/* Calendar Section */}
                        <div className="flex-1 ml-12">
                            <div className="flex items-center justify-between mb-6">
                                <button
                                    onClick={handlePrevMonth}
                                    disabled={!canGoPrevious()}
                                    className={`transition-colors ${canGoPrevious()
                                            ? 'text-red-600 hover:text-red-700 cursor-pointer'
                                            : 'text-red-300 opacity-30 cursor-not-allowed'
                                        }`}
                                >
                                    <ChevronLeft size={28} />
                                </button>
                                <h3 className="text-2xl  text-red-600">
                                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                </h3>
                                <button
                                    onClick={handleNextMonth}
                                    className="text-red-600 hover:text-red-700 cursor-pointer transition-colors"
                                >
                                    <ChevronRight size={28} />
                                </button>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-3">
                                {/* Day Headers */}
                                {dayNames.map(day => (
                                    <div key={day} className="text-center text-sm f text-red-600 mb-2">
                                        {day}
                                    </div>
                                ))}

                                {/* Blank spaces */}
                                {blanks.map((_, index) => (
                                    <div key={`blank-${index}`} className="aspect-square"></div>
                                ))}

                                {/* Date cells */}
                                {daysArray.map(day => {
                                    const isPast = isPastDate(day);
                                    const isSelected = selectedDate &&
                                        selectedDate.day === day &&
                                        selectedDate.month === currentDate.getMonth() &&
                                        selectedDate.year === currentDate.getFullYear();

                                    return (
                                        <button
                                            key={day}
                                            onClick={() => handleDateClick(day)}
                                            disabled={isPast}
                                            className={`
                        aspect-square rounded-lg text-lg f transition-all
                        ${isPast
                                                    ? 'text-red-300 opacity-30 cursor-not-allowed'
                                                    : 'text-red-600 hover:bg-red-100 cursor-pointer'
                                                }
                        ${isSelected ? 'bg-red-600 text-white hover:bg-red-700' : ''}
                      `}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Button */}
                <button
                    onClick={handleBookAppointment}
                    disabled={!selectedDate}
                    className={`
            w-full py-6 rounded-full text-3xl font-bold uppercase tracking-wider
            transition-all duration-300 shadow-lg
            ${selectedDate
                            ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-2xl cursor-pointer'
                            : 'bg-red-600 text-white opacity-30 cursor-not-allowed'
                        }
          `}
                >
                    Book an Appointment
                </button>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-bold text-red-600 mb-4">Booking Confirmed!</h3>
                            <p className="text-gray-700 mb-2">
                                Your appointment has been scheduled for:
                            </p>
                            <p className="text-xl font-bold text-gray-900 mb-6">
                                {monthNames[selectedDate.month]} {selectedDate.day}, {selectedDate.year}
                            </p>
                            <p className="text-sm text-gray-600 mb-6">
                                Web conference details will be provided upon confirmation via email.
                            </p>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calender;