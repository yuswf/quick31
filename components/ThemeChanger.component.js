import React, {Component} from "react";

export default class ThemeChanger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonText: "Dark"
        }
    }

    changeTheme = () => {
        if (this.state.buttonText === "Dark") {
            this.setState({
                buttonText: "Light"
            });
        } else {
            this.setState({
                buttonText: "Dark"
            });
        }
    }

    render() {
        return <button onClick={this.changeTheme} className={"btn themeButton btn-sm"}>{this.state.buttonText}</button>
    }
}
