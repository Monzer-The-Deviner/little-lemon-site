import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipeCard = ({pic,title,description,price,id}) => {
    const termedDescription = description.substring(0,100)+'...'
    return ( 
        <Link to={`/menu/${id}`} className="card self-center">
            <div className="cover bg-center bg-slate-500 h-10" style={{backgroundImage:`url(${pic})`}} />
            
            <div className="caption flex flex-col gap-2">
                <div className="flex font-bold justify-between ">
                    <h3>{title}</h3>
                    <h3 className="text-emerald-950">${price}</h3>
                </div>
                <p className="text-sm text-slate-800">{termedDescription}</p> 
            </div>
        </Link>
     );
}
 
export default RecipeCard;