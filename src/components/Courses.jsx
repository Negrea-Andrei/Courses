import Card from "./Card";

const Courses = () => {
  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        {/* Need to add slider*/}
        <Card />
      </div>
    </div>
  );
};

export default Courses;
