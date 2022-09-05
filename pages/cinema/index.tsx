import Head from 'next/head'
import Styles from 'public/css/cinema.module.css';

export default function Cinema() {
  return (
    <>
    <div className="container">
      <Head>
        <title>D'Luxe</title>
        <link rel="icon" href="../favicon.svg" />
        <link rel="preload" href="../../img/cinema00.png" as="image" />
      </Head>
    <div className={Styles.header}>
      <div style={{
        textAlign:'left'
      }}>
        <div className={""}>
            <div className={Styles.headerdesc}>
            World Class 
            Cinema
          </div>
          <p className={Styles.subheaderdesc}>We give you more of what you want 
          and less of what you need.</p>
        </div>
        </div>
      </div>
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
                <img src="../img/cinema01.png" />
            </div>
            <div className={Styles.flex2}>
                <div><img src="../img/cinema02.png"/></div>
                <div><img src="../img/cinema03.png"/></div>
            </div>
        </div>
        <div style={{
          display:'flex',
          justifyContent:'center',
          width:'100%'
        }}>
        <div className={Styles.footerCard}>
          <div className={Styles.writeUp}>
            Cinema service is available
            to only apartment occupants
          </div>
          <div className={Styles.button}>Book Apartment</div>
        </div> 
        </div>
      </div>       
    </div>
  </>
  )
}
