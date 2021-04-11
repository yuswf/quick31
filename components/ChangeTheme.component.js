import DarkMode from 'darkmode-js';

function ChangeThemeComponent() {
    const options = {
        bottom: 'unset', // default: '32px'
        right: '20px', // default: '32px'
        top: '20px',
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: false, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
    }

    const mode = new DarkMode(options);
    mode.showWidget();

    return <></>
}

export default ChangeThemeComponent;