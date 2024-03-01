
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';



const Bookmarks = ({bookmarks,readingTime}) => {
    return (
    
        <div className="md:w-1/3  bg-green-300 rounded-xl ml-4 mt-2 
        pt-2">
            <div>
                <h3>ReadingTime:{readingTime}min</h3>
            </div>
            <h2 className="text-3xl text-center">book marks blogs: {bookmarks.length}</h2>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }

           
            
        </div>
    );
};
 Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number
 }
export default Bookmarks;