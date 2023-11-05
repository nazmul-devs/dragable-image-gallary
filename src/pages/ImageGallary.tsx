import { useState } from "react";
import { data } from "../utils/images";

function ImageGallary() {
  const [images, setImages] = useState(data);
  const [selectImg, setSelectImg] = useState<number[]>([]);
  const [draggedImage, setDraggedImage] = useState<any>(null);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = parseInt(e.target.value);

    if (checked) {
      setSelectImg(
        (prevSelectImg) => [...(prevSelectImg ?? []), value] as number[]
      );
    } else {
      setSelectImg((prevSelectImg) =>
        (prevSelectImg ?? []).filter((item) => item !== value)
      );
    }
  };

  const imgeDeleteHandler = () => {
    const currentImg = images.filter((item) => !selectImg.includes(item.id));

    setImages(currentImg);
    setSelectImg([]);
  };

  const resetSelectImageHandler = () => {
    setSelectImg([]);
  };

  // Handle drag start
  const handleDragStart = (image: any) => {
    setDraggedImage(image);
  };

  // Handle drag over
  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  // Handle drop image
  const handleDrop = (targetIndex: any) => {
    if (draggedImage) {
      const updatedImages = images.filter(
        (image) => image.id !== draggedImage.id
      );
      updatedImages.splice(targetIndex, 0, draggedImage);

      setImages(updatedImages);
      setDraggedImage(null);
    }
  };

  return (
    <div className="gallary-container">
      {selectImg.length ? (
        <div className="gallary-header">
          <label className="checkbox">
            {selectImg.length} Files Selected
            <input onClick={resetSelectImageHandler} type="checkbox" checked />
            <span className="checkmark"></span>
          </label>

          <button className="delete-btn" onClick={imgeDeleteHandler}>
            Delete files
          </button>
        </div>
      ) : (
        <div className="gallary-header">
          <h2>Gallary</h2>
        </div>
      )}

      <hr />

      <div className="gallary grid-container" onDragOver={handleDragOver}>
        {images.map((item, index) => {
          return (
            <label
              className="img-checkbox grid-item"
              key={index}
              draggable={true}
              onDragStart={() => handleDragStart(item)}
              onDrop={() => handleDrop(index)}
            >
              <img src={item.img} alt="" />
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                value={item.id}
                checked={selectImg.includes(item.id) ? true : false}
              />
              <span
                className="img-checkmark"
                style={{
                  display: selectImg.includes(item.id) ? "block" : "none",
                }}
              ></span>
            </label>
          );
        })}

        <div className="add-img">
          <label htmlFor="img-input" className="icon">
            <img
              src="https://static.thenounproject.com/png/187803-200.png"
              alt=""
            />
            <input
              style={{ display: "none" }}
              type="file"
              name=""
              id="img-input"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ImageGallary;
