import { useState,useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./style.module.css";
import {SearchBar, Button, ImageGalleryItem, Modal, request } from "./index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



export function ImageGallery (){

  // state = {
  //       dataArray: [],
  //       page: 1,
  //       status: "idle",
  //       showModal: false,
  //       modalUrl: "",
  //       searchRequest:""
  // }
  
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [searchRequest, setSearchRequest] = useState("");
  

  // getSnapshotBeforeUpdate(prevProps, prevState) { return document.querySelector("body").clientHeight }
  // 

  useEffect(() => {
    setStatus("pending");
          
    request(page, searchRequest)
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
  }, [searchRequest])
  
 
  useEffect(() => {
     setStatus("pending")
           
           request(page,searchRequest)
          .then((res) => {
           if (res.data.hits.length < 1) {
             toast.warn("These are all pictures for this request");
             setStatus("idle");
          } else {
             setDataArray((prevState) => 
               [...prevState, ...res.data.hits]
             );
             setStatus("resolved");             
                    
            //  window.scrollTo({
            //     top: pos-35,
            //     behavior: "smooth"
            //          });            
                }})
             .catch((err) => {
               setStatus("reject");
               console.log(err)
             }) 
  },[page])



  //  componentDidUpdate( a,prevState,pos) {
  //       const { state } = this;

  //    if (prevState.searchRequest !== state.searchRequest) {
  //          this.setState({status:"pending"})
          
  //      request(state.page, state.searchRequest)
  //             .then((res) => {
  //              if (res.data.hits.length < 1) {
  //                toast.warn("Check your request, no data received");
  //                this.setState({ status: "idle" });
  //              }else{this.setState({
  //                 dataArray: res.data.hits,
  //                 status:"resolved"
  //                   })};})
  //              .catch(() => this.setState({ status: "reject" }))
           
  //      } else if (prevState.page !== state.page) {
  //          this.setState({status:"pending"})
           
  //          request(state.page, state.searchRequest)
  //         .then((res) => {
  //          if (res.data.hits.length < 1) {
  //            toast.warn("These are all pictures for this request");
  //            this.setState({status:"idle"})
  //         } else {
  //            this.setState((prevState) => ({
  //            dataArray: [...prevState.dataArray, ...res.data.hits],
  //            status:"resolved"
  //               })); 
                    
  //            window.scrollTo({
  //               top: pos-35,
  //               behavior: "smooth"
  //                    });            
  //               }})
  //            .catch((err) => {
  //              this.setState({ status: "reject" });
  //              console.log(err)
  //            })      
  //    } else if (prevState.showModal === true & state.showModal === false) {
  //      window.scrollTo({
  //               top: pos
  //               // behavior: "smooth"
  //                    }); 
  //   }
  // } 

 const closeModal = () => {
   setShowModal(false);
   setStatus("resolved");
       }
  
  
  const openModalData = (e) => {    
      
    setShowModal(true);
        
    setModalUrl(gettingLink(e));
      
    setStatus("idle");       
        }
  
  const gettingLink=(e)=>{
    const modalId=e.target.id;
    const obj = dataArray.find((el) => el.id.toString() === modalId)
    if(obj){return obj.largeImageURL}   
       };

  const handleLoadMore = () => setPage(
    (prevState) =>prevState + 1
    );
  
  const handleSubmit = (text) => {
    setPage(1);
    setSearchRequest(text)
  };
       
    
    return <>
      {status === "reject" && toast.error("unknown error, check connection")}

      {status === "pending" && (
        <div  className={style.spinContainer}>
            <Loader type="Circles" color="#00BFFF" height={120} width={120} />
        </div>)
           }

      {showModal &&
        <Modal
          closeModal={closeModal}>
          <img src={modalUrl} className={style.modalImg} alt="" />             
        </Modal>}
          
      <SearchBar handleSubmit={handleSubmit} />

      {!showModal &&
        <ul className={style.gallery}>
            <ImageGalleryItem
            dataArray={dataArray}
            openModalData={openModalData}
              />
        </ul>}
         
      {status === "resolved" &&
        (<Button
          handleLoadMore={handleLoadMore} />)}
      
        </>
    }



 
