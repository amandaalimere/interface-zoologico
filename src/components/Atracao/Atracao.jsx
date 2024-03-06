import ImgNotFound from '../../assets/img-not-found.png'
import './Atracao.css'

function Atracao() {
   return (
    <div className="ctn-atracao">
       <img src={ImgNotFound} />
       <p>Lorem Impsum</p>
    </div>
   );

}

export default Atracao;