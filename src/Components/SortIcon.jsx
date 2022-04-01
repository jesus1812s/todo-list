import { FaSortAmountUpAlt, FaSortAmountDown } from 'react-icons/fa';

function SortIcon() {
  return (
    <>
      <div className="sort-link">
        <FaSortAmountUpAlt size={30} />
      </div>
      <div className="favoriteSort-link">
        <FaSortAmountDown size={30} />
      </div>
    </>
  );
}

export default SortIcon;
