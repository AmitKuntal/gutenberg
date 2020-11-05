import Next from './../images/Next.svg';
export default function Category(props){
    return(
        <button className="category">
            <div>
            <img src={props.img} className="icon" alt={props.name}/>
            <h3 className="categoryName">{props.name}</h3>
            </div>
            <img src={Next} alt="next" />
        </button>
    )
}