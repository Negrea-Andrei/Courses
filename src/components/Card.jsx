import course1 from "../assets/course1.jpg";
import Rating from "./Rating";
const Card = () => {
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4">
      <img className="w-full h-40 object-cover" src={course1} />
      <div className="p-5">
        <h1>Test</h1>
        <div className="flex">
            <Rating />
        </div>
      </div>
    </div>
  );
};

export default Card;
