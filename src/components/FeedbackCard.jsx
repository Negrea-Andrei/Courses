import React from 'react'

const FeedbackCard = ({ student }) => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={student.avatar} className='w-[70px] h-[71px]' />
                <div>
                    <h1>{student.name}</h1>
                    <p>{student.position}</p>
                </div>
            
            </div>
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>{student.review}</h3>
      </div>
    </div>
  )
}

export default FeedbackCard