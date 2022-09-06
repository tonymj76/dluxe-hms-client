import {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'react-feather';
import { CSSTransition } from 'react-transition-group';
import NavStyles from './Nav.module.css';
let hardLink = false;

function Nav({path}: any) {
  const router = useRouter();
  const {asPath} = useRouter();
  const [select, setSelect] = useState(path);
  const [bookingID, setBookingID] = useState("");
  const [menuState, setMenuState] = useState("white");
  const menuHandler = () => {
    menuState == "white" ? setMenuState('#92a4df') : setMenuState("white");
  }
  const navClick = (arg: any) => {
    setSelect(arg);
    setMenuState('white');
  }
  const trackClick = () => {
    setBookingID('');
    setMenuState('white');
  }
  useEffect(() => {
    console.log(asPath)
  }, [asPath])

  return (
    <>
      <div className={NavStyles.nav} style={{
        display:(asPath =='/rooms' || asPath =='/spa' || asPath =='/gym' || asPath =='/cinema' || asPath =='/rooftop' || asPath =='/')  ? 'flex':'none'
      }}>
        <img className={NavStyles.logo} src='../logo.svg' />
        <div style={{
          display: 'flex',
          margin: 'auto'
        }}>
          <Link className={NavStyles.desktopNavItem} href={'/'}>
            <div onClick={() => {
              navClick("home")
            }} id="1item" className={NavStyles.navitems}
                 style={{
                   background: select == "home" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                 }}
            >
              <img src={`../img/icons/${select == 'home' ? 'home.svg':'home-dark.svg'}`}/>
              <p style={{
                color: select == 'home' ? 'white':'#bcc7e7'
              }}>Home</p>
            </div>
          </Link>

          <Link className={NavStyles.desktopNavItem} href={'/gym'}>
            <div onClick={() => {
              navClick("gym")
            }} id="2item" className={NavStyles.navitems}
                 style={{
                   background: select == 'gym' ? 'rgba(155, 231, 255, 0.2)':'transparent'
                 }}
            >
              <img src={`../img/icons/${select == 'gym' ? 'gym.svg':'gym-dark.svg'}`}/>
              <p style={{
                color: select == 'gym' ? 'white':'#bcc7e7'
              }}>Gym</p>
            </div>
          </Link>

          <Link className={NavStyles.desktopNavItem} shallow={hardLink} href={'/rooftop'}>
            <div onClick={() => {
              navClick("restaurant")
            }} id="3item" className={`${NavStyles.navitems} restaurant`}
                 style={{
                   background: select == "restaurant" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                 }}
            >
              <img src={`../img/icons/${select == 'restaurant' ? 'restaurant.svg':'restaurant-dark.svg'}`}/>
              <p className={NavStyles.restaurant} style={{
                color: select == 'restaurant' ? 'white':'#bcc7e7'
              }}>Rooftop Bar</p>
            </div>
          </Link>

          <Link className={NavStyles.desktopNavItem} shallow={hardLink} href={'/spa'}>
            <div onClick={() => {
              navClick("spa")
            }} id="spa" className={NavStyles.navitems}
                 style={{
                   background: select == "spa" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                 }}
            >
              <img src={`../img/icons/${select == 'spa' ? 'spa.svg':'spa-dark.svg'}`}/>
              <p style={{
                color: select == 'spa' ? 'white':'#bcc7e7'
              }}>Spa</p>
            </div>
          </Link>


          <Link className={NavStyles.desktopNavItem} shallow={hardLink} href={'/cinema'}>
            <div onClick={() => {
              navClick("cinema")
            }} id="4item" className={NavStyles.navitems}
                 style={{
                   background: select == "cinema" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                 }}
            >
              <img src={`../img/icons/${select == 'cinema' ? 'cinema.svg':'cinema-dark.svg'}`}/>
              <p className={NavStyles.cinema} style={{
                color: select == 'cinema' ? 'white':'#bcc7e7'
              }}>Cinema</p>
            </div>
          </Link>


          <div className={NavStyles.input}>
            <input type="text" onKeyUp={(e) => {
              e.preventDefault();
              if(e.key == "Enter"){
                router.push(`booking/${bookingID}`);
              }
            }} onChange={(e) => {
              let param = e.target.value;
              setBookingID(param)
            }} value={bookingID} placeholder="Booking ID" />
            <Link href={`booking/${bookingID}`}>
              <div onClick={() => trackClick()}>
                <img src="../img/icons/arrow.svg" />
              </div>
            </Link>
          </div>
          <Link href="/rooms">
            <div className={NavStyles.bookNow}>Book now</div>
          </Link>
        </div>
        <div className={NavStyles.menu}>
          <Menu color={menuState} onClick={() => menuHandler()} style={{
            marginRight:'15px'
          }} />
        </div>
      </div>
      <div>
        <CSSTransition
          in={menuState !== "white"}
          timeout={300}
          classNames="my-node1"
          unmountOnExit
        >
          <div className={NavStyles.mobileView}>
            <div style={{
              marginLeft:'auto',
              marginTop:'37px',
              marginRight:'15px'
            }}>
              <X color="white" onClick={() => {
                setMenuState("white")
              }}  />
            </div>
            <div style={{
              paddingLeft:'20px',
              width:'50%',
              height:'100%'
            }}>
              <div className={NavStyles.mobileInput}>
                <input type="text" value={bookingID} onChange={(e) => {
                  let param = e.target.value;
                  setBookingID(param)
                }} placeholder="Booking ID" />
                <Link href={`booking/${bookingID}`}>
                  <div onClick={() => {
                    trackClick()
                  }}>
                    <img src="../img/icons/arrow.svg" />
                  </div>
                </Link>
              </div>
              <Link shallow={hardLink} href={'/'}>
                <div onClick={() => {
                  navClick("home")
                }} id="1item" className={NavStyles.mobileNavitems}
                     style={{
                       background: select == "home" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                     }}
                >
                  <img src={`../img/icons/${select == 'home' ? 'home.svg':'home-dark.svg'}`}/>
                  <p style={{
                    color: select == 'home' ? 'white':'#bcc7e7'
                  }}>Home</p>
                </div>
              </Link>
              <Link shallow={hardLink} href={'/gym'}>
                <div onClick={() => {
                  navClick("gym")
                }} id="1item" className={NavStyles.mobileNavitems}
                     style={{
                       background: select == "gym" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                     }}
                >
                  <img src={`../img/icons/${select == 'gym' ? 'gym.svg':'gym-dark.svg'}`}/>
                  <p style={{
                    color: select == 'gym' ? 'white':'#bcc7e7'
                  }}>Gym</p>
                </div>
              </Link>
              <Link shallow={hardLink} href={'/rooftop'}>
                <div onClick={() => {
                  navClick("restaurant")
                }} id="1item" className={NavStyles.mobileNavitems}
                     style={{
                       background: select == "restaurant" ? 'rgba(155, 231, 255, 0.2)':'transparent',
                       width:'185px'
                     }}
                >
                  <img src={`../img/icons/${select == 'restaurant' ? 'restaurant.svg':'restaurant-dark.svg'}`}/>
                  <p style={{
                    color: select == 'restaurant' ? 'white':'#bcc7e7'
                  }}>Rooftop Bar</p>
                </div>
              </Link>
              <Link shallow={hardLink} href={'/spa'}>
                <div onClick={() => {
                  navClick("spa")
                }} id="1item" className={NavStyles.mobileNavitems}
                     style={{
                       background: select == "spa" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                     }}
                >
                  <img src={`../img/icons/${select == 'spa' ? 'spa.svg':'spa-dark.svg'}`}/>
                  <p style={{
                    color: select == 'spa' ? 'white':'#bcc7e7'
                  }}>Spa</p>
                </div>
              </Link>
              <Link shallow={hardLink} href={'/cinema'}>
                <div onClick={() => {
                  navClick("cinema")
                }} id="1item" className={NavStyles.mobileNavitems}
                     style={{
                       background: select == "cinema" ? 'rgba(155, 231, 255, 0.2)':'transparent'
                     }}
                >
                  <img src={`../img/icons/${select == 'cinema' ? 'cinema.svg':'cinema-dark.svg'}`}/>
                  <p style={{
                    color: select == 'cinema' ? 'white':'#bcc7e7'
                  }}>Cinema</p>
                </div>
              </Link>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}
export default Nav;