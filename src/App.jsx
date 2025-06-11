import Button from './Button'
import { useState } from 'react'
import image_placeholder from './assets/image_placeholder.png'

function App() {
  const [iconSrc, setIconSrc] = useState(image_placeholder)

  const handleFile = (file) => {
    const imageUrl = URL.createObjectURL(file)
    setIconSrc(imageUrl)
  }

  return (
    <div className="position-relative" style={{ height: '100vh' }}>
      <Button
        icon={iconSrc}
        className="position-absolute start-50 translate-middle-x"
        style={{ top: '20%' }}
        onFileSelect={handleFile}
      />
    </div>
  )
}

export default App