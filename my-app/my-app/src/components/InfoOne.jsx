import React from 'react'

function InfoOne() {
  return (
    <div className='container mx-auto flex items-center py-16'>
      <div className="w-1/2">
       <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-auto rounded-lg'/>
      </div>

      <div className="w-1/2 px-6">
        <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
        <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, tempore? Dignissimos obcaecati rem at ullam eos officiis beatae placeat cupiditate.</p>
      </div>
    </div>
  )
}

export default InfoOne
