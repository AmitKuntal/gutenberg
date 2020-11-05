import {Link} from 'react-router-dom'

import Next from './../images/Next.svg';
export default function Category(props){
    return(
        <Link className="category" to = {`/${props.name}`}>
            <div>
            <img src={props.img} className="icon" alt={props.name}/>
            <h3 className="categoryName">{props.name.toUpperCase()}</h3>
            </div>
            <img src={Next} alt="next" />
        </Link>
    )
}