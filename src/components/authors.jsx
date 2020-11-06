export default function Authors(props){
    return(<span className="book_author">
        {props.authors.map((author)=>author.name)}</span>
    )
}