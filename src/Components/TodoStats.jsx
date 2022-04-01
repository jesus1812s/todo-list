import propTypes from 'prop-types';

function TodoStats({ todo }) {
  // Calculate the average rating
  let average =
    todo.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / todo.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{todo.length} To Do Task</h4>
      <h4>Average rating: {isNaN(average) ? 'No todos yet' : average}</h4>
    </div>
  );
}

TodoStats.propTypes = {
  todo: propTypes.array.isRequired,
};

export default TodoStats;
