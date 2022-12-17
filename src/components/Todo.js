import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
//useState is reacthook we can use in react component function

//useState return only two element array
function Todo(props) {
  // props is the javaScrit object
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* {modalIsOpen ? <Modal/>:null} */}
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
{/* this Modal are our own component that is not inbuilt */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
