/* eslint-disable react/prop-types */
const RecipeCard = ({pic,title,disc,price}) => {
    return ( 
        <div>
            <div className="cover bg-slate-500 h-9 w-6">

                <img src={pic} alt="" />
            </div>
            <div className="caption">
                <div>
                    <h3>{title}</h3>
                    <h3>{price}</h3>
                </div>
                <p>{disc}</p> 
            </div>
        </div>
     );
}
 
export default RecipeCard;