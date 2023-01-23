class AddTime {
  ShowTime = () => {
    const daytime = luxon.DateTime.now()
      .setLocale(navigator.language)
      .toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: 'false',
      });
    document.querySelector('.time').innerHTML = daytime;
    console.log('from time');
  };
}
export default AddTime;
