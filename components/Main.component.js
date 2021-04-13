import React, {Component} from "react";

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spText: "OTUZ BİR ÇEKMEK İÇİN TIKLA",
            imgSrc: "https://cdn.discordapp.com/attachments/789139747993681960/831565065319743578/1618330949442.png"
        }
    }

    func = () => {
        this.setState({
            spText: "OTUZ BİRLENDİN",
            imgSrc: "https://cdn.discordapp.com/attachments/789139747993681960/831566123698749480/1618331202608.png"
        });

        document.getElementById('sound').play();
    }

    render() {
        return <main>
            <h4 className={"main__title"}>quick31</h4>
            <div onClick={this.func} className={"div__image"}>
                <img className={"image rounded mx-auto d-block"} align={"center"} src={this.state.imgSrc} alt={""} />
                <br/>
                <h4 className={"main__image_text"} style={{textAlign: "center"}}>{this.state.spText}</h4>
            </div>

            <audio id="sound">
                <source src="https://cdn.discordapp.com/attachments/789139747993681960/830757063814414356/woa.mp3" type="audio/mpeg" />
            </audio>

            <a href={"/faydalari"} className={"informations btn btn-primary"}>
                31'in faydaları
            </a>
            <a href={"/zararlari"} className={"informations1 btn btn-primary"}>
                31'in zararları
            </a>
        </main>
    }
}

export default MainComponent;