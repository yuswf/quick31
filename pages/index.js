import React, {Component} from 'react';
import Head from 'next/head';
import ChangeThemeComponent from "../components/ChangeTheme.component";
import ImageComponent from "../components/Image.component";
import FooterComponent from "../components/Footer.component";

class Index extends Component {
    render() {
        return (
            <div className={"container"}>
                <Head>
                    <title>quick31.xyz | qwe</title>
                    <meta name="description" content="31 cekmek artik cok kolay abiii."/>
                </Head>

                <div className="title">
                    <h3>Q U I C K 3 1</h3>
                </div>

                <div className="main">
                    <ChangeThemeComponent />
                    <ImageComponent />
                </div>

                <FooterComponent />
            </div>
        );
    }
}

export default Index;
