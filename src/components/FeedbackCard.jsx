const FeedbackCard = ({content, name, title, img}) => (
    <div className='flex justify-between flex-col md:px-10 px-5 py-5 rounded-[20px] max-w-[600px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-darkbluenight bg-cardhover'>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-dimWhitenight my-10'>
        {content}
      </p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className="w-[72px] h-[72px] rounded-full" />

        <div className='flex flex-col ml-6'>
          <h4 className='font-poppins font-medium text-[20px] leading-[40px] text-white'>
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhitenight'>
          {title}
          </p>
        </div>
      </div>
    </div>    
  )

export default FeedbackCard
