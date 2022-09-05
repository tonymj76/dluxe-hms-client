import Link from 'next/link';
import FooterStyles from './Footer.module.css';
function Footer() {
    return (
        <>
        <div className={FooterStyles.footer}>
            <div className={FooterStyles.desc}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems: 'center'
                }} className={FooterStyles.descitem}>
                    <div>
                    <h3>OUR LOCATION</h3>
                    <p>No. 86 Graceland Avenue,</p>
                    <p>Tombia Extension, GRA Phase III,</p>
                    <p>Port Harcourt, River State</p>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems: 'center'
                }} className={FooterStyles.descitem}>
                    <div>
                    <h3>PHONE & EMAIL</h3>
                    <Link href="tel:08024207593"><p style={{
                        cursor:'pointer'
                    }}>08024207593,</p></Link>
                    <Link href="tel:07059720900"><p style={{
                        cursor:'pointer'
                    }}>07059720900</p></Link>
                    <Link href="mailto:info@dluxepremium.com">
                    <p style={{
                        cursor:'pointer'
                    }}>info@dluxepremium.com</p>
                    </Link>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems: 'center'
                }} className={FooterStyles.descitem}>
                    <div>
                    <h3>OPEN HOURS</h3>
                    <p>OPEN HOURS</p>
                    <p>24/7</p>
                    </div>
                </div>
            </div>
            <div className={FooterStyles.line}></div>
            <p className={FooterStyles.copyright}>© Copyright 2022 - <span className={FooterStyles.white}>D'Luxé</span> | Created by <Link href="https://www.linkedin.com/in/nnamdi-akunna-192714115/"><span className={FooterStyles.white}>Johnson</span></Link>,<Link href="https://www.linkedin.com/in/brownsamsondappa/"><span className={FooterStyles.white}> Brown</span></Link>, & <Link href="https://jedshock.com"><span className={FooterStyles.white}> Jed</span></Link></p>
        </div>
        </>
    );
}
 
export default Footer;