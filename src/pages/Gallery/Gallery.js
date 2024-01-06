import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import { useNavigate } from 'react-router-dom'

const Gallery = () => {

  const navigate = useNavigate();
  const [images, setImages] = useState([])
  const [activeImage, setActiveImage] = useState(null)
  const [activeImageArr, setActiveImageArr] = useState([])
  const [folderIndex, setFolderIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tame-jade-moth-robe.cyclic.app/")
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setImages(data)
        console.log(data);
      })
      .catch(e => {
        navigate(-1)
      })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log(folderIndex);
  }, [folderIndex])

  return (
    <div className='gallery-outer'>
      <div className='gallery-header'>
        <button className='back-button' onClick={() => { navigate(-1) }}>back</button>
        <div className='gallery-word'>Gallery</div>
        <div className='right-pad'></div>
      </div>
      {loading ?
        <div className='loading'>
          Loading
          <img src={require("../../load.gif")} className='load' alt="loadig"/>
        </div>
        :
        <div className='gallery'>
          {Object.keys(images).map((ele, ind) => {
            return (
              <div className={`gallery-image-container ${activeImage === ind && 'gallery-image-container-activve'}`} key={ind} onClick={() => { setActiveImage(ind); setActiveImageArr(images[ele]) }}>
                <img src={images[ele][0]} alt={ele.asset_id} className='gallery-image' />
                <div className="gallery-content">{ele.split("=")[0]?.replaceAll("-", " ")}<br /><span className='gallery-content-inner'>{ele.split("=")[1]?.replaceAll("!", "/")}</span></div>

              </div>
            )
          }
          )}
        </div>
      }
      {activeImage !== null &&
        <>
          <div className='left-button' onClick={() => { folderIndex > 0 && setFolderIndex(pre => pre - 1) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="138" viewBox="0 0 70 138" fill="none">
              <path d="M60.3018 95.8925C66.2174 86.4142 67.962 74.212 69.2554 63.3234C68.8811 58.1765 36.8033 26.7638 31.9405 22.0948C18.1709 8.87669 -6.76476 -18.3985 3.26832 18.7594C7.13183 33.0503 14.1135 52.3745 17.3253 61.0541C13.6958 71.4314 -3.48947 121.102 0.634719 127.673C3.28503 131.921 5.27026 138 11.4298 138C20.4636 138 54.3996 105.344 60.3018 95.8925ZM12.7399 110.381C13.3315 110.715 13.923 111.059 14.5146 111.397C16.1288 112.316 14.2405 114.749 12.9237 113.389C12.4492 112.901 11.9813 112.413 11.5067 111.925C10.7079 111.099 11.7607 109.822 12.7399 110.381ZM16.4831 105.578C17.215 105.916 17.9403 106.256 18.6722 106.597C20.0759 107.256 18.6455 109.518 17.2418 108.389C16.6302 107.904 16.0186 107.413 15.4136 106.921C14.5814 106.253 15.6676 105.197 16.4831 105.578ZM16.8775 98.7266C19.334 99.3048 20.3466 100.013 22.509 101.213C23.642 101.835 22.8098 103.813 21.5832 103.309C19.4208 102.416 18.0038 101.952 16.1021 100.475C15.2599 99.8161 15.7579 98.4626 16.8775 98.7266ZM19.5278 91.0798C23.0404 91.912 25.9948 94.6224 28.1706 97.4098C29.1398 98.6564 27.4854 100.368 26.3691 99.1544C24.0698 96.6611 21.2858 95.2708 18.4483 93.5296C17.1048 92.7074 18.0606 90.7355 19.5278 91.0798ZM21.8506 85.7591C25.5102 87.8413 28.605 91.1734 31.7634 93.9306C32.6156 94.6692 31.4291 96.1632 30.5334 95.4747C27.2114 92.918 23.3278 90.5384 20.5739 87.3533C19.8152 86.4777 20.8078 85.1709 21.8506 85.7591ZM32.4251 88.9208C33.4812 89.7362 35.3929 91.1567 35.3461 92.6539C35.3394 92.9714 35.0787 93.2221 34.7612 93.2221C33.3442 93.2221 31.8703 91.2068 31.125 90.1774C30.5903 89.4288 31.6932 88.3626 32.4251 88.9208ZM21.9408 61.014C21.9408 53.5643 4.65865 18.1645 4.56507 4.56534C12.6397 7.97765 62.9354 58.0361 64.7736 63.3936C63.2529 69.7403 12.8602 119.849 4.25091 124.401C3.06111 109.201 21.9408 70.5858 21.9408 61.014Z" fill="black" />
            </svg>
          </div>
          <div className='inner-back' onClick={() => { setActiveImage(null); setFolderIndex(0) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" /></svg>
          </div>
          <div className='right-button' onClick={() => { folderIndex < activeImageArr.length - 1 && setFolderIndex(pre => pre + 1) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="138" viewBox="0 0 70 138" fill="none">
              <path d="M60.3018 95.8925C66.2174 86.4142 67.962 74.212 69.2554 63.3234C68.8811 58.1765 36.8033 26.7638 31.9405 22.0948C18.1709 8.87669 -6.76476 -18.3985 3.26832 18.7594C7.13183 33.0503 14.1135 52.3745 17.3253 61.0541C13.6958 71.4314 -3.48947 121.102 0.634719 127.673C3.28503 131.921 5.27026 138 11.4298 138C20.4636 138 54.3996 105.344 60.3018 95.8925ZM12.7399 110.381C13.3315 110.715 13.923 111.059 14.5146 111.397C16.1288 112.316 14.2405 114.749 12.9237 113.389C12.4492 112.901 11.9813 112.413 11.5067 111.925C10.7079 111.099 11.7607 109.822 12.7399 110.381ZM16.4831 105.578C17.215 105.916 17.9403 106.256 18.6722 106.597C20.0759 107.256 18.6455 109.518 17.2418 108.389C16.6302 107.904 16.0186 107.413 15.4136 106.921C14.5814 106.253 15.6676 105.197 16.4831 105.578ZM16.8775 98.7266C19.334 99.3048 20.3466 100.013 22.509 101.213C23.642 101.835 22.8098 103.813 21.5832 103.309C19.4208 102.416 18.0038 101.952 16.1021 100.475C15.2599 99.8161 15.7579 98.4626 16.8775 98.7266ZM19.5278 91.0798C23.0404 91.912 25.9948 94.6224 28.1706 97.4098C29.1398 98.6564 27.4854 100.368 26.3691 99.1544C24.0698 96.6611 21.2858 95.2708 18.4483 93.5296C17.1048 92.7074 18.0606 90.7355 19.5278 91.0798ZM21.8506 85.7591C25.5102 87.8413 28.605 91.1734 31.7634 93.9306C32.6156 94.6692 31.4291 96.1632 30.5334 95.4747C27.2114 92.918 23.3278 90.5384 20.5739 87.3533C19.8152 86.4777 20.8078 85.1709 21.8506 85.7591ZM32.4251 88.9208C33.4812 89.7362 35.3929 91.1567 35.3461 92.6539C35.3394 92.9714 35.0787 93.2221 34.7612 93.2221C33.3442 93.2221 31.8703 91.2068 31.125 90.1774C30.5903 89.4288 31.6932 88.3626 32.4251 88.9208ZM21.9408 61.014C21.9408 53.5643 4.65865 18.1645 4.56507 4.56534C12.6397 7.97765 62.9354 58.0361 64.7736 63.3936C63.2529 69.7403 12.8602 119.849 4.25091 124.401C3.06111 109.201 21.9408 70.5858 21.9408 61.014Z" fill="black" />
            </svg>
          </div>
          {
            activeImageArr.map((ele, ind) =>
              <img src={ele} key={ind} alt="gallery-imges" className={`gallery-inner-image ${ind <= folderIndex && 'gallery-inner-image-show'}`} style={{ transform: `rotate(${Math.random() * (4 - (-4)) + (-4)}deg)  translateY(-50%)` }} />
            )
          }
        </>
      }

    </div >
  )
}

export default Gallery