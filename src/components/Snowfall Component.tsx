import React, { useEffect } from "react";

const SnowfallComponent = () => {
  useEffect(() => {
    // Tạo các bông tuyết
    const snowflakes: HTMLElement[] = [];
    const numFlakes = 100;

    for (let i = 0; i < numFlakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.position = "absolute";
      snowflake.style.top = `${Math.random() * -100}px`;
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.width = `${Math.random() * 10 + 5}px`; // Kích thước bông tuyết
      snowflake.style.height = snowflake.style.width;
      snowflake.style.backgroundColor = "white";
      snowflake.style.borderRadius = "50%";
      snowflake.style.opacity = "0.8";
      snowflake.style.animationName = "fall";
      snowflake.style.pointerEvents = "none"; // Đảm bảo tuyết không tương tác với các phần tử khác
      document.body.appendChild(snowflake);
      snowflakes.push(snowflake);
    }

    return () => {
      snowflakes.forEach(snowflake => {
        snowflake.remove();
      });
    };
  }, []);

  return null;
};

export default SnowfallComponent;
