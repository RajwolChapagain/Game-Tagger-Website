import { useRef } from 'react'

const Button = ({ icon, className, style, onFileSelect }) => {
  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file && onFileSelect) {
      onFileSelect(file)
    }
  }

  return (
    <>
      <button
        className={`btn p-0 border-0 bg-transparent ${className}`}
        onClick={handleClick}
        style={style}
      >
        <img
          src={icon}
          alt="Upload"
          style={{ width: 'auto', height: '400px', cursor: 'pointer', borderRadius: '20px' }}
        />
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </>
  )
}

export default Button