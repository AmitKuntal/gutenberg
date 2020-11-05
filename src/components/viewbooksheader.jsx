import Back from './../images/Back.svg'

export default function ViewBooksHeader(props){
    return(
        <div className="view_books_header container">
            <div className="view_books_heading">
                <img src={Back} alt="back"/>
                <h1 className="bluecolor">{props.categoryName}</h1>
            </div>
            <input type="text" className="search_bar" placeholder="Search"/>
        </div>
    )
}