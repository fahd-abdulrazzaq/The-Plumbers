import React from 'react'

export default function Procedure() {
    const howItWorks = [
        {
          title: "Sign Up",
          description: "Create your account and take a quick survey."
        },
        {
          title: "Personalize",
          description: "Get your personalized learning path based on your survey results."
        },
        {
          title: "Learn",
          description: "Access your courses and start learning at your own pace."
        }
      ];
      
  return (
    <div  className='section-container py-20 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <h2 className='title text-center text-blue'>How It Works</h2>
         <div className="flex flex-col md:flex-row gap-8 justifyContent-betwwen items-center">
                        {
                            howItWorks.map((step) => [
                                <div key={step.id}
                                    className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 bg-primary
                        cursor-pointer hover:border hover:border-blue transition-all duration-200"
                                >
                                    <h5 className='pt-3 font-semibold text-xlg text-blue'>{step.title}</h5>
                                    <p className=''>{step.description}</p>
                                </div>
                            ])
                        }
                    </div>
    </div>
  )
}
