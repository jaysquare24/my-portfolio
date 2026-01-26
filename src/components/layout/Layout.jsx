import { Header } from "../common/Header";
import { Footer } from "../common/Footer";


export const Layout = ({children}) => {
    return(
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}