import Authors from './authors';

export default function Book(props){
    return (
        <div className="book_card">
            <img src={props.book.formats["image/jpeg"]} alt="book-cover"/>
            <span className="book_title">{props.book.title}</span>
            <Authors authors={props.book.authors} />
        </div>
    )
}