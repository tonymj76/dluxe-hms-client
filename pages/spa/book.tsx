import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Modal from '../../components/Modal'
import Styles from '../../public/css/bookspa.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ModalOneStyle from '../../components/BookNow.module.css';


export default function Spa(){
const router = useRouter();
const [modalDisp, setModalDisp] = useState(false);  
const [calendarDisp1, setCalendarDisp1] = useState(false);
const [value1, setValue1] = useState(new Date());
function onChange1(nextValue) {
  setValue1(nextValue);
  setCalendarDisp1(false);
}
  return (<>
<Head>
    <title>D'Luxe</title>
    <link rel="icon" href="../../favicon.svg" />
    <link rel="preload" href="../../img/spa-bg.png" as="image" />
</Head>
<Modal top="96px" display={modalDisp == true ? 'flex':'none'}>
        <div className={ModalOneStyle.modalContent}>
            <div className={ModalOneStyle.flex}>
                <div className={ModalOneStyle.flexChild1}>
                    <div className={ModalOneStyle.flexy}>
                    <img src="../../img/icons/leafs.svg" style={{
                    width:'39px',
                    marginRight:'16px'
                    }} /><span className={ModalOneStyle.span}>Book Spa</span>
                    </div>
                </div>
                <div className={ModalOneStyle.flexChild2}
                >
                <img src="../../img/icons/close.svg" onClick={() => {
                    setModalDisp(false);
                }} />
                </div>
            </div>
            <div className={ModalOneStyle.form}>
                <div className={ModalOneStyle.formItem1}>
                <div>
                    <label htmlFor="phone">Phone Number</label><br />
                    <input type="tel" placeholder="Enter your phone number" id="phone" />
                </div>
                </div>
                <div className={ModalOneStyle.formItem2}>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder="email@domain.com" id="email" />
                </div>
                </div>
            </div>     
            <div className={ModalOneStyle.form}>
                <div className={ModalOneStyle.formItem1}>
                <div>
                    <label htmlFor="name">First Name</label><br />
                    <input type="text" placeholder="Enter your first name" id="name" />
                </div>
                </div>
                <div className={ModalOneStyle.formItem2}>
                <div>
                    <label htmlFor="name">Last Name</label><br />
                    <input type="text" placeholder="Enter your last name" id="name" />
                </div>
                </div>
            </div>     
            <div className={ModalOneStyle.form}>
                <div className={ModalOneStyle.formItem1}>
                <div>
                    <label htmlFor="name">Select Dates <img src="../../img/icons/date.svg" /></label><br />
                    <input onClick={() => {setCalendarDisp1(true)}} disabled={calendarDisp1} type="text" className={ModalOneStyle.customInput} value={value1.toString().slice(0, 15)} readOnly={true} placeholder="DD/MM/YYYY" id="name" />
                    <div style={{
                        display: calendarDisp1 == false ? 'none':'flex'
                    }}>
                    <Calendar
                    onChange={onChange1}
                    value={value1}
                    />
                    </div>
                </div>
                </div>
                <div id="hidy" style={{
                  visibility:'hidden'
                }} className={Styles.hidy}>
                <div>
                    <label htmlFor="name">Check-out Date <img src="../../img/icons/date.svg" /></label><br />
                    <input disabled={true} type="text" className={ModalOneStyle.customInput}  readOnly={true} placeholder="DD/MM/YYYY" id="name" />
                    <div style={{
                        display: 'none'
                    }}>
                    </div>
                </div>
                </div>
            </div> 
            <input type="checkbox" className={ModalOneStyle.checkbox} /><p className={ModalOneStyle.txt1}>Request Pickup<br /><span className={ModalOneStyle.txt2}>Extra fee of <span className={ModalOneStyle.txt3}>NGN 5,000</span></span></p> 
            <div className={ModalOneStyle.block1}>
            <img src="../../img/icons/appointment.svg" style={{
                marginRight: '16px'
            }} /> 
            <div>
            <p className={ModalOneStyle.txt4}>
            Booking Confirmed   
            </p> 
            <p className={ModalOneStyle.txt5}>
            Booking available from 12/03/2022 to 16/03/2022
            </p>   
            </div>   
            </div> 
            <p className={ModalOneStyle.txt6}>Booking will only be reserved for 15 minutes till payment is confirmed</p>
            <input type="checkbox" className={ModalOneStyle.checkbox} /><p className={ModalOneStyle.txt1}>Accept <a className={ModalOneStyle.txt7} href="#">Terms & Conditions</a></p>
            <div className={ModalOneStyle.block2}>
                <div className={ModalOneStyle.block3}>
                <p>NGN 81,000</p>
                <p>Includes taxes and fees</p>
                </div> 
                <div className={ModalOneStyle.btn}>Proceed to payment</div> 
            </div>
        </div>
</Modal>
<div className={Styles.header}>
    <section className={Styles.overlay}>
    <img className={Styles.logo} src='../../logo.svg' />
    <div className={Styles.bookNow} onClick={() => {
      router.back();
    }}>Go Back</div>
        <p className={Styles.headerTxt1}>
        A Spa with 
        exquisite services
        </p>
        <p className={Styles.headerTxt2}>
        We give you more of what you want 
        and less of what you need.
        </p>
        <Link href="/track/spa">
        <button className={Styles.headerBtn}>
        Track Spa Booking
        </button>
        </Link>
    </section>
</div>
<div className={Styles.contentBox}>
    <div className={Styles.contentBoxHolder}>
    <h3 className={Styles.contentBoxTxt1}>
        Consultation
    </h3>
        <section className={Styles.contentBoxListItem}>
        <input type="checkbox" /><div className={Styles.contentBoxListItemTxt1}>
          <h3>Skincare Analysis</h3>
          <p>30 minutes</p>  
        </div> 
        <p className={Styles.left}>
        N15,000
        </p>
        </section>
        <section>
        <h3 className={Styles.contentBoxTxt2}>Massages Treatment</h3>
        <p className={Styles.contentBoxTxt3}>
        Online prices are applicable to appointments booked online. 
        The walk-in price will apply if client is more than 5 minutes late to an appointment reserved online
        </p>
        </section>
        <section  style={{
          marginTop:'90px'
        }} className={Styles.contentBoxListItem}>
        <input type="checkbox" /><div className={Styles.contentBoxListItemTxt1}>
          <h3>Aromatherapy Massage</h3>
          <p>30 minutes</p>  
        </div> 
        <p className={Styles.leftX}>
        N15,000
        </p>
        </section>
        <section className={Styles.contentBoxListItem}>
        <input type="checkbox" /><div className={Styles.contentBoxListItemTxt1}>
          <h3>Deep Tissue Massage</h3>
          <p>30 minutes</p>  
        </div> 
        <p className={Styles.leftX}>
        N15,000
        </p>
        </section>
        <section className={Styles.contentBoxListItem}>
        <input type="checkbox" /><div className={Styles.contentBoxListItemTxt1}>
          <h3>Swedish Massage</h3>
          <p>30 minutes</p>  
        </div> 
        <p className={Styles.leftX}>
        N15,000
        </p>
        </section>
        <h3 className={Styles.contentBoxTxt1}>
        Intravenous IV
        </h3>
        <section className={Styles.contentBoxListItem}>
        <input type="checkbox" /><div className={Styles.contentBoxListItemTxt1}>
          <h3>Skincare Analysis</h3>
          <p>30 minutes</p>  
        </div> 
        <p className={Styles.left}>
        N15,000
        </p>
        </section>
    <div className={Styles.footerCard}>
      <div className={Styles.writeUp}>
        <p>5 items selected</p>
        <p>NGN 3,000</p>
      </div>
      <div onClick={() => setModalDisp(true)} className={Styles.button}>Order</div>
    </div>
    </div>
</div>

    </>);
}