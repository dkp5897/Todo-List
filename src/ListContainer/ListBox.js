import "./List.css"

function ListBox(props){
    return(
        <div className="list-box">
           <ul>
          {props.addList.map((obj,index)=>{
            return(<div key={index}>
                <li onClick={props.onListClick} > {obj}</li>
                {props.displayBtn && <><button id="btn-1" onClick={()=>props.onEdit(index)} >Edit</button>
                <button id="btn-2" onClick={()=>props.onDelete(index)} >Delete</button></>}
             </div>)
          })}
           </ul>
        </div>
    )
}

export default ListBox;