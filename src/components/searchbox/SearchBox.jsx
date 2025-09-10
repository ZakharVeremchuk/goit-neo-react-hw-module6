import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const searchFieldId = useId();

  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.form}>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        id={searchFieldId}
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
