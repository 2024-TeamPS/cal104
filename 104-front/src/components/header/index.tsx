import Logo from './Logo'
import LoginButton from './LoginButton'

const Header = () => {
  

  return (
    <header className="flex flex-row justify-between min-h-20 items-center border-b-2 border-gray-200 gap-4">
      <Logo />
      <LoginButton />
    </header>
  )
}

export default Header