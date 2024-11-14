/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { handlePost, useFetch } from "../usefetch";
import { Navigate } from "react-router-dom";
import Loading from "../comps/Loading";
const ReservationForm = () => {
  const token = localStorage.getItem('auth_token')
  const [prevReservations, setprevReservations] = useState([]);
  const [date, setDate] = useState("");

  const [diners, setDiners] = useState(1);
  const [notes, setNotes] = useState("");
  const {items:reservations,isloading,error} = useFetch("http://127.0.0.1:8000/api/reservations/")
  useEffect(()=>{
    const months = ['Jan',"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    reservations?.forEach(res=>{
      const time = res.time.split("T")
      res["date"] ={
        day:time[0].split('-')[2],
        year:time[0].split('-')[2],
        month:months[parseFloat(time[0].split('-')[1])-1]
      } 
      if(time)res['time'] = time[1]
    })
    setprevReservations(reservations)
  },[reservations])
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      time:date,
      party_size:diners,
      notes,
    };
    handlePost('http://127.0.0.1:8000/api/reservations/',formData)
  }

  return ( 
    <>
    {!token?<Navigate to={"/auth"} />:
        <>
      <div className="banner h-60 flex">
        <h2 className="text-xl font-serif self-center text-white">
          Fill the form below to complete the reservation process
        </h2>
      </div>
      <form className="bg-white self-center m-4 min-w-[90%] md:min-w-[500px] gap-1 -top-24 shadow-lg p-4 relative rounded-md flex flex-col">
        <label htmlFor="res-date">Choose a date</label>
        <input type="datetime-local" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        <label htmlFor="res-number">Choose a number of diners</label>
        <input type="number" value={diners} onChange={(e)=>setDiners(e.target.valueAsNumber)} id="res-number" />
        <br />
        <label htmlFor="notes">Notes</label>
        <textarea value={notes} onChange={e=>setNotes(e.target.value)} id="notes"></textarea>
        <br />
        <button className="btn text-white bg-yellow-500" onClick={handleSubmit}>
          Make your reservation
        </button>
      </form>
      <div className="flex gap-2 flex-col">
        <h3 className="text-xl mb-4 font-semibold">Previus Reservations</h3>
        <Loading isloading={isloading} error={error} />
        {prevReservations.map(res=>
          <div key={res.id} className="flex items-center gap-2">
            <div className="bg-green-400 p-2 text-white">
              <span className="text-xl">{res.date?.day}</span>
              <span className="text-sm">{res.date?.month}</span>
            </div>
            <div className="flex-1">{res.username} and {res.party_size - 1} others </div>
          </div>
        )}
      </div>

      </>}
    </>
  );
}

export default ReservationForm;
