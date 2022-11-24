const Toolsused = ({title, icon }) => (
    <div className='flex justify-between flex-col md:px-10 px-5 py-5 rounded-[20px] max-w-[600px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-darkbluenight bg-cardhover'>
      <div className='flex flex-row'>
        <img src={icon} alt={title} className="w-[64px] h-[64px] rounded-full" />
      </div>
    </div>    
  )

export default Toolsused