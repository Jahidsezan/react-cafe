
import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const{title,cover,reading_time,author_img,author,posted_date,hashtags}=blog;
    return (
        <div className='mb-20  space-y-4'>
            <img src={cover} className='w-full mb-8' alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                 <div className='flex'>
                     <img className='w-14' src={author_img} alt="this is author" />
                     <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                     </div>
                      

                 </div>
                 <div>
                      <span>{reading_time} min red</span>
                      <button 
                      onClick={()=>handleAddToBookmark(blog)}
                      className='ml-4 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                 </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button
             onClick={()=>handleMarkAsRead(reading_time)}            
            className='text-purple-600 font-bold underline'>mark as read</button>
            
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
 
export default Blog;