import React from 'react';

export default function Features() {
  const serviceLists = [
    {
      id: 1,
      title: 'Personalized Learning',
      des: 'Seasoned materials and resources tailored to your need',
    },
    { id: 2, title: 'Expert Tutors', des: 'Learn from experts' },
    {
      id: 3,
      title: 'Interactive Courses',
      des: 'Get access to our engaging materials',
    },
    {
      id: 4,
      title: 'Test and Feedbacks',
      des: 'Partake in test and get results with corrections to errors',
    },
  ];

  return (
    <div className='container pb-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
        {/* text */}
        <div className='md:w-1/2'>
          <div className='text-left md:w-4.5/5'>
            <p className='subtitle'>Why Choose Us ?</p>
            <h2 className='title'>Our Useful Services And Features </h2>
            <p className='my-5 text-secoundary leading-[30px]'>
              Discover the unique benefits that make our platform the ideal
              choice for your personalized learning.
            </p>
            <button className='btn bg-blue text-white px-8 py-3 rounded-full'>
              Explore
            </button>
          </div>
        </div>

        {/* images */}
        <div className='md:w-1/2'>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
            {serviceLists.map((service) => [
              <div
                key={service.id}
                className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 bg-primary
                        cursor-pointer hover:border hover:border-blue transition-all duration-200'
              >
                <h5 className='pt-3 font-semibold text-blue'>
                  {service.title}
                </h5>
                <p className=''>{service.des}</p>
              </div>,
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}
