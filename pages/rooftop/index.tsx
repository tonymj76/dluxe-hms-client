import { useState } from 'react'
import Head from 'next/head'
import Modal from '../../components/Modal'
import Styles from '../../public/css/restaurant.module.css';
export default function Restaurant() {
  const [modalDisp, setModalDisp] = useState(false);
  return (
    <>
<Modal display={modalDisp == true ? 'flex':'none'}>

</Modal>
<div className="container">
<Head>
<title>D'Luxe</title>
<link rel="icon" href="../favicon.svg" />
</Head>
<div className={Styles.header}>
<div style={{
textAlign:'left'
}}>
<div className={Styles.overlay} >
<div className={Styles.headerdesc}>
Tasty meals<br />
At the <wbr/>rooftop
</div>
<p className={Styles.subheaderdesc}>We give you more of what you want 
and less of what you need.</p>
</div>
</div>
</div>
<div className={Styles.contentBox}>
<div className={Styles.section1}>
          <div className={Styles.section1Seg}>
            <div className={Styles.seg1} style={{
              display: 'flex',
              justifyContent: 'flex-start'
            }}><img src='/img/chairs.png'/></div>
            <div className={Styles.seg2X}>
              <div>
              <h4 className={Styles.headerSeg}><img src="/img/icons/beer.svg" className={Styles.imgX} />Lounge & Bar</h4>
              <p className={Styles.paraSeg}>D'Luxé ensures that you have a good moment  at all times! Take a break from the commotion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.section1}>
          <div className={Styles.sectionXSeg}>
            <div className={Styles.seg1} style={{
              display: 'flex',
            }}><img src='/img/dj.png' style={{
              width:'100%'
            }} /></div>
            <div className={Styles.seg2}>
              <div>
              <h4 className={Styles.headerSeg}>
                <img src="/img/icons/dance.svg" className={Styles.imgX} />Night Club</h4>
              <p className={Styles.paraSeg}>Refresh your social life. The perfect choice for cordial affairs. cocktails, beer, wine, mocktails, gin & tonic etc…</p>
              </div>
            </div>
          </div>
        </div>
</div>
</div>

  </>
  )
}
