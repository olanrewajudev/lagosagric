import Footer from "./Footer"
import Header from "./Header"

type LayoutProps = {
    children: React.ReactNode
}

const Layouts: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layouts
