import React from 'react'

const OrderModal = ({setOpenOrderModal,setOrderModal}) => {
  return (
    <div className="delete-modal">
    <div className="delete-container">
      <p>Təsdiqləmək istədiyinizə əminsiniz?</p>
      <div className="modal-btn">
        <button
          className="cancel-btn"
          onClick={() => setOpenOrderModal(false)}
        >
          Ləğv et
        </button>
        <button className="delete-btn" onClick={()=>{
            setOrderModal(false)
        }} >
          Bağla
        </button>
      </div>
    </div>
  </div>
  )
}

export default OrderModal