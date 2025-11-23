import gtaBanner from '../../../public/GTA 6 banner.svg'

function Banner() {
  return (
    <>
        <div className='mb-20 w-full flex justify-center'>
            <div style={{
            backgroundImage: `url(${gtaBanner})`, 
            width: "1440px",
            height: "796px",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}></div>

        </div>
    </>
  )
}

export default Banner