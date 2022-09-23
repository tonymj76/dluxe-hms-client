import Head from 'next/head'
import Link from 'next/link'
import 'react-calendar/dist/Calendar.css';

import IndexStyle from '../public/css/index.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Home() {
  const {asPath, push} = useRouter()
  const goPage = async (url: string) => {await push(url)}

  useEffect(() => {
    if (asPath.includes("success") || asPath.includes("booking")) {
      goPage(asPath).then()
    }
  }, [asPath])

  return (
    <>
      <Head>
        <title>D'Luxe | Home</title>
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
