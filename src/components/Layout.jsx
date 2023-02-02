// NextJS
import Head from "next/head";
// Components
import Navbar from './Navbar';

export default function Layout({title, maxw, px, py, children}) {
    return(
        <div>
            <Head>
                <title>{title} | Pride</title>
            </Head>
            <div>
                <Navbar />
                <div className={`max-w-${maxw} mx-auto`} style={{padding: `${py ? py : '0'}rem ${px ? px : '0'}rem`}}>{children}</div>
            </div>
        </div>
    )
}