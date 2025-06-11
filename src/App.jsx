import Button from './Button'
import image_placeholder from './assets/image_placeholder.png'

function App() {
  return (
    <>
      <img
        src={image_placeholder}
        className="w-25 position-absolute top-50 start-50 translate-middle"
      />
      <Button
        text="Upload Image"
        className="btn btn-primary position-absolute start-50 translate-middle-x"
        style={{ top: '62%' }}
      />
    </>
  )
}

export default App
