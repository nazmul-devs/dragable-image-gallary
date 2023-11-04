import img1 from "../images/image-1.webp";
import img10 from "../images/image-10.jpeg";
import img11 from "../images/image-11.jpeg";
import img2 from "../images/image-2.webp";
import img3 from "../images/image-3.webp";
import img4 from "../images/image-4.webp";
import img5 from "../images/image-5.webp";
import img6 from "../images/image-6.webp";
import "../styles/imageGallary.css";
import img7 from "../images/image-7.webp";
import img8 from "../images/image-8.webp";
import img9 from "../images/image-9.webp";
import { useState } from "react";

const data: { id: number; img: string }[] = [
  { id: 1, img: img11 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img5 },
  { id: 5, img: img4 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
  { id: 10, img: img10 },
  { id: 11, img: img1 },
];

function ImageGallary() {
  const [images, setImages] = useState(data);
  const [selectImg, setSelectImg] = useState<number[]>([]);

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

  // dragable
  // Handle drag start
  const [dragging, setDragging] = useState(false);
  const [draggedImage, setDraggedImage] = useState<any>(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const handleDragStart = (image: any) => {
    setDragging(true);
    setDraggedImage(image);
  };

  // Handle drag over
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };

  // Handle drop image
  const handleDrop = (targetIndex: any) => {
    setDragging(false);

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
            <input type="checkbox" checked />
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
              />
              <span className="img-checkmark"></span>
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
