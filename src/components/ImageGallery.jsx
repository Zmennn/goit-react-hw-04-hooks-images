import { useState, useRef, useCallback } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./style.module.css";
import {SearchBar, Button, ImageGalleryItem, Modal, request } from "./index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



export function ImageGallery() {

  const [dataArray, setDataArray] = useState([]);
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  
  let hight = useRef(0);
  let lastRequest = useRef("");
  let currentPage = useRef(1);
  let modalUrl = useRef("");

  const hightCalc=() => { hight.current = document.querySelector("body").clientHeight }; 

  const handleSubmit=useCallback((text) => {
    if (lastRequest === "") { return }
    hightCalc()
    currentPage.current=1;
    lastRequest.current = text;
    setStatus("pending");
          
    request(currentPage.current, lastRequest.current)
      .then((res) => {
        if (res.data.hits.length < 1) {
          toast.warn("Check your request, no data received");
          setStatus("idle");
        }
        else {
          setDataArray(res.data.hits);
          setStatus("resolved");
        }
      })
      .catch(() => this.setStatus("reject"));
  },[]);
  
 

  const handleLoadMore=useCallback(() => {
    if (lastRequest === "") { return }
    hightCalc()
    setStatus("pending")
     currentPage.current=currentPage.current+1      
    request(currentPage.current, lastRequest.current)
      .then((res) => {
        if (res.data.hits.length < 1) {
          toast.warn("These are all pictures for this request");
          setStatus("idle");
        } else {
          setDataArray((prevState) =>
            [...prevState, ...res.data.hits]
          );
          setStatus("resolved");
                    
          window.scrollTo({
            top: hight.current - 35,
            behavior: "smooth"
          });
        }
      })
      .catch((err) => {
        setStatus("reject");
        console.log(err)
      })
  },[]);

  const closeModal = () => {  
    setShowModal(false);
    setStatus("resolved");
  };
  
  const openModalData = (e) => { 
    setShowModal(true);
    modalUrl.current = gettingLink(e);
    setStatus("idle");
  };
  
  const gettingLink = (e) => {
    const modalId = e.target.id;
    const obj = dataArray.find((el) => el.id.toString() === modalId)
    if (obj) { return obj.largeImageURL }
  };
       
     
  return <>
      
    {status === "reject" && toast.error("unknown error, check connection")}
    
    {status === "pending" && (
      <div className={style.spinContainer}>
        <Loader type="Circles" color="#00BFFF" height={120} width={120} />
      </div>)
    }

    {showModal &&
      <Modal
        closeModal={closeModal}>
        <img src={modalUrl.current} className={style.modalImg} alt="" />
      </Modal>}
          
    <SearchBar handleSubmit={handleSubmit} />
  
    < ul className={style.gallery}>
      <ImageGalleryItem
      dataArray={dataArray}
      openModalData={openModalData}
      />
     </ul>
       
      {status === "resolved" &&
        (<Button
        handleLoadMore={handleLoadMore} />)}
    
        </>
    }



 
