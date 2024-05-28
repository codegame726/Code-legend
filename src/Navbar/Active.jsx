
function ShowHiddenContent() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={toggleContent}>Toggle Content</button>
      {showContent && (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          {/* Your custom content goes here */}
          This is the content that becomes active when the button is clicked.
        </div>
      )}
    </div>
  );
}

export default ShowHiddenContent;
