import Card from './shared/Card';
import { useState, useContext, useEffect } from 'react';
import Button from './shared/Button';
import TodoContext from '../context/TodoContext';

function TodoForm() {
  const [text, setText] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [finished, setFinished] = useState(false);
  const [checked, setChecked] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addTodo, todoEdit, updateTodo } = useContext(TodoContext);

  useEffect(() => {
    if (todoEdit.edit === true) {
      setBtnDisabled(false);
      setText(todoEdit.item.text);
      setFavorite(todoEdit.item.favorite);
      setFinished(todoEdit.item.finished);
      setChecked(todoEdit.item.checked);
    }
  }, [todoEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('The todo must have at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const getDate = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    return date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newTodo = {
        date: getDate(),
        text,
        favorite,
        finished,
        checked,
      };
      if (todoEdit.edit === true) {
        updateTodo(todoEdit.item.id, newTodo);
      } else {
        addTodo(newTodo);
      }
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Create Todo ?</h2>
        <br />
        <label htmlFor="favorite">Add to do to favorites ? </label>
        <input
          type="checkbox"
          id="fav"
          name="favorite"
          value={favorite}
          onChange={() => setFavorite(!favorite)}
          checked={favorite}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your to do here"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default TodoForm;
