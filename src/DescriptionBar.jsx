const DescriptionBar = ({ text }) => {
  return (
    <span
      className="px-2 py-1 me-2 rounded"
      style={{
        display: 'inline-block',
        border: '1px solid #555',      
        color: '#bbb', 
        backgroundColor: 'transparent',
        fontSize: '0.9rem',
        whiteSpace: 'pre-line',
        textAlign: 'center',
      }}
    >
      {text}
    </span>
  )
}

export default DescriptionBar
