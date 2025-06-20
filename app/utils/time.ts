const addLeadingZero = (num: number) => `${`0${num.toString()}`.slice(-2)}`;


export const getTimeRemaining = targetDate => {
  const targetDateTime = new Date(targetDate);
  const currentTime = new Date();
  let timeDifference = targetDateTime - currentTime;
  if (timeDifference < 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  timeDifference -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  timeDifference -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(timeDifference / (1000 * 60));
  timeDifference -= minutes * (1000 * 60);

  const seconds = Math.floor(timeDifference / 1000);

  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
  };
};

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
