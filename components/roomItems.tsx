import React, {memo} from 'react';
import Styles from "/public/css/rooms.module.css";
import {IRoom, IRoomRes} from "types/responseType";

interface IRoomItems {
  room: IRoom[];
  setModal: (arg: boolean) => void;
  setSelectedRoom: (arg: IRoom) => void;
}

interface IRoomItem {
  item: IRoom;
  setModal: (arg: boolean) => void;
  setSelectedRoom: (arg: IRoom) => void;
}

function RoomItems ({room, setModal, setSelectedRoom}: IRoomItems){
  return  (
    <div className={Styles.bookingCardSection}>
      {
        (room || []).map((room: IRoom, idx: number) => (
          <RoomItem
            item={room}
            setModal={setModal}
            setSelectedRoom={setSelectedRoom}
            key={idx}
          />
        ))
      }
    </div>
  )
};

function RoomItem ({item, setModal, setSelectedRoom}: IRoomItem) {
  const handleClick = () => {
    setModal(true)
    setSelectedRoom(item);
  }
  return (
      <div className={Styles.bookingCard}>
        <div className={Styles.bookingCardItem1}>
          <div className={Styles.flex1}>
            <img className={Styles.flex1Img} src="../img/gym.png"/>
          </div>
          <div className={Styles.flex2}>
            <h3 className={Styles.cardH3}>{item.title}</h3>
            {
              (item?.features || []).map(feature => {
                if(feature.toLowerCase() === '1 bedroom') {
                  return (
                    <div className={Styles.cardItem} key={feature}>
                    <img src="../img/icons/card-bed.svg" />{feature}
                  </div>);
                }
                if(feature.toLowerCase() === 'free wifi') {
                  return (
                    <div className={Styles.cardItem} key={feature}>
                    <img src="../img/icons/card-wifi.svg" />{feature}
                  </div>);
                }
                if(feature.toLowerCase() === 'free cinema') {
                  return (
                    <div className={Styles.cardItem} key={feature}>
                    <img src="../img/icons/card-cinema.svg" />{feature}
                  </div>);
                }
              })
            }
        </div>
        </div>

        <div className={Styles.bookingCardItem2}>
          <div className={Styles.bookingCardPriceTag}>
            <h3>{item.price}</h3>
            <p>Includes taxes and fees</p>
          </div>
          <div className={Styles.bookingCardBtn} onClick={handleClick}>Book now</div>
        </div>
      </div>
  );
}

export default memo(RoomItems)