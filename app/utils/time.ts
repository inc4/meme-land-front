const addLeadingZero = (num: number) => `${`0${num.toString()}`.slice(-2)}`;

// Timer 10d 15h 32m 20s
export const timerCountdown = (timestamp: number) => {
  if (timestamp > 0) {
    const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));

    const hours = Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((timestamp % (1000 * 60)) / 1000);

    return {
      days: addLeadingZero(days),
      hours: addLeadingZero(hours),
      minutes: addLeadingZero(minutes),
      seconds: addLeadingZero(seconds),
    }
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
};

// Timer 36:15:32 hrs
export const timerCountdownInHours = (timestamp: number) => {
  if (timestamp > 0) {
    const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const totalHours = days * 24 + hours;
  
    const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));
  
    const seconds = Math.floor((timestamp % (1000 * 60)) / 1000);
  
    return {
      hours: addLeadingZero(totalHours),
      minutes: addLeadingZero(minutes),
      seconds: addLeadingZero(seconds),
    };
  }

  return {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
};
