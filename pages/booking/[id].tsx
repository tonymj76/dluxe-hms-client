import { useRouter } from 'next/router'
import Head from 'next/head'
import Styles from '../../public/css/bookingid.module.css'
import {useGetBookByRef} from "hooks/useGetBookByRef";
import {IBookingDetail} from "types/responseType";
import {formatDateDayMonthYear} from "types/helper";

export default function BookingID() {
  const router = useRouter();
  const { id }  =  router.query;
  const [detail] = useGetBookByRef(id as string)
  const data: IBookingDetail = detail as IBookingDetail
  return (
    <>
    <div className="container">
      <Head>
        <title>D'Luxe</title>
        <link rel="icon" href="../favicon.svg" />
      </Head>
      <div className={Styles.header}>
      <img className={Styles.logo} src='../../logo.svg' />
        <div className={Styles.bookNow} onClick={() => {
          router.back();
        }}>Go Back</div>
          <p className={Styles.txt1}>Track your bookings</p>
          <div className={Styles.input}>
        <input type="text" defaultValue={id} placeholder="Booking ID" />
        <div>
            <img src="../../img/icons/arrow.svg" />
        </div>
        </div>
        {data && (
          <div className={Styles.boxy}>
            <p style={{
              marginBottom: '35px'
            }}>
              <img style={{
                position:'relative',
                marginRight:'16px'
              }} src="../../img/icons/hash.svg" />
              <span className={Styles.id}>{id}</span>
            </p>
            <div className={Styles.card}>
              <div className={Styles.flexChild11}>
                <img src="../../img/gym-tiny.png" className={Styles.imgy} />
              </div>
              <div className={Styles.flexChild12}>
                <div>
                  <p className={Styles.cardPara}>{data?.rents[0].rooms[0].title}</p>
                  <div className={Styles.flexy}>
                    <div className={Styles.item1}><img src='../../img/icons/bed-tiny.svg' /><p>1 Bedroom</p></div>
                    <div className={Styles.item2}><img src='../../img/icons/cinema-tiny.svg' /><p>Free Cinema</p></div>
                    <div className={Styles.item3}><img src='../../img/icons/wifi.svg' /><p>Free Wifi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.fields}>
              <span className={Styles.key}>Name</span>
              <span className={Styles.value}>{data?.name}</span>
            </div>
            <div className={Styles.fields}>
              <span className={Styles.key}>Email</span>
              <span className={Styles.value}>{data?.email}</span>
            </div>
            <div className={Styles.fields}>
              <span className={Styles.key}>Phone</span>
              <span className={Styles.value}>{data?.phoneNumber}</span>
            </div>
            <div className={Styles.fields}>
              <span className={Styles.keyAlt}>Status</span>
              <span className={Styles.value}>Active <img src="../../img/icons/active.svg" className={Styles.acty} /></span>
            </div>
            <div style={{
              width:'100%',
              height:'100px'
            }}>
              <div style={{
                display:'inline-block',
                float:'left'
              }}>
                <p className={Styles.txt2}>Check-in-date <img src="../../img/icons/date.svg" /></p>
                <p className={Styles.txt3}>
                  {formatDateDayMonthYear(data?.checkInDate)}
                </p>
              </div>
              <div  style={{
                display:'inline-block',
                float:'right'
              }}>
                <p className={Styles.txt2} style={{
                  textAlign:'right'
                }}>Check-out-date <img src="../../img/icons/date.svg" /></p>
                <p className={Styles.txt3}>{formatDateDayMonthYear(data?.checkOutDate)}</p>
              </div>
            </div>
            <div style={{
              borderTop:'0.5px solid rgba(36, 71, 196, 0.15)',
              paddingTop:'36px',
              width:'100%'
            }}>
              <input className={Styles.checked} type="checkbox" /><span className={Styles.txt4}>Requested Pickup</span>
            </div>
            <div style={{
              width:'100%',
              marginTop:'134px'
            }}>
              <div className={Styles.money}>
                <p>{data?.rents[0]?.amount}</p>
                <p>Paid {formatDateDayMonthYear(data?.createdAt)}</p>
              </div>
              <div className={Styles.btnX}>
                Reschedule
              </div>
            </div>
          </div>
        )}
        {
          !data && (
            <p className={Styles.cardPara}>No Data</p>
          )
        }
      </div>
    <div className={Styles.whitespace}>

    </div>
    </div>

  </>
  )
}
