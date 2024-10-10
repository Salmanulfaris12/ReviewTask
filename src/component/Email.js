import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Email = () => {
    const [email, setEmail] = useState([])
    const [showEmailId, setShowEmailId] = useState(null)
    
  
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(res => setEmail(res.data))
        .catch(err => console.log("error occurred", err))
    }, [])

    const handleClick = (id) => {
        if (showEmailId === id) {
            setShowEmailId(null); 
        } else {
            setShowEmailId(id); 
        }
    }
    
    return (
        <div className='w-3/5 p-6 mt-20 mx-auto rounded-lg bg-teal-800 shadow-lg'>
            
            {
                email.map((item) => (
                    <div className='mb-4 border border-gray-200 rounded-lg bg-teal-50 hover:bg-teal-100 shadow-md text-center' key={item.id}>
                        <div className='cursor-pointer  text-lg  font-bold text-teal-700'
                            onClick={() => handleClick(item.id)}
                        >
                            {item.email}
                        </div>
                        {showEmailId === item.id && <div className="p-3 bg-gray-50 rounded-b-lg text-gray-600">{item.body}</div>}
                    </div>
                ))
            }
        </div>
    )
}

export default Email
