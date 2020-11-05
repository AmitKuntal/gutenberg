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
            <Category img={Fiction} name="FICTION"/>
            <Category img={Philosophy} name="PHILOSOPHY"/>
            <Category img={Drama} name="DRAMA"/>
            <Category img={History} name="HISTORY"/>
            <Category img={Humour} name="HUMOUR"/>
            <Category img={Adventure} name="ADVENTURE"/>
            <Category img={Politics} name="POLITICS"/>
        </div>
    )
}