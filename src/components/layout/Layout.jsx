import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { ScrollToTop } from "../ScrollToTop";




export const Layout = ({children}) => {
    return(
        <div>
            <ScrollToTop />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
        </div>
    )
}