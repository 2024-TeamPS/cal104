import logoImage from '@assets/logo2.png'

const Logo = () => {
  return (
    <div className='flex flex-row items-center ml-10 w-48'>
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={logoImage}
        alt="Logo"
      />
      <span className="font-bold text-base ml-3">일정 공유 사이트</span>
    </div>
  )
}

export default Logo
