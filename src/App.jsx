import Button from './Button'
import { useState } from 'react'
import image_placeholder from './assets/image_placeholder.png'

function App() {
  const [iconSrc, setIconSrc] = useState(image_placeholder)

  const handleFile = async (file) => {
    const imageUrl = URL.createObjectURL(file)
    setIconSrc(imageUrl)
  
    const formData = new FormData()
    formData.append('img', file)

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      console.log('Response from FastAPI:', result.tags)
    } catch (error) {
      console.error('Upload failed:', error)
    }
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