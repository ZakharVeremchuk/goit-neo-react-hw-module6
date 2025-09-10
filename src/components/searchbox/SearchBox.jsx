import { useId } from "react";
import css from './SearchBox.module.css';

const SearchBox = ({value, onFilter}) => {
    const searchFieldId = useId()

    return (
        <div className={css.form}>
            <label className={css.label} htmlFor={searchFieldId}>Find contacts by name</label>
            <input className={css.field} type="text" id={searchFieldId} value={value} onChange={ e => onFilter(e.target.value)}/>
        </div>
    )
}

export default SearchBox;