import Button from './Button'
import { useState } from 'react'
import image_placeholder from './assets/image_placeholder.png'
import Text from './TagText'
import DescriptionBar from './DescriptionBar'

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
<div style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="position-absolute start-50 translate-middle-x" style={{ top: '20%' }}>
        <Button
          icon={iconSrc}
          onFileSelect={handleFile}
        />
      </div>

      <div className="position-absolute translate-middle" style={{ top: '75%', left: '50%' }}>
        <div className="d-flex justify-content-start" style={{ columnGap: '10px' }}>
          {tags.map((tag, idx) => (
            <Text key={idx} text={tag} />
          ))}
        </div>
      </div>

      <div className="position-absolute translate-middle" style={{top:'90%', left:'50%'}}>
        <DescriptionBar text="An AI model that tags games based on in-game screenshots. Currently supports 12 tags:  
         • Platformer • Action • Casual • Adventure • TwoD • ThreeD • Simulation • Strategy • RPG • Puzzle • Horror • Sports "/>
      </div>
    </div>
    </> 
  )
}

export default App