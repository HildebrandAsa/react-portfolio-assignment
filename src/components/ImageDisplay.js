import jag from "../images/jag.jpg"

const ImageDisplay = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        felxDirection: "column"
      }}
      >
      <img src={jag} alt="profile image" height={250} width={250}/>
    </div>
  )
}

export default ImageDisplay;