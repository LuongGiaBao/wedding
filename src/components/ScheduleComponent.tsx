import React, { useState, useEffect } from "react";
import { Card } from "antd";
const ScheduleComponent = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = 1;

  const weeks = [
    [null, null, null, 1, 2, 3, 4], // Tháng bắt đầu từ ngày 1 (Thứ Tư)
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, null], // Tháng kết thúc ở ngày 31 (Thứ Sáu)
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center font-sans bg-gray-500 z-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 p-6 border-2 justify-center items-center flex flex-col">
          <h1 className="text-4xl font-script text-primary">Save the Date</h1>
          <p className="mt-4 text-xl">For the wedding of</p>
          <h2 className="text-3xl font-bold text-gray-700 mt-2">
            Gia Bảo & Kim Ngân
          </h2>
          <p className="mt-4 text-gray-600">
            Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có
            thêm một niềm hạnh phúc!
          </p>
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-opacity-90">
            Gửi lời chúc →
          </button>
        </div>

        {/* Right Section */}
        <Card className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="text-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">
              JANUARY / 2026
            </h2>
          </div>

          {/* Calendar Header */}
          <div className="grid grid-cols-7 mb-2">
            {days.map((day) => (
              <div key={day} className="text-center text-sm text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="border-t border-gray-200">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`h-10 flex items-center justify-center text-sm relative ${
                      day === currentDate ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {day && (
                      <>
                        {day === currentDate && (
                          <div className="absolute inset-0 m-auto w-8 h-8 bg-pink-300 rounded-full" />
                        )}
                        <span className="relative z-10">{day}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Countdown Statistics */}
          <div className="grid grid-cols-4 gap-4 mt-6 pt-4 border-t border-gray-200">
            {[
              { value: timeLeft.days, label: "Ngày" },
              { value: timeLeft.hours, label: "Giờ" },
              { value: timeLeft.minutes, label: "Phút" },
              { value: timeLeft.seconds, label: "Giây" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-light text-rose-300">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ScheduleComponent;
