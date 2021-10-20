import style from "./style.module.css";
import PropTypes from "prop-types";

export function Button({handleLoadMore}) {
    return<>
        <div className={style.buttonCont}>
            <button
                className={style.input}
                type="button"
                onClick={handleLoadMore}
                >Load more</button>
        </div>
        </>
}

Button.propTypes = {
    searchRequest:PropTypes.func
}