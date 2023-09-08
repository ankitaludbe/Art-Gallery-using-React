import React, { useState, useEffect } from 'react';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-slider">
      <button className='p-1 rounded-full shadow bg-white/80 text-grey-800 hover:bg-white' 
      onClick={goToPrev}>Previous
      </button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} style={{ width: '1000px', height: '500px' }} />
      <button onClick={goToNext}>Next</button>
      <div className="image-info">
        <p>
          Image {currentIndex + 1} of {images.length}
        </p>
        <div className="image-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Highlights() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the API here
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const apiKey = '88f9eea6-60a7-4239-aa27-6f709b4e7484';
    const apiUrl = `https://api.harvardartmuseums.org/Image?apikey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const imageUrls = data.records.map((record) => record.baseimageurl);
      setImages(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      {images.length > 0 ? <ImageSlider images={images} /> : <p>Loading images...</p>}
    </div>
  );
}

export default Highlights;
