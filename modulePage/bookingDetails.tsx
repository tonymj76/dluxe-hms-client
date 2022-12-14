import React, {memo, useEffect} from 'react';
import Head from "next/head";
import Styles from "public/css/bookingSuccess.module.css";
import {formatToUpper} from "types/helper";
import {IBookingDetail} from "types/responseType";

interface IBookingDetails {
  data?: IBookingDetail
}

function BookingDetails({data} : IBookingDetails) {

  return (
    <>
      <div className="container">
        <Head>
          <title>D'Luxe | success</title>
          <link rel="icon" href="../favicon.svg" />
        </Head>
        {data && (
          <div className={Styles.header}>
            <div className={Styles.boxy}>
              <div className={Styles.card}>
                <div className={Styles.flexChild11}>
                  <img src="../img/gym-tiny.png" style={{
                    borderRadius: '6px',
                    position: 'relative',
                    top: '6px',
                    left: '7px'
                  }} />
                </div>
                <div className={Styles.flexChild12}>
                  <div>
                    <p className={Styles.cardPara}>{data?.rents[0].rooms[0].title}</p>
                    <div className={Styles.flexy}>
                      <div className={Styles.item1}><img src='../img/icons/bed-tiny.svg' /><p>1 Bedroom</p></div>
                      <div className={Styles.item2}><img src='../img/icons/cinema-tiny.svg' /><p>Free Cinema</p></div>
                      <div className={Styles.item3}><img src='../img/icons/wifi.svg' /><p>Free Wifi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className={Styles.heading}>
                Booking Successful
              </p>
              <p className={Styles.idHead}>Booking ID</p>
              <p className={Styles.bookingID}>
                {formatToUpper(data?.BookingReference)?? "error getting reference"}
              </p>
              <p className={Styles.note}>Note</p>
              <p className={Styles.notes}>Kindly keep your booking ID safe, as it will be required to check you in,     reschedule and track your reservation.
                A copy of your booking ID has been sent to
                <span style={{color:"#2447C4", paddingLeft: '5px'}}>{data?.email}</span>
              </p>
              <div className={Styles.line}></div>
              <div className={Styles.boxyFoot}>
                <div className={Styles.boxyFootContact}>
                  <p className={Styles.contUs}>
                    Contact us
                  </p>
                  <p>
                    <span style={{color:"#2447C4"}}>t:</span> 08020000097, 08020000098<br />
                    <span style={{color:"#2447C4"}}>e:</span> frontdesk@dluxe.com
                  </p>
                </div>
                <div className={Styles.boxyFootBtn}>
                  View Booking
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={Styles.whitespace}>

        </div>
      </div>
    </>
  )
}

export default BookingDetails;