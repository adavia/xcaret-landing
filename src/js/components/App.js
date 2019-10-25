import React from 'react';
import Header from './shared/Header';
import SubMenu from './shared/SubMenu';
import Form from './Form';
import About from './About';
import PaymentInfo from './PaymentInfo';
import Subscriptions from './Subscriptions';
import Content from './Content';
import Footer from './shared/Footer';

const subMenu1 = {
    item1: 'Compra tu admisión',
    item2: 'Atracciones',
    item3: 'Gastronomía',
    item4: 'Cómo llegar'
}

const subMenu2 = {
    item1: '¿Qué es XCARET?',
    item2: 'Qué incluye',
    item3: 'Recomendaciones',
    item4: 'Información importante'
}

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <SubMenu items={subMenu1} />
            <div className="flex flex-wrap mx-4 my-6">
                <div className="hidden w-full md:w-3/5 md:block">
                    <Content />
                </div>
                <div className="w-full md:w-2/5">
                    <Form />
                </div>
            </div>
            <SubMenu items={subMenu2} />
            <About />
            <PaymentInfo />
            <Subscriptions />
            <Footer />
        </React.Fragment>
    );
}

export default App;
