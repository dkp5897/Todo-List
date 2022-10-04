import { useState } from "react";
import "./App.css";
import InputBox from "./InputBox/InputBox";
import ListBox from "./ListContainer/ListBox";

function App() {
  const [getText, setText] = useState("");
  const [getList, setList] = useState([]);
  const [getEdit, setEdit] = useState(false);
  // for edit submit
  const [getIndex, setIndex] = useState(-1);
  const [getbtn,setbtn]=useState(false);

  // updating getText by using on change
  const textAddition = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };

  // adding data on click
  const addTask = () => {
    // alert("clicked")
    getText.length <= 0
      ? alert("Please write a task/data in input ")
      : setList([...getList, getText]);
    setText("");
  };

  // for list btn

  const onListClickHandler=()=>{
    setbtn(true);
    // alert("ckdcd")
  }

  //for edit
  const onEditHandler = (index) => {
    setEdit(true);
    setText(getList[index]);
    setIndex(index);
  };

  const onEditSubmit = (index) => {
    let list = getList;
    list[getIndex] = getText;
    setList([...list]);
    setText(""); //for makling input empty
    setEdit(false); // for display add button after edit
  };

  // deleting data on clicking the delete button
  const onDeleteHandler = (index) => {
    // alert(index);
    let list = getList; //list of data/text
    list.splice(index, 1);
    setList([...list]); // updating list after deleting
  };

  return (
    <div className="App">
      <InputBox
        onChangeHandler={textAddition}
        addHandler={addTask}
        buttonStatus={getEdit}
        value={getText}
        onEditSubmit={onEditSubmit}
      />

      {/* {getList.length>0 && <h1>Your List is Here</h1>} */}
      {getList && getList.length > 0 && (
        <ListBox
          onDelete={onDeleteHandler}
          addList={getList}
          onEdit={onEditHandler}
          onListClick={onListClickHandler}
          displayBtn={getbtn}
        />
      )}
    </div>
  );
}

export default App;
