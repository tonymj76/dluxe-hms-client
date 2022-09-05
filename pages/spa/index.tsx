import Head from 'next/head'
import { useState } from 'react'
import Modal from '../../components/Modal'
import Link from 'next/link';
import Styles from '../../public/css/spa.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ModalOneStyle from '../../components/BookNow.module.css';
export default function Spa(){
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
      <link rel="icon" href="../favicon.svg" />
      <link rel="preload" href="../img/spa-bg.png" as="image" />
    </Head>
    <Modal display={modalDisp == true ? 'flex':'none'}>
      <div className={ModalOneStyle.modalContent}>
        <div className={ModalOneStyle.flex}>
          <div className={ModalOneStyle.flexChild1}>
            <div className={ModalOneStyle.flexy}>
              <img src="../img/icons/leafs.svg" style={{
                width:'39px',
                marginRight:'16px'
              }} /><span className={ModalOneStyle.span}>Book Spa</span>
            </div>
          </div>
          <div className={ModalOneStyle.flexChild2}
          >
            <img src="../img/icons/close.svg" onClick={() => {
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
              <label htmlFor="name">Select Dates <img src="../img/icons/date.svg" /></label><br />
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
              <label htmlFor="name">Check-out Date <img src="../img/icons/date.svg" /></label><br />
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
          <img src="../img/icons/appointment.svg" style={{
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
        <p className={Styles.headerTxt1}>
          A Spa with
          exquisite services
        </p>
        <p className={Styles.headerTxt2}>
          We give you more of what you want
          and less of what you need.
        </p>
      </section>
    </div>
    <div className={Styles.contentBox}>
      <div style={{
        width:'100%',
        height:'fit-content',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        marginTop:'73px'
      }}>
        <div className={Styles.flex}>
          <div className={Styles.flex1}>
            <img src="../img/gym01.png" />
          </div>
          <div className={Styles.flex2}>
            <div><img src="../img/gym02.png"/></div>
            <div><img src="../img/gym03.png"/></div>
          </div>
        </div>
        <div style={{
          width: '100%',
          display:'flex',
          justifyContent:'center'
        }}>
          <div className={Styles.footerCard}>
            <div className={Styles.writeUp}>
              Spa service is available
              to only apartment occupants
            </div>
            <Link href="/spa/book/">
              <div className={Styles.button}>Book Appointment</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>);
}