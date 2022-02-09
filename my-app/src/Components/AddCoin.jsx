import React, { useState } from 'react';
import * as actions from "../Store/actions";
import { useDispatch } from "react-redux";

const AddCoin = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const dispatch = useDispatch();

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskSubmit = () => {
    dispatch(actions.addCoin({
      title: taskTitle
    }));
    setTaskTitle('');
  };

  return (
    <div className="row">
        <div className="col-lg-3">
        <input placeholder="Добавить новый таск" value={taskTitle} onChange={e => handleTaskTitleChange(e)} />
            <button variant="outline-secondary" onClick={handleTaskSubmit}>Сохранить</button>
        </div>
    </div>
  )
}
export default AddCoin;