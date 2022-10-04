import "./InputBox.css";

function InputBox(props) {
  return (
    <div className="input-box">
      <input type="text" name="input" value={props.value} onChange={props.onChangeHandler} />
      {props.buttonStatus ? (
        <button className="add-btn" onClick={props.onEditSubmit}>
        <i class="fa-solid fa-check"></i>
        </button>
      ) : (
        <button className="add-btn" onClick={props.addHandler}>
          ADD
        </button>
      )}
    </div>
  );
}

export default InputBox;
