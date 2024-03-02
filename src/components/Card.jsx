import course1 from "../assets/course1.jpg";
import Rating from "./Rating";
const Card = ({course}) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4'>
        <img src={course.linkImg} 
                className="h-40 w-full object-cover"
        
        />
        <div className='p-5 border border-b'>
            <h1 className='py-2 truncate'>{course.title}</h1>
            <Rating rating={course.rating}/>
        </div>
        <h3 className='p-5 text-xl'>{course.price}</h3>
    </div>
  )
}

export default Card