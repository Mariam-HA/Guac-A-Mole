import React, { useEffect } from "react";
import React, { useState } from "react";

const Timer = () => {
  const [secound, setSecound] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecound(secound + 1);
      if (secound === 59) {
        setSecound(minutes + 1);
        setSecound(0);
      }
    }, 1000);
  });

  return () => clearInterval(timer);
});
  return <div className="time"></div>;
};

export default Timer;
