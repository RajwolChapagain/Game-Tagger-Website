import Button from './Button'
import image_placeholder from './assets/image_placeholder.png'

function App() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh'}}>
        <div className="position-relative">
          <img
            src={image_placeholder}
            alt="Placeholder Image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Button
            text="Upload Image"
            className="btn btn-primary position-absolute top-50 start-50 translate-middle"
          />
        </div>
      </div>
    </>
  )
}

export default App
