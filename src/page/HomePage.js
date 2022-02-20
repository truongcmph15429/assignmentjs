import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/product";

const HomePage = {
    async print(){
        return/* html */`
        <Header>
        ${await Header.print()}
        </Header>
        <main>
        ${Banner.print()}
        ${await Product.print()}
        </main>
        <Footer>
        ${Footer.print()}
        </Footer>
        `;
    },
    aftersubmit(){
        Header.aftersubmit();
    }
};

export default HomePage;