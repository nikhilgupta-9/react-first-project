import React from 'react'
import { Button } from "@/components/ui/button"

const Card = ({title = "Default", imageUrl, buttonText}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow-xl/30 overflow-hidden">
          <img
            src={imageUrl}
            alt="Sample Image"
          />
          <div className="p-4">
            <h2 className="text-red-600 mt-2">{title}</h2>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae sit quos tempore debitis non aliquam deleniti,
              distinctio ab ducimus unde nam dolorem eveniet facere corrupti
             
            </p>
            {/* <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm px-4 py-2.5 focus:outline-none">
              {buttonText}
            </button> */}
            <Button>
                {buttonText}
            </Button>
          </div>
        </div>
  )
}

export default Card
