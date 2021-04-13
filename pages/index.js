import React, {Component} from "react";
import Head from "next/head";
import MainComponent from "../components/Main.component";
import ThemeChanger from "../components/ThemeChanger.component";

export default class Index extends Component {
    render() {
        return (
            <div className={"container"}>
                <Head>
                    <title>quick31.xyz</title>

                    <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
                    <meta name={"keywords"} content={"hızlı 31, quick 31, 31 mizah, 31, 31 çekmenin zararları, 31 çekmenin yararları, seri 31, 31 çekmek, otuzbir çekmek, otuzbirlenmek, 31lenmek, quick31, hızlı31, hızlı boşalmak, quick cum, cum fast"} />
                    <meta name={"description"} content={"kolay 31 çekme yöntemi..."} />

                    <link rel={"icon"} href={"https://media.discordapp.net/attachments/789139747993681960/830818760041562173/pngwing.com_2.png"} />
                </Head>

                <MainComponent />
            </div>
        );
    }
}
