'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null)
  const imageInput = useRef()

  const handleClickImage = () => {
    imageInput.current.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image selected</p>
          ) : (
            <Image fill src={pickedImage} alt='Picked Image' />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
      </div>
      <button
        onClick={handleClickImage}
        className={classes.button}
        type='button'
      >
        Upload
      </button>
    </div>
  )
}
