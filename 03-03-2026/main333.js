function starCountdown(seconds) {
  const interval = setInterval(() => {
    console.log(seconds);
    seconds = seconds - 1;

    if (seconds === 0) {
      console.log("Hết giờ!");
      clearInterval(interval);
    }
  }, 1000);
}
starCountdown(5);
