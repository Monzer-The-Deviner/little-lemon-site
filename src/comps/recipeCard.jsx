/* eslint-disable react/prop-types */
const RecipeCard = ({pic,title,disc,price}) => {
    const termedDisc = disc.substring(0,100)+'...'
    return ( 
        <div className="card">
            <div className="cover bg-slate-500 h-10">

                <img src={pic} alt="" />
            </div>
            <div className="caption flex flex-col gap-2">
                <div className="flex font-bold justify-between ">
                    <h3>{title}</h3>
                    <h3>{price}</h3>
                </div>
                <p className="text-sm text-slate-900">{termedDisc}</p> 
            </div>
        </div>
     );
}
 
export default RecipeCard;