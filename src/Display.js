
export function Display(props)
{
    return(
        <div>
         <img height="150px" width="150px" src={props.image} alt="img"></img>
        <h3>{props.name}</h3>
        <p>{props.decscrption}</p>
        </div>
       

    )
}
