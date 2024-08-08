import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
export default function PlanList({plans}) {
    const[index,setIndex]=useState(0)
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4">
        {plans.map((plan,currentIndex)=>{
            const{name,price,list,delay}=plan
            return(
                <div onClick={()=>{setIndex(currentIndex)}} className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]" key={currentIndex}>
                  <div className={`${currentIndex===index?'bg-neutral-500 text-white':'bg-neutral-400/10 text-neutral-500'}`}>
                    <div className="">
                    {name}
                    </div>
                    <div className="">
                    <div className="">
                    <span className="">{price}</span>
                    <span className="">$</span>
                    </div>
                    <span className="">/month</span>
                    </div>
                    <div className="">
                        <ul className="flex flex-col mb-8 gap-y-4">
                            {list.map((item,idx)=>{
                                return(
                                    <li className="flex items-center gap-x-[10px]"key={idx}>
                                    <BsCheckCircleFill className='text-lg'/>
                                    <div className="">
                                        {item.name}
                                    </div>
                                </li>
                                )

                            })}
                        </ul>
                        <button className={`${currentIndex===index?'bg-white text-neutral-500':'border border-neutral-500'} btn btn-lg  rounded-[1px] lg:mx-auto`}>
                            buy
                            
                        </button>
                    </div>
                  </div>
                  
                </div>
            )
        })}
    </section>
  )
}
