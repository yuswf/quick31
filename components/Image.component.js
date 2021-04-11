import React, {Component} from 'react';
import Image from "next/image";

class ImageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgURL: "/../public/images/first.png",
            text: "O T U Z B İ R Ç E K M E K İ Ç İ N T I K L A"
        }

        this.changeImage = this.changeImage.bind(this);
    }

    changeImage = (e) => {
        this.setState({
            imgURL: "/../public/images/second.png",
            text: "O T U Z B İ R L E N D İ N"
        });

        document.getElementById('sound').play();
    }

    render() {
        return (
            <div onClick={this.changeImage} className={"imgContainer"}>
                <Image src={this.state.imgURL}
                       alt=""
                       width={350}
                       height={350}>
                </Image>

                <h4 className={"text"}>{this.state.text}</h4>

                <audio id="sound">
                    <source src="https://cdn.discordapp.com/attachments/789139747993681960/830757063814414356/woa.mp3" type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default ImageComponent;