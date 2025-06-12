import Button from './Button'
import { useState } from 'react'
import image_placeholder from './assets/image_placeholder.png'
import Text from './TagText'

function App() {
  const [tags, setTags] = useState([])
  const [iconSrc, setIconSrc] = useState(image_placeholder)

  const handleFile = async (file) => {
    const imageUrl = URL.createObjectURL(file)
    setIconSrc(imageUrl)
  
    const formData = new FormData()
    formData.append('img', file)

    try {
      const response = await fetch(`${import.meta.env.VITE_PREDICT_API_URL}/predict`, {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      setTags(result.tags)
    } catch (error) {
      console.error('Upload failed:', error)
    }
  }

  return (
    <>    
      <div className="position-relative" style={{ height: '100vh' }}>
        <Button
          icon={iconSrc}
          className="position-absolute start-50 translate-middle-x"
          style={{ top: '20%' }}
          onFileSelect={handleFile}
        />
      </div>
      <div className="position-absolute translate-middle" style={{top: '75%', left: '50%'}}>
        <div className="d-flex justify-content-start" style={{columnGap:'10px'}}>
          {tags.map((tag) => (
            <Text text={tag}/>
          ))}
        </div>
      </div>
    </> 
  )
}

export default App