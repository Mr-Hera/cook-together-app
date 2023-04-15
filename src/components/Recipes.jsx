import React from 'react'
import Recipe from './Recipe'

const Recipes = () => {
  return (
    <>
        <div className="flex flex-col justify-center my-4 p-8 w-3/4">
            <div className="flex flex-col justify-center align-center mx-auto w-3/4 p-8">
                <div className="border-b w-3/4 m-10 p-4">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        RECIPES[TODO]
                    </h4>
                </div>
                <div className="border-x-4 w-3/4 m-10 p-4">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        <Recipe />
                    </h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Recipes
