import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from '../components/Modal'
import ModalOneStyle from '../components/BookNow.module.css';
import IndexStyle from '../public/css/index.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Styles from '../public/css/rooms.module.css';

export default function Home() {
  const [modalDisp, setModalDisp] = useState(false);
  const [modalDisp1, setModalDisp1] = useState(false);
  const [calendarDisp1, setCalendarDisp1] = useState(false);
  const [calendarDisp2, setCalendarDisp2] = useState(false);
  const [value1, setValue1] = useState(new Date());
  function onChange1(nextValue: any) {
    setValue1(nextValue);
    setCalendarDisp1(false);
  }
  const [value2, setValue2] = useState(new Date())
  function onChange2(nextValue: any) {
    setValue2(nextValue);
    setCalendarDisp2(false);
  }
  return (
    <>
      <Modal top='96px' display={modalDisp == true ? 'flex':'none'}>
        <div className={Styles.modalContent}>
          <img src="/img/icons/close.svg" onClick={() => setModalDisp(false)} style={{
            float:'right',
            marginBottom:'39px'
          }} />
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} interval={5000} swipeable={true}>
            <div>
              <img src="/img/fineRoom.png" style={{
                width:'100%'
              }} />
            </div>
            <div>
              <img src="/img/fineRoom.png" style={{
                width:'100%'
              }} />
            </div>
            <div>
              <img src="/img/fineRoom.png" style={{
                width:'100%'
              }} />
            </div>
            <div>
              <img src="/img/fineRoom.png" style={{
                width:'100%'
              }} />
            </div>
          </Carousel>
          <p className={Styles.heading}>Deluxe Silver Room</p>
          <p className={Styles.description}>Description</p>
          <p className={Styles.descText}>
            D'Luxé ensures that you have a good moment  at all times! Take a break from the commotion.
          </p>
          <div className={Styles.line}></div>
          <p className={Styles.txt1}>Top features</p>
          <div className={Styles.flex1}>
            <div className={Styles.flex1Item}><img src="/img/icons/bed-tiny.svg" /><p>1 Bedroom</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/cinema-tiny.svg" /><p>Free Cinema</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/gym-tiny.svg" /><p>Free Gym</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/wifi.svg" /><p>Free Wifi</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/leaf.svg" /><p>50% Spa Discount</p></div>
          </div>
          <div className={Styles.line}></div>
          <p className={Styles.txt1}>Other Features</p>
          <div className={Styles.flex1}>
            <div className={Styles.flex1Item}><img src="/img/icons/circle-check.svg" /><p>Car Park</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/circle-check.svg" /><p>Lounge & Bar</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/circle-check.svg" /><p>Security</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/circle-check.svg" /><p>Free Laundry</p></div>
            <div className={Styles.flex1Item}><img src="/img/icons/circle-check.svg" /><p>Supplimentary Breakfast</p></div>
          </div>
          <div className={Styles.line}></div>
          <div style={{
            width:'100%'
          }}>
            <div className={Styles.money}>
              <p>NGN 81,000</p>
              <p>Includes taxes and fees</p>
            </div>
            <div onClick={()=> {
              setModalDisp(false);
              setModalDisp1(true);
            }} className={Styles.btnX}>
              Book Now
            </div>
          </div>
        </div>
      </Modal>
      <Modal display={modalDisp1 ? 'flex':'none'} top={""}>
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
                <p className={ModalOneStyle.cardPara}>Executive Suite</p>
                <div className={ModalOneStyle.item1}><img src='../img/icons/bed-tiny.svg' /><p>1 Bedroom</p></div>
                <div className={ModalOneStyle.item1}><img src='../img/icons/cinema-tiny.svg' /><p>Free Cinema</p></div>
                <div className={ModalOneStyle.item1}><img src='../img/icons/wifi.svg' /><p>Free Wifi</p></div>
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
              <p>NGN 81,000</p>
              <p>Includes taxes and fees</p>
            </div>
            <div className={ModalOneStyle.btn}>Proceed to payment</div>
          </div>
        </div>
      </Modal>
      <Head>
        <title>D'Luxe</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/img/home.png" />
      </Head>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} swipeable={false}>
        <div className={IndexStyle.header}>
          <div style={{
            textAlign:'left'
          }}>
            <div className={IndexStyle.headerdesc}>
              Discover a place
              you will call <span className={IndexStyle.span1}>home</span><span className={IndexStyle.span2}>.</span>
            </div>
            <p className={IndexStyle.subheaderdesc}>We give you more of what you want
              and less of what you need.</p>
            <Link href="/rooms">
              <div className={IndexStyle.bookNow}>
                Book now
              </div>
            </Link>
          </div>
        </div>

        <div className={IndexStyle.header}>
          <div style={{
            textAlign:'left'
          }}>
            <div className={IndexStyle.headerdesc}>
              Discover a place
              you will call <span className={IndexStyle.span1}>home</span><span className={IndexStyle.span2}>.</span>
            </div>
            <p className={IndexStyle.subheaderdesc}>We give you more of what you want
              and less of what you need.</p>
            <Link href="/rooms">
              <div className={IndexStyle.bookNow}>
                Book now
              </div>
            </Link>
          </div>
        </div>

        <div className={IndexStyle.header}>
          <div style={{
            textAlign:'left'
          }}>
            <div className={IndexStyle.headerdesc}>
              Discover a place
              you will call <span className={IndexStyle.span1}>home</span><span className={IndexStyle.span2}>.</span>
            </div>
            <p className={IndexStyle.subheaderdesc}>We give you more of what you want
              and less of what you need.</p>
            <Link href="/rooms">
              <div className={IndexStyle.bookNow}>
                Book now
              </div>
            </Link>
          </div>
        </div>
      </Carousel>
      <div
        className={IndexStyle.topServices}>
        <h3 className={IndexStyle.topServicestxt1}>Top Services</h3>
        <p className={IndexStyle.topServicestxt2}>Our exquisite services are tailored exlusively for your comfort
          all for affordable prices. </p>
        <div style={{
          margin:'auto',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent:'center',
          gap:'15px',
          marginBottom: '80px'
        }}>
          <div className={IndexStyle.framesCurved}>
            <Link href="/rooftop">
              <div className={IndexStyle.framesCurvedItems} style={{
                backgroundImage: 'url(/img/eaters.png)'
              }}>
                <p className={IndexStyle.framesCurvedItemsCaption}>Restaurant</p>
              </div>
            </Link>
          </div>
          <div className={IndexStyle.framesCurved}>
            <Link href="/gym">
              <div className={IndexStyle.framesCurvedItems} style={{
                backgroundImage: 'url(/img/gym.png)'
              }}>
                <p className={IndexStyle.framesCurvedItemsCaptionX}>Equipped Gym</p>
              </div>
            </Link>
          </div>
          <div className={IndexStyle.framesCurved}>
            <Link href="/spa">
              <div className={IndexStyle.framesCurvedItems} style={{
                backgroundImage: 'url(/img/spa.png)'
              }}>
                <p className={IndexStyle.framesCurvedItemsCaption}>Spa</p>
              </div>
            </Link>
          </div>
          <div className={IndexStyle.framesCurved}>
            <Link href="/cinema">
              <div className={IndexStyle.framesCurvedItems} style={{
                backgroundImage: 'url(/img/cinema.png)'
              }}>
                <p className={IndexStyle.framesCurvedItemsCaption}>Cinema</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={IndexStyle.section1}>
          <div className={IndexStyle.section1Seg}>
            <div className={IndexStyle.seg1} style={{
              display: 'flex',
              justifyContent: 'flex-start'
            }}><img src='/img/chairs.png'/></div>
            <div className={IndexStyle.seg2X}>
              <div>
                <h4 className={IndexStyle.headerSeg}><img src="/img/icons/beer.svg" className={IndexStyle.imgX} />Lounge & Bar</h4>
                <p className={IndexStyle.paraSeg}>D'Luxé ensures that you have a good moment  at all times! Take a break from the commotion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={IndexStyle.section1}>
          <div className={IndexStyle.sectionXSeg}>
            <div className={IndexStyle.seg1} style={{
              display: 'flex',
            }}><img src='/img/dj.png' style={{
              width:'100%'
            }} /></div>
            <div className={IndexStyle.seg2}>
              <div>
                <h4 className={IndexStyle.headerSeg}>
                  <img src="/img/icons/dance.svg" className={IndexStyle.imgX} />Night Club</h4>
                <p className={IndexStyle.paraSeg}>Refresh your social life. The perfect choice for cordial affairs. cocktails, beer, wine, mocktails, gin & tonic etc…</p>
              </div>
            </div>
          </div>
        </div>

        <div className={IndexStyle.section1}>
          <div className={IndexStyle.section1Seg}>
            <div className={IndexStyle.seg1} style={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}><img src='/img/suite.png'/>
            </div>
            <div className={IndexStyle.seg2X}>
              <div>
                <h4 className={IndexStyle.headerSeg}><img src="/img/icons/beds.svg" className={IndexStyle.imgX} />Suite Accomodation</h4>
                <p className={IndexStyle.paraSeg}>Pay less  and save the difference in a dedicated Amenities, Personal butler service, 4K ultra HD resolution TVs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={IndexStyle.section1} style={{
          position:'relative'
        }}>
          <div className={IndexStyle.sectionXSeg}>
            <div className={IndexStyle.seg1} style={{
              display: 'flex',
            }}><img src='/img/apartment.png' style={{
              width:'100%'
            }} /></div>
            <div className={IndexStyle.seg2}>
              <div>
                <h4 className={IndexStyle.headerSeg}><img src="/img/icons/apartment.svg" className={IndexStyle.imgX} />Apartment</h4>
                <p className={IndexStyle.paraSeg}>Refresh your social life. The perfect choice for cordial affairs. cocktails, beer, wine, mocktails, gin & tonic etc…</p>
              </div>
            </div>
          </div>
        </div>

        <div className={IndexStyle.section2}>
          <div className={IndexStyle.section2Child}>
            <h4 className={IndexStyle.section2ChildHeader}>
              Comfort and
              facilities come first
            </h4>
            <p className={IndexStyle.section2ChildPara}>
              Choose from a wide range of rooms.<br/>24/7 customer service.<br/>Book now for a premium experience.
            </p>
            <p className={IndexStyle.section2ChildCounter}>
              43<span style={{
              color:'#f99e34'
            }}>+</span><span className={IndexStyle.section2Line}></span></p>
            <p style={{
              marginTop:'0px',
              width: '76px',
              height: '30px',
              top: '-75px',
              position:'relative',
              fontFamily: 'Mulish',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '30px',
              letterSpacing: '-0.02em',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>Rooms</p>
          </div>
        </div>
        <div className={IndexStyle.section3}>
          <div className={IndexStyle.bookingCardSection}>
          </div>
          <div className={IndexStyle.bookingCardSection}>
            <div>
              <h3 className={IndexStyle.section3Heading}>Recommended for you</h3>
              <div className={IndexStyle.bookingCard}>
                <div className={IndexStyle.bookingCardItem1}>
                  <div className={IndexStyle.flex1}>
                    <img className={IndexStyle.flex1Img} src="/img/gym.png"/>
                  </div>
                  <div className={IndexStyle.flex2}>
                    <h3 className={IndexStyle.cardH3}>Presidential Suite</h3>
                    <div className={IndexStyle.cardItem}>
                      <img src="img/icons/card-bed.svg" />1 Bedroom
                    </div>
                    <div className={IndexStyle.cardItem}>
                      <img src="img/icons/card-cinema.svg" />Free Cinema
                    </div>
                    <div className={IndexStyle.cardItem}>
                      <img src="img/icons/card-wifi.svg" />Free Wifi
                    </div>
                  </div>
                </div>
                <div className={IndexStyle.bookingCardItem2}>
                  <div className={IndexStyle.bookingCardPriceTag}>
                    <h3>NGN 81,000</h3>
                    <p>Includes taxes and fees</p>
                  </div>
                  <div className={IndexStyle.bookingCardBtn} onClick={() => setModalDisp(true)}>Book now</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className={IndexStyle.section3HeadingX} style={{
                visibility:'hidden'
              }}>Recommended for you</h3>
              <div className={IndexStyle.bookingCard}>
                <div className={IndexStyle.bookingCardItem1}>
                  <div className={IndexStyle.flex1}>
                    <img className={IndexStyle.flex1Img} src="/img/gym.png"/>
                  </div>
                  <div className={IndexStyle.flex2}>
                    <h3 className={IndexStyle.cardH3}>Presidential Suite</h3>
                    <div className={IndexStyle.cardItem}>
                      <img src="img/icons/card-bed.svg" />1 Bedroom
                    </div>
                    <div className={IndexStyle.cardItem}>
                      <img src="img/icons/card-cinema.svg" />Free Cinema
                    </div>
                    <div className={IndexStyle.cardItem}>
                      <img src="img/icons/card-wifi.svg" />Free Wifi
                    </div>
                  </div>
                </div>
                <div className={IndexStyle.bookingCardItem2}>
                  <div className={IndexStyle.bookingCardPriceTag}>
                    <h3>NGN 81,000</h3>
                    <p>Includes taxes and fees</p>
                  </div>
                  <div className={IndexStyle.bookingCardBtn} onClick={() => setModalDisp(true)}>Book now</div>
                </div>
              </div>
            </div>

          </div>
          <div className={IndexStyle.bookingCardSection}>

            <div className={IndexStyle.bookingCard}>
              <div className={IndexStyle.bookingCardItem1}>
                <div className={IndexStyle.flex1}>
                  <img className={IndexStyle.flex1Img} src="/img/gym.png"/>
                </div>
                <div className={IndexStyle.flex2}>
                  <h3 className={IndexStyle.cardH3}>Presidential Suite</h3>
                  <div className={IndexStyle.cardItem}>
                    <img src="img/icons/card-bed.svg" />1 Bedroom
                  </div>
                  <div className={IndexStyle.cardItem}>
                    <img src="img/icons/card-cinema.svg" />Free Cinema
                  </div>
                  <div className={IndexStyle.cardItem}>
                    <img src="img/icons/card-wifi.svg" />Free Wifi
                  </div>
                </div>
              </div>
              <div className={IndexStyle.bookingCardItem2}>
                <div className={IndexStyle.bookingCardPriceTag}>
                  <h3>NGN 81,000</h3>
                  <p>Includes taxes and fees</p>
                </div>
                <div className={IndexStyle.bookingCardBtn} onClick={() => setModalDisp(true)}>Book now</div>
              </div>
            </div>
            <div className={IndexStyle.bookingCard}>
              <div className={IndexStyle.bookingCardItem1}>
                <div className={IndexStyle.flex1}>
                  <img className={IndexStyle.flex1Img} src="/img/gym.png"/>
                </div>
                <div className={IndexStyle.flex2}>
                  <h3 className={IndexStyle.cardH3}>Presidential Suite</h3>
                  <div className={IndexStyle.cardItem}>
                    <img src="img/icons/card-bed.svg" />1 Bedroom
                  </div>
                  <div className={IndexStyle.cardItem}>
                    <img src="img/icons/card-cinema.svg" />Free Cinema
                  </div>
                  <div className={IndexStyle.cardItem}>
                    <img src="img/icons/card-wifi.svg" />Free Wifi
                  </div>
                </div>
              </div>
              <div className={IndexStyle.bookingCardItem2}>
                <div className={IndexStyle.bookingCardPriceTag}>
                  <h3>NGN 81,000</h3>
                  <p>Includes taxes and fees</p>
                </div>
                <div className={IndexStyle.bookingCardBtn} onClick={() => setModalDisp(true)}>Book now</div>
              </div>
            </div>

          </div>

          <div style={{
            display:'flex',
            width:'100%',
            justifyContent:'center',
            marginTop:'76px',
            marginBottom:'111px'
          }}>
            <Link href="/rooms">
              <img src="/img/icons/viewAll.svg" className={IndexStyle.viewAll} />
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}
