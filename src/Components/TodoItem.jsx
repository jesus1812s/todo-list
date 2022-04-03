import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({ item }) {
  const { isSelected, setIsSelected } = useState([]);
  const [finished, setFinished] = useState(false);
  const { deleteTodo, editTodo, updateTodo } = useContext(TodoContext);

  /*  var mainArray = ['One', 'two'];

  const [InputDATA, setInputData] = useState(' ');

  const addElementToArray = () => {
    mainArray.push(InputDATA.toString());

    window.alert('Data Added Successfully...');

    console.log(mainArray);
  }; */

  const finishTodo = () => {
    if (finished === false) {
      setFinished(true);
      updateTodo(item.id, { ...item, finished: true });
    } else {
      setFinished(false);
      updateTodo(item.id, { ...item, finished: false });
    }
  };

  return (
    <Card>
      <div className="num-display">{item.favorite === true ? '👑' : ''}</div>
      {/*TODO need to delete 3 or more items at once*/}
      {/* <div className="input-group">
        <input
          className="delete"
          type="checkbox"
          id={item.id}
          onChange={addElementToArray}
          value={item.id}
        />
        <button onClick={addElementToArray}>Send</button>
      </div> */}

      {/* <input
        className="delete"
        type="checkbox"
        id={item.id}
        name="delete"
        value={item.id}
        onChange={(item) => setInputData(item)}
        checked={InputDATA}
      /> */}
      <button className="close" onClick={() => deleteTodo(item.id)}>
        <FaTimes color="blue" />
      </button>
      <button onClick={() => editTodo(item)} className="edit">
        <FaEdit color="blue" />
      </button>
      <div className="text-display">{item.text}</div>
      <div className="text-display">Creation date: {item.date}</div>
      <button
        className="btn-terciary"
        id={item.id}
        value={item.id}
        onClick={finishTodo}
      >
        {item.finished === false ? 'In progress...' : 'Finished !'}
      </button>
    </Card>
  );
}

TodoItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default TodoItem;
