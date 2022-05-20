const fakeWaiting = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
export default fakeWaiting;
