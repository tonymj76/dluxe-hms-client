import Head from 'next/head'
import Styles from '../../public/css/gym.module.css';
export default function Gym() {
  return (
    <>
    <div className="container">
      <Head>
        <title>D'Luxe</title>
        <link rel="icon" href="../favicon.svg" />
        <link rel="preload" href="../img/gym00.png" as="image" />
      </Head>
    <div className={Styles.header}>
      <div style={{
        textAlign:'left'
      }}>
        <div className={Styles.overlay}>
            <div className={Styles.headerdesc}>
            Well equipped gym with<br /> 
            professional instructors
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
                <img src="../img/gym01.png" />
            </div>
            <div className={Styles.flex2}>
                <div><img src="../img/gym02.png"/></div>
                <div><img src="../img/gym03.png"/></div>
            </div>
        </div>
        <div style={{
          width:'100%',
          display:'flex',
          justifyContent:'center'
        }}>
        <div className={Styles.footerCard}>
          <div className={Styles.writeUp}>
            Gym service is available
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
