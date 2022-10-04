import "./List.css";

function ListBox(props) {
  return (
    <div className="list-box">
      <ul>
        {props.addList.map((obj, index) => {
          return (
            <div key={index}>
              <li> {obj}</li>
              <div className="btns">
              <button id="btn-1" onClick={() => props.onEdit(index)}>
              <i class="fa-solid fa-pen-nib" style={{color:'green'}}></i>
              </button>
              <button id="btn-2" onClick={() => props.onDelete(index)}>
              <i class="fa-solid fa-trash" style={{color:'red'}}></i>
              </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListBox;
