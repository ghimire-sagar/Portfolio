const SocialCard = ({name, title, icon, link }) => (
    <div className='flex justify-between flex-col md:px-10 px-5 py-5 rounded-[20px] max-w-[600px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-darkbluenight bg-cardhover'>
      <div className='flex flex-row'>
        <img src={icon} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <a href={link} target="_blank" rel="noreferrer">
        <div className='flex flex-col ml-6'>
          <h4 className='font-poppins font-medium text-[20px] leading-[40px] text-white'>
            {title}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhitenight'>
          {name}
          </p>
        </div>
        </a>
      </div>
    </div>    
  )

export default SocialCard