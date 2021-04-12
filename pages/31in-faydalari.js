import React, {Component} from 'react';
import Head from 'next/head';
import ChangeThemeComponent from "../components/ChangeTheme.component";
import FooterComponent from "../components/Footer.component";

class Sex extends Component {
    render() {
        return (
 <div className={"container"}>
        <h1>31'in faydaları</h1>
<ul>
<li>Stresi Azaltır</li>
<br/>
<li>Mutluluk Artar</li>
<br/>
<li>Uyku Artar</li>
<br/>
  <li>Haftada ortalama 5-7 defa 31 çeken insanlarda kalp krizi, enfarktüs, miyokardiyal iskemi riskleri azalır.</li>
  <br/>  
<li>Düzenli 31 çeken insanların prostat kanserine yakalanma ihtimalleri azalır. Özellikle 20'li yaşlarda haftada 5 ya da daha fazla defa 31 çeken (veya genel olarak boşalan) kişilerde bu risk minimuma iner. Ancak bu sayı abartılırsa kansere yakalanma oranı artar.</li>
  <br/>    
<li>Aynı zamanda 31 çeken kişilerin, sırf bu hissi yaşamak için tanımadıkları insanlarla seks yaparak cinsel yolla bulaşan hastalıklara yakalanma riskleri azalır.</li> 
   <br/>  
  <li>Bunların yanı sıra, 31 sayesinde sikiş miktarı azaltılarak, istenmedik doğumların da önüne geçilir.</li>
   <br/>  
  <li>31 veya sikiş yoluyla düzenli boşalmak, sperm kalitesi ve hareketliliğini arttırır. Bu da cinsel gücün artması demektir.</li>
   <br/>  
  <li>Düzenli çekilen 31, daralmış damarların ve solunum yollarının açılmasını ve açık tutulmasını sağlar.</li>
<br/>
  <li>Çok yapıldığında sağır ettiği söyleniyor.(diyenlerin yalancısıyım hiç denemedim.)</li>
</ul>

<style jsx>
    {`
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400);
* { box-sizing: border-box; }
body { 
  max-width: 1000px;
  min-width: 300px;
  margin: 0 auto;
  padding: @pad;
  font-size: 1.2em;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
h1, h2, h3 { margin-top: 0; }
h1, h2 { text-transform: uppercase; }
hr { 
  border: none;
  border-top: solid 1px fade(@tableColour,50%);
  margin: 2em 0;
}
                             `}
</style>
<ChangeThemeComponent />
<FooterComponent />
</div>
        );
    }
}

export default Sex;
