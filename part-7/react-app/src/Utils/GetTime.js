import React, { useEffect, useState } from 'react';

export default function useGetTime(getTime) {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    setCurrentTime({ hours: hours, minutes: minutes, ampm: ampm });
  }, [getTime]);

  return currentTime;
}
