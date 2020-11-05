export default function Book(props){
    return (
        <div className="book_card">
            <img src={'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg'} alt="book-cover"/>
            <span className="book_title">Alice's Adventures in Wonderland</span>
            <span className="book_author">Carroll, Lewis</span>
        </div>
    )
}