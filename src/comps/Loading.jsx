/* eslint-disable react/prop-types */

const Loading = ({isloading,error}) => {
  return (
    <>
        {error&& <div className='text-red-600 self-center text-lg' >there is an error</div>}
        {isloading&& <div className='animate-spin self-center w-8 h-8 size-8 flex-grow-0 rounded-full border-2 border-green-500 border-l-transparent' ></div>}
    </>
  )
}

export default Loading