import React from 'react'

function InfoTwo() {
  return (
     <div className='container mx-auto flex items-center py-16'>
      <div className="w-1/2 px-6">
        <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
        <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, tempore? Dignissimos obcaecati rem at ullam eos officiis beatae placeat cupiditate.</p>
      </div>
      <div className="w-1/2">
       <img src="https://plus.unsplash.com/premium_photo-1661371300408-48e48cdce71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE3fHxkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-auto rounded-lg'/>
      </div>
    </div>
  )
}

export default InfoTwo
