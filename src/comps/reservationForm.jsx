/* eslint-disable react/prop-types */

const ReservationForm = ({ availableTimes, dispatch }) => {
  const handleChangeDate = (value) => {
    const selectedDate = new Date(value);
    dispatch({ type: 'SET_TIMES', payload: selectedDate });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: document.getElementById('res-date').value,
      diners: document.getElementById('res-number').value,
      time: document.getElementById('res-time').value,
      occasion: document.getElementById('occasion').value,
    };
    window.submitAPI(formData)
  }

  return ( 
    <>
      <div className="banner h-60 flex">
        <h2 className="text-xl font-serif self-center text-white">
          Fill the form below to complete the reservation process
        </h2>
      </div>
      <form className="bg-white self-center m-4 min-w-[90%] md:min-w-[500px] gap-1 -top-24 shadow-lg p-4 relative rounded-md flex flex-col">
        <label htmlFor="res-date">Choose a date</label>
        <input type="date" id="res-date" onChange={(e) => handleChangeDate(e.target.value)} />
        <br />
        <label htmlFor="res-number">Choose a number of diners</label>
        <input type="number" id="res-number" />
        <br />
        <label htmlFor="res-time">Choose a time</label>
        <select id="res-time">
          {availableTimes && availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <br />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <br />
        <button className="btn text-white bg-yellow-500" onClick={handleSubmit}>
          Make your reservation
        </button>
      </form>
    </>
  );
}

export default ReservationForm;
