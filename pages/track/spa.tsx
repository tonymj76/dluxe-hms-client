import Head from 'next/head'
import { useRouter } from 'next/router';
import Styles from '../../public/css/bookingid.module.css'
export default function SpaID() {
  const router = useRouter();
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
        <input type="text" defaultValue="DL980764" placeholder="Booking ID" />
        <div>
            <img src="../../img/icons/arrow.svg" />
        </div>
        </div>
          <div className={Styles.boxy}>
              <p style={{
                  marginBottom: '35px'
              }}>
              <img className={Styles.hashy} src="../../img/icons/hash.svg" />
              <span className={Styles.id}>DL980764</span>
              </p>
            <div className={Styles.fields}>
              <span className={Styles.key}>First Name</span>  
              <span className={Styles.value}>Brown Samson Dappa</span>  
            </div>
            <div className={Styles.fields}>
              <span className={Styles.key}>Email</span>  
              <span className={Styles.value}>brownsamsondappa@gmail.com</span>  
            </div>
            <div className={Styles.fields}>
              <span className={Styles.key}>Phone</span>  
              <span className={Styles.value}>08174969237</span>  
            </div>
            <div className={Styles.fields}>
              <span className={Styles.keyAlt}>Status</span>  
              <span className={Styles.value}>Active <img src="../../img/icons/active.svg" className={Styles.acty} /></span>  
            </div> 
            <div className={Styles.selectedDates}>
                <h3 className={Styles.selectedDatesTxt1}>Selected Dates <img src="../../img/icons/date.svg" /></h3>
                <div className={Styles.selectedItemContainer}>
                <span className={Styles.selectedDatesItem}>Sun, Oct. 9</span>
                <span className={Styles.selectedDatesItem}>Sun, Oct. 9</span>
                <span className={Styles.selectedDatesItem}>Sun, Oct. 9</span>
                <span className={Styles.selectedDatesItem}>Sun, Oct. 9</span>
                <span className={Styles.selectedDatesItem}>Sun, Oct. 9</span>
                <span className={Styles.selectedDatesItem}>Sun, Oct. 9</span>
                </div>
            </div>
            <h3 className={Styles.contentBoxTxt1}>
            Selected Services
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
            <section className={Styles.contentBoxListItem}>
            <input type="checkbox" /><div className={Styles.contentBoxListItemTxt1}>
              <h3>Skincare Analysis</h3>
              <p>30 minutes</p>  
            </div> 
            <p className={Styles.leftX}>
            N15,000
            </p>
            </section>
            <section className={Styles.contentBoxListItem}>
            <input type="checkbox" /><div className={Styles.contentBoxListItemTxt1}>
              <h3>Skincare Analysis</h3>
              <p>30 minutes</p>  
            </div> 
            <p className={Styles.leftX}>
            N15,000
            </p>
            </section>
          <div style={{
                width:'100%',
                marginTop:'51px'
            }}>
                <div className={Styles.money}>
                <p>NGN 81,000</p>
                <p>Paid 17 Feb, 2022</p>
                </div>
            </div>
          </div>
      </div>
    <div className={Styles.whitespace}>

    </div>
    </div>

  </>
  )
}
