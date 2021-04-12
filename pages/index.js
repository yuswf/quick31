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
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="icon" href="https://media.discordapp.net/attachments/789139747993681960/830818760041562173/pngwing.com_2.png" />
<meta name="keywords" content="hızlı 31, quick 31, 31 mizah, 31, 31 çekmenin zararları, 31 çekmenin yararları, seri 31, 31 çekmek, otuzbir çekmek, otuzbirlenmek, 31lenmek, quick31, hızlı31, hızlı boşalmak, quick cum, cum fast" />
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
