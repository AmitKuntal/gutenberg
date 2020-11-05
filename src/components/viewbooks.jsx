import {useParams} from 'react-router-dom';
import ViewBooksHeader from './viewbooksheader';
import Books from './books';

export default function ViewBooks(props){
    const {category} = useParams()
    return(
        <>
            <ViewBooksHeader categoryName={category}/>
            <div className = "container">
                <Books categoryName={category}/>
            </div>
        </>
    )
}