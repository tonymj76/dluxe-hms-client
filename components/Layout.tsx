import Nav from './Nav';
import Footer from './Footer';
import { useRouter } from 'next/router';
export default function Layout({children}){
    let path = '';
    const {asPath} = useRouter();
    if(asPath == "/cinema/"){
        path = "cinema";
    }
    if(asPath == "/spa/"){
       path = "spa";
    }
    if(asPath == "/rooftop/"){
        path = "restaurant";
    }
    if(asPath == "/"){
        path = "home";
    }
    if(asPath == "/gym/"){
        path = "gym";
    }   
    return (<>
    <Nav path={path} />
    {children}
    <Footer />
    </>);
}