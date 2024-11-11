import AddButton from './AddButton'
import GroupList from './GroupList'

const Navbar = () => {
  return (
    <nav className="flex flex-col w-80 h-screen bg-slate-100 px-5 py-2">
      <AddButton />
      <GroupList />
    </nav>
  )
}

export default Navbar
