import Category from './category';
import Fiction from './../images/Fiction.svg';
import Philosophy from './../images/Philosophy.svg'
import Drama from './../images/Drama.svg';
import History from './../images/History.svg';
import Humour from './../images/Humour.svg';
import Adventure from './../images/Adventure.svg';
import Politics from './../images/Politics.svg';

export default function Categories(){
    return(
        <div className="container categories">
            <Category img={Fiction} name="Fiction"/>
            <Category img={Philosophy} name="Philosophy"/>
            <Category img={Drama} name="Drama"/>
            <Category img={History} name="History"/>
            <Category img={Humour} name="Humour"/>
            <Category img={Adventure} name="Adventure"/>
            <Category img={Politics} name="Politics"/>
        </div>
    )
}