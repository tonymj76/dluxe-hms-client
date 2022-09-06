import React, {useState, useRef, useEffect, useMemo} from 'react'
import Modal from '../../components/Modal'
import Calendar from 'react-calendar';
import ModalOneStyle from '../../components/BookNow.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Styles from '../../public/css/rooms.module.css';
import {useFetchRoomQuery} from "redux/services/room";
import {PageHead} from "components/pageHead";
import  RoomItems from "components/roomItems";
import {IRoom} from "types/responseType";

export default function Rooms() {
  const [calendarDisp1, setCalendarDisp1] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<IRoom>();
  const [calendarDisp2, setCalendarDisp2] = useState(false);
  const [modalDisp, setModalDisp] = useState(false);
  const [modalDisp1, setModalDisp1] = useState(false);
  const [value1, setValue1] = useState(new Date());
  const {data: roomData, isFetching } = useFetchRoomQuery(null, {
    skip: false,
  })


  const rooms = useMemo(() => {
    if(!roomData) return [];
    return [...roomData?.data]
  }, [roomData])

  useEffect(() => {
    console.log(selectedRoom)}, [selectedRoom])
  useEffect(() => {
    switch2.current.classList.add('switchOut');
    switch1.current.classList.add('switchIn');
  });
  const [tab, setTab] = useState(true);
  useEffect(() => {
    if(!tab){
      switch1.current.classList.remove('switchIn')
      switch2.current.classList.remove('switchOut')
      switch1.current.classList.add('switchOut')
      switch2.current.classList.add('switchIn')
    }else{
      switch2.current.classList.remove('switchIn')
      switch1.current.classList.remove('switchOut')
      switch2.current.classList.add('switchOut')
      switch1.current.classList.add('switchIn')
    }
  }, [tab]);


  function onChange1(nextValue: any) {
    setValue1(nextValue);
    setCalendarDisp1(false);
  }
  const [value2, setValue2] = useState(new Date())

  function onChange2(nextValue: any) {
    setValue2(nextValue);
    setCalendarDisp2(false);
  }

  const switch1 = useRef(null);
  const switch2 = useRef(null);

  function switching2(){
    setTab(!tab);
  }
  function switching1(){
    setTab(!tab);
  }

  return (
    <>
      <Modal display={modalDisp1 ? 'flex':'none'}>
        <div className={ModalOneStyle.modalContent}>
          <div className={ModalOneStyle.flex}>
            <div className={ModalOneStyle.flexChild1}>
              <div className={ModalOneStyle.flexy}>
                <img src="../img/icons/beds.svg" style={{
                  width:'39px',
                  marginRight:'16px'
                }} /><span className={ModalOneStyle.span}>Book now</span>
              </div>
            </div>
            <div className={ModalOneStyle.flexChild2}
            >
              <img src="../img/icons/close.svg" onClick={() => {
                setModalDisp1(false);
              }} />
            </div>
          </div>
          <div className={ModalOneStyle.card}>
            <div className={ModalOneStyle.flexChild11}>
              <img src="../img/gym-tiny.png" className={ModalOneStyle.flexChild11Img}/>
            </div>
            <div className={ModalOneStyle.flexChild12}>
              <div style={{
                width:'100%'
              }}>
                <p className={ModalOneStyle.cardPara}>{selectedRoom?.title}</p>
                {
                  (selectedRoom?.features || []).map(feature => {
                    if(feature.toLowerCase() === '1 bedroom') {
                      return (
                        <div className={ModalOneStyle.item1} key={feature}>
                          <img src="../img/icons/card-bed.svg" />{feature}
                        </div>);
                    }
                    if(feature.toLowerCase() === 'free wifi') {
                      return (
                        <div className={ModalOneStyle.item1} key={feature}>
                          <img src="../img/icons/card-wifi.svg" />{feature}
                        </div>);
                    }
                    if(feature.toLowerCase() === 'free cinema') {
                      return (
                        <div className={ModalOneStyle.item1} key={feature}>
                          <img src="../img/icons/card-cinema.svg" />{feature}
                        </div>);
                    }
                  })
                }
              </div>
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
                <label htmlFor="name">Check-in Date <img src="../img/icons/date.svg" /></label><br />
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
            <div className={ModalOneStyle.formItem2}>
              <div>
                <label htmlFor="name">Check-out Date <img src="../img/icons/date.svg" /></label><br />
                <input onClick={() =>{setCalendarDisp2(true)}} disabled={calendarDisp2} type="text" className={ModalOneStyle.customInput} value={value2.toString().slice(0, 15)} readOnly={true} placeholder="DD/MM/YYYY" id="name" />
                <div style={{
                  display: calendarDisp2 == false ? 'none':'flex'
                }}>
                  <Calendar
                    onChange={onChange2}
                    value={value2}
                  />
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
              <p>{selectedRoom?.price}</p>
              <p>Includes taxes and fees</p>
            </div>
            <div className={ModalOneStyle.btn}>Proceed to payment</div>
          </div>
        </div>
      </Modal>
      <Modal top='96px' display={modalDisp ? 'flex':'none'}>
        <div className={Styles.modalContent}>
          <img src="../../img/icons/close.svg" onClick={() => setModalDisp(false)} style={{
            float:'right',
            marginBottom:'39px'
          }} />
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} interval={5000} swipeable={true}>
            { (selectedRoom?.images || []).map(image => (
              <div key={image}>
                <img src={image} style={{
                  width:'100%'
                }} />
              </div>
            ))}
          </Carousel>
          <p className={Styles.heading}>{selectedRoom?.title}</p>
          <p className={Styles.description}>Description</p>
          <p className={Styles.descText}>
            {selectedRoom?.description}
          </p>
          <div className={Styles.line}></div>
          <p className={Styles.txt1}>Top features</p>
          <div className={Styles.flex1}>
            {
              (selectedRoom?.features || []).map(feature => {
                if(feature.toLowerCase() === '1 bedroom') {
                  return (
                    <div className={Styles.flex1Item} key={feature}>
                      <img src="../../img/icons/bed-tiny.svg" />{feature}
                    </div>);
                }
                if(feature.toLowerCase() === 'free wifi') {
                  return (
                    <div className={Styles.flex1Item} key={feature}>
                      <img src="../../img/icons/wifi.svg" />{feature}
                    </div>);
                }
                if(feature.toLowerCase() === 'free cinema') {
                  return (
                    <div className={Styles.flex1Item} key={feature}>
                      <img src="../../img/icons/cinema-tiny.svg" />{feature}
                    </div>);
                }if(feature.toLowerCase() === 'free gym') {
                  return (
                    <div className={Styles.flex1Item} key={feature}>
                      <img src="../../img/icons/gym-tiny.svg" />{feature}
                    </div>);
                }if(feature.toLowerCase() === '50% spa discount') {
                  return (
                    <div className={Styles.flex1Item} key={feature}>
                      <img src="../../img/icons/leaf.svg" />{feature}
                    </div>);
                }
              })
            }
          </div>
          <div className={Styles.line}></div>
          <p className={Styles.txt1}>Other Features</p>
          <div className={Styles.flex1}>
            {
              (selectedRoom?.otherFeatures || []).map((feature: string) => (
                <div className={Styles.flex1Item} key={feature}>
                  <img src="../../img/icons/circle-check.svg" /><p>{feature}</p>
                </div>
              ))
            }
          </div>
          <div className={Styles.line}></div>
          <div style={{
            width:'100%'
          }}>
            <div className={Styles.money}>
              <p>{selectedRoom?.price}</p>
              <p>Includes taxes and fees</p>
            </div>
            <div>
              <div className={Styles.btnX} onClick={()=> {
                setModalDisp(false);
                setModalDisp1(true);
              }}>
                Book Now
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="container">
        <PageHead title={'Rooms'}/>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} swipeable={false}>
          <div className={Styles.header}>
            <div style={{
              textAlign:'left'
            }}>
              <div className={Styles.headerdesc}>
                Discover a place
                you will call <span className={Styles.span1}>home</span><span className={Styles.span2}>.</span>
              </div>
              <p className={Styles.subheaderdesc}>We give you more of what you want
                and less of what you need.</p>
            </div>
          </div>

          <div className={Styles.header}>
            <div style={{
              textAlign:'left'
            }}>
              <div className={Styles.headerdesc}>
                Discover a place
                you will call <span className={Styles.span1}>home</span><span className={Styles.span2}>.</span>
              </div>
              <p className={Styles.subheaderdesc}>We give you more of what you want
                and less of what you need.</p>
            </div>
          </div>

          <div className={Styles.header}>
            <div style={{
              textAlign:'left'
            }}>
              <div className={Styles.headerdesc}>
                Discover a place
                you will call <span className={Styles.span1}>home</span><span className={Styles.span2}>.</span>
              </div>
              <p className={Styles.subheaderdesc}>We give you more of what you want
                and less of what you need.</p>
            </div>
          </div>
        </Carousel>
        <div
          className={Styles.sectionParent}>
          <div className={Styles.tools}>
            <div className={Styles.holder}>
              <div className={Styles.switch}>
                <div ref={switch1} onClick={switching2} className={Styles.switch1}>
                  Hotel Rooms
                </div>
                <div ref={switch2} onClick={switching1} className={Styles.switch2}>
                  Apartment
                </div>
              </div>
            </div>
            <div className={Styles.btnCenter}>
              <div className={Styles.btnHolders}>
                <div className={Styles.btn1}>Filter<img src='../../img/icons/funnel.svg' style={{
                  position:"relative",
                  left: "10px"
                }} /></div>
                <div className={Styles.btn2}>
                  Sort<img src='../../img/icons/sort.svg' style={{
                  position:"relative",
                  left: "10px"
                }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{
            display: tab ? "block":'none'
          }}>
            <RoomItems room={(rooms as IRoom[])} setModal={setModalDisp} setSelectedRoom={setSelectedRoom}/>
          </div>
          <div style={{
            display: tab ? 'none':'block'
          }}>
            <RoomItems room={rooms} setModal={setModalDisp} setSelectedRoom={setSelectedRoom}/>
          </div>
        </div>
      </div>
    </>
  )
}