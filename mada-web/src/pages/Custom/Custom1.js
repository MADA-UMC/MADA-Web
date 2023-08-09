import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../App.module.css';
import CustomTab from './CustomTab';
import tabData from './tabData';
import imgData from './imgData';
import Cramdy from '../../img/C_ramdy.svg';

function Custom1() {
  const imageName = useSelector((state) => state.image.imageName);

  const findImageFromTabData = () => {
    if (imageName) {
      const [tabId, imageIndex] = imageName.split('_');
      const tab = tabData.find((tab) => tab.id === tabId);
      if (tab && tab.images[imageIndex - 1]) {
        return tab.images[imageIndex - 1];
      }
    }
    return null;
  };

  const selectedImage = findImageFromTabData();

  const selectedImageObj = imgData.find((imageObj) => imageObj.name === imageName);


  return (
    <div className={styles.Frame}>
      <Container className={styles.border}>
        <Row md={3}>
          <Col style={{ position: 'relative' }}>
            <img src={Cramdy} 
            class={styles.overlayImage}
            alt="Cramdy" />
            {selectedImageObj && (
              <img
                src={selectedImageObj.image}
                alt={`Selected Image: ${imageName}`}
                className={styles.backgroundImage}
              />
            )}
          </Col>

          <Col><CustomTab /></Col>
          <Col>
            <p>ImageName: {imageName}</p>
            {/* <p>Selected Image: {selectedImage}</p> */}

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Custom1;
