/* eslint-disable react/prop-types */
const ReservationForm = ({avilableTimes,handleSelectDate}) => {
    console.log(avilableTimes)
    return ( 
        <>
        <div className="banner h-60 flex ">
            <h2 className="text-xl font-serif self-center text-white">fill the form bellow <br />to complete the reservation process</h2>
        </div>
            <form className="bg-white self-center m-4 min-w-[90%] md:min-w-[500px] gap-1 -top-24 shadow-lg p-4 relative rounded-md flex flex-col " action="">
                <label htmlFor="res-date">chose a date</label>
                <input type="date" id="res-date" onChange={(e)=>handleSelectDate(e.target.value)} />
                <br />
                <label htmlFor="res-number">chose a number of diners</label>
                <input type="number" id="res-number" />
                <br />
                <label htmlFor="res-time">choose a time</label>
                <select name="" id="res-time">
                    {avilableTimes && avilableTimes.map(time=> <option key={time} value={time}>{time}</option>)}
                </select>
                <br />
                <label htmlFor="occeasion">Occeasion</label>
                <select name="" id="occeasion">
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <br />
                <button className="btn text-white bg-yellow-500" onClick={(e)=>{
                    e.preventDefault()
                    console.log(document.getElementById('res-date').value);
                }}>Make your reservation</button>
            </form>

        </>
     );
}
 
export default ReservationForm;