import style from "./style.module.css";
import PropTypes from "prop-types";

export  function ImageGalleryItem({ dataArray, toggleModalData }) {
  
 return dataArray.map(el => 
    (       
    <li className={style.photoCard} key={el.id} id={el.id}  >
     <img
       onClick={(e) => toggleModalData(e)}
       className={style.photoImg}
       src={el.webformatURL} alt=""
       id={el.id}
     />
    </li>
  )
  )
}
  
ImageGalleryItem.propTypes = {
  dataArray: PropTypes.array.isRequired,
  toggleModalData:PropTypes.func.isRequired
}

