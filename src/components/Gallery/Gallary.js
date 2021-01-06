import jagaran1 from "../../assets/images/hero1.jpg"
import React, {useState, useCallback} from 'react'
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import style from "./Gallary.module.scss"

const jagaran = [
    {
      src: jagaran1,
      width: 8,
      height: 3
    },
    {
      src: jagaran1,
      width: 8,
      height: 3
    },
    {
      src: jagaran1,
      width: 8,
      height: 3
    },
    {
      src: jagaran1,
      width: 8,
      height: 3
    },
  ];
export default function Gallary() {
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    return (
        <div className="mt-4">
          <div className={style.gallarry}>
        <Gallery photos={jagaran} onClick={openLightbox} targetRowHeight={200} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={jagaran.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
              />
          </Modal>
        ) : null}
      </ModalGateway>
          Photoes will go here
              </div>
        </div>
    )
}
