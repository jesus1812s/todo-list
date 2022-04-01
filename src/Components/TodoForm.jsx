import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import FavoriteSelector from './FavoriteSelector';

function TodoForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newTodo = {
        date: new Date().toISOString(),
        text,
        isFavorite,
      };
      handleAdd(newTodo);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Create Todo ?</h2>
        <FavoriteSelector select={(isFavorite) => setIsFavorite(isFavorite)} />
        {/* TODO - finish form*/}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write something"
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
