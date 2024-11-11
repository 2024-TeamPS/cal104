import Button from '../Button'

const AddButton = () => {
  const handleClick = (): void => {}
  return <Button className='bg-primary px-16 py-1 text-white text-lg hover:bg-primary-hover' onClick={() => handleClick()}>일정 추가</Button>
}

export default AddButton
