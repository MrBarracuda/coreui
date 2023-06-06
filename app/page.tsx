"use client"
import styles from './page.module.css'
import Charts from "@/components/Charts";
import SideBar from "@/components/side-bar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Provider} from "react-redux";
import store from "@/app/store";
import '@coreui/coreui/dist/css/coreui.min.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Provider store={store}>
      {/*<SideBar />*/}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {/*<Header />*/}
        <div className="body flex-grow-1 px-3">

        </div>
        {/*<Footer />*/}
      </div>
      </Provider>
    </main>
  )
}
