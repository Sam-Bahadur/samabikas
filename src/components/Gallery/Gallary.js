import img1 from "../../assets/images/photoes/1.jpg";
import img2 from "../../assets/images/photoes/2.jpg";
import img3 from "../../assets/images/photoes/3.jpg";
import img4 from "../../assets/images/photoes/4.jpg";
import img5 from "../../assets/images/photoes/5.jpg";
import img6 from "../../assets/images/photoes/6.jpg";
import img7 from "../../assets/images/photoes/7.jpg";
import img8 from "../../assets/images/photoes/8.jpg";
import img9 from "../../assets/images/photoes/9.jpg";
import img10 from "../../assets/images/photoes/10.jpg";
import img11 from "../../assets/images/photoes/11.jpg";
import img12 from "../../assets/images/photoes/12.jpg";
import img13 from "../../assets/images/photoes/13.jpg";
import img14 from "../../assets/images/photoes/14.jpg";
import img15 from "../../assets/images/photoes/15.jpg";
import img16 from "../../assets/images/photoes/16.jpg";
import img17 from "../../assets/images/photoes/17.JPG";
import img18 from "../../assets/images/photoes/18.jpg";
import img19 from "../../assets/images/photoes/19.jpg";
import img20 from "../../assets/images/photoes/20.JPG";
import img21 from "../../assets/images/photoes/21.jpg";
import img22 from "../../assets/images/photoes/22.jpg";
import img23 from "../../assets/images/photoes/23.jpg";
import img24 from "../../assets/images/photoes/24.JPG";
import img25 from "../../assets/images/photoes/25.jpg";
import img26 from "../../assets/images/photoes/26.jpeg";
import img27 from "../../assets/images/photoes/27.JPG";
import img28 from "../../assets/images/photoes/28.jpg";
import img29 from "../../assets/images/photoes/29.JPG";
import img30 from "../../assets/images/photoes/30.jpg";
import img31 from "../../assets/images/photoes/31.jpg";
import img32 from "../../assets/images/photoes/32.jpg";
import img33 from "../../assets/images/photoes/33.jpg";
import img34 from "../../assets/images/photoes/34.JPG";
import img35 from "../../assets/images/photoes/35.JPG";
import img36 from "../../assets/images/photoes/36.jpg";
import img37 from "../../assets/images/photoes/37.JPG";
import img38 from "../../assets/images/photoes/38.jpg";

import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import style from "./Gallary.module.scss";

const jagaran = [
  {
    src: img1,
    width: 16,
    height: 12,
  },
  {
    src: img2,
    width: 16,
    height: 12,
  },
  {
    src: img3,
    width: 16,
    height: 12,
  },
  {
    src: img4,
    width: 16,
    height: 12,
  },
  {
    src: img5,
    width: 16,
    height: 12,
  },
  {
    src: img6,
    width: 16,
    height: 12,
  },
  {
    src: img7,
    width: 16,
    height: 12,
  },
  {
    src: img8,
    width: 16,
    height: 12,
  },
  {
    src: img9,
    width: 16,
    height: 12,
  },
  {
    src: img10,
    width: 16,
    height: 12,
  },
  {
    src: img11,
    width: 16,
    height: 12,
  },
  {
    src: img12,
    width: 16,
    height: 12,
  },
  {
    src: img13,
    width: 16,
    height: 12,
  },
  {
    src: img14,
    width: 16,
    height: 12,
  },
  {
    src: img15,
    width: 16,
    height: 12,
  },
  {
    src: img16,
    width: 16,
    height: 12,
  },
  {
    src: img17,
    width: 16,
    height: 12,
  },
  {
    src: img18,
    width: 16,
    height: 12,
  },
  {
    src: img19,
    width: 16,
    height: 12,
  },
  {
    src: img20,
    width: 16,
    height: 12,
  },
  {
    src: img21,
    width: 16,
    height: 12,
  },
  {
    src: img22,
    width: 16,
    height: 12,
  },
  {
    src: img23,
    width: 16,
    height: 12,
  },
  {
    src: img24,
    width: 16,
    height: 12,
  },
  {
    src: img25,
    width: 16,
    height: 12,
  },
  {
    src: img26,
    width: 16,
    height: 12,
  },
  {
    src: img27,
    width: 16,
    height: 12,
  },
  {
    src: img28,
    width: 16,
    height: 12,
  },
  {
    src: img29,
    width: 16,
    height: 12,
  },
  {
    src: img30,
    width: 16,
    height: 12,
  },
  {
    src: img31,
    width: 16,
    height: 12,
  },
  {
    src: img32,
    width: 16,
    height: 12,
  },
  {
    src: img33,
    width: 16,
    height: 12,
  },
  {
    src: img34,
    width: 16,
    height: 12,
  },
  {
    src: img35,
    width: 16,
    height: 12,
  },
  {
    src: img36,
    width: 16,
    height: 12,
  },
  {
    src: img37,
    width: 16,
    height: 12,
  },
  {
    src: img38,
    width: 16,
    height: 12,
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
    <div className="mt-4 w-4/5 mx-auto">
      <div className={style.gallarry}>
        <Gallery
          photos={jagaran}
          onClick={openLightbox}
          // targetRowHeight={200}
        />
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
      </div>
    </div>
  );
}
