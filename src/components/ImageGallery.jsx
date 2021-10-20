import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./style.module.css";
import {SearchBar, Button, ImageGalleryItem, Modal, request } from "./index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


class ImageGallery extends Component{

  state = {
        dataArray: [],
        page: 1,
        status: "idle",
        showModal: false,
        modalUrl: "",
        searchRequest:""
    }

  getSnapshotBeforeUpdate(prevProps, prevState) { return document.querySelector("body").clientHeight }
  // 

   componentDidUpdate( a,prevState,pos) {
        const { state } = this;

     if (prevState.searchRequest !== state.searchRequest) {
           this.setState({status:"pending"})
          
       request(state.page, state.searchRequest)
              .then((res) => {
               if (res.data.hits.length < 1) {
                 toast.warn("Check your request, no data received");
                 this.setState({ status: "idle" });
               }else{this.setState({
                  dataArray: res.data.hits,
                  status:"resolved"
                    })};})
               .catch(() => this.setState({ status: "reject" }))
           
       } else if (prevState.page !== state.page) {
           this.setState({status:"pending"})
           
           request(state.page, state.searchRequest)
          .then((res) => {
           if (res.data.hits.length < 1) {
             toast.warn("These are all pictures for this request");
             this.setState({status:"idle"})
          } else {
             this.setState((prevState) => ({
             dataArray: [...prevState.dataArray, ...res.data.hits],
             status:"resolved"
                })); 
                    
             window.scrollTo({
                top: pos-35,
                behavior: "smooth"
                     });            
                }})
             .catch((err) => {
               this.setState({ status: "reject" });
               console.log(err)
             })      
    }
  } 

  toggleModal = () => {
    this.setState((prev) => ({
    showModal: !prev.showModal,
    status:!prev.showModal?"idle":"resolved"
       }))}
  
  
  toggleModalData = (e) => {    
      this.setState((prev) => ({
      showModal: !prev.showModal,
      modalUrl: this.gettingLink(prev,e),
      status:!prev.showModal?"idle":"resolved"       
        }))}
  
  gettingLink(prev,e) {
    const modalId=e.target.id;
    const obj = prev.dataArray.find((el) => el.id.toString() === modalId)
    if(obj){return obj.largeImageURL}   
       };

  handleLoadMore = () => this.setState((prevState) => ({
    page: prevState.page + 1
      }));
  

  handleSubmit = (text) => {
    this.setState({ page: 1,searchRequest: text });
       };




  render() {
    const { state, handleLoadMore, toggleModal, toggleModalData, handleSubmit } = this
    
    return <>
      {state.status === "reject" && toast.error("unknown error, check connection")}

      {state.status === "pending" && (
        <div  className={style.spinContainer}>
            <Loader type="Circles" color="#00BFFF" height={120} width={120} />
        </div>)
           }

      {state.showModal &&
        <Modal
          toggleModal={toggleModal}>
          <img src={state.modalUrl} className={style.modalImg} alt="" />             
        </Modal>}
          
      <SearchBar handleSubmit={handleSubmit} />

      {!state.showModal &&
        <ul className={style.gallery}>
            <ImageGalleryItem
            dataArray={state.dataArray}
            toggleModalData={toggleModalData}
              />
        </ul>}
         
      {state.status === "resolved" &&
        (<Button
          handleLoadMore={handleLoadMore} />)}
      
        </>
    }
}


export { ImageGallery }
