import style from "./style.module.css";
import PropTypes from "prop-types";

export  function ImageGalleryItem({ dataArray, openModalData }) {
  
 return dataArray.map(el => 
    (       
    <li className={style.photoCard} key={el.id} id={el.id}  >
     <img
       onClick={(e) => openModalData(e)}
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
  openModalData:PropTypes.func.isRequired
}

