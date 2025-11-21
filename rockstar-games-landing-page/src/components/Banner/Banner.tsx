import gtaBanner from '../../../public/GTA 6 banner.svg'

function Banner() {
  return (
    <>
        <div className='mb-20 w-full flex justify-center'>
            <img style={{maxWidth:"1440px", height:"796px"}} src={gtaBanner} alt="" />
        </div>
    </>
  )
}

export default Banner