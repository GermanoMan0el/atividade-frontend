import './content.css'
import lewis  from "../images/lewis-hamilton.jpg"

export function Content() {
    return (
        <div>
            <img className='image_lewis' src={lewis} alt="Lewis Hamilton" />
            <a href="https://pt.wikipedia.org/wiki/Lewis_Hamilton">
                <p>Sir Lewis Carl Davidson Hamilton MBE HonFREng Kt é um automobilista britânico. Sete vezes campeão mundial de Fórmula 1, nos anos de 2008, 2014, 2015, 2017, 2018, 2019 e 2020, Hamilton é um dos maiores pilotos de todos os tempos, e um dos desportistas mais bem sucedidos da história.</p>
            </a>
        </div>
    )
}