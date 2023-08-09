import React, { useState } from 'react';
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setImageName } from '../../store/imageSlice';
import tabData from './tabData';
import styles from '../App.module.css';

function CustomTab() {

  const dispatch = useDispatch();

  // const handleImageClick = (imageName) => {
  //   dispatch(setImageName(imageName));
  //   setSelectedImageName(imageName);
  // };

  const handleImageClick = (imageName) => {
    dispatch(setImageName(imageName)); // Redux 액션을 호출하여 imageName 설정
  };



  return (
<div>
      <Container>
        <Tabs defaultActiveKey={tabData[0].id}>
          {tabData.map((tab) => (
            <Tab key={tab.id} eventKey={tab.id} title={tab.title}>
              <Row>
                {tab.images.map((imageName, index) => (
                  <Col key={index} xs={4} className="mb-4">
                    <div style={{ position: 'relative' }}>
                    <img
                      src={imageName}
                      alt={`Image ${index + 2}`}
                      className={styles.border}
                      style={{ width: '124px', height: '84px' }} 
                      onClick={() => handleImageClick(`${tab.id}_${index + 1}`)}/>
                      <p>{imageName}</p>
                      {/* 자물쇠 오버레이 이미지 - 일단 삭제 예정
                       {index >= 4 && (
                        <img
                          src={imgData[0].image[0]} // imgData.js의 lock.svg 이미지
                          alt={`Overlay Image`}
                          className={styles.overlayImage}
                        />
                      )}<p>{imgData[0].image[0]}</p> */}


                    </div>
                  </Col>
                ))}
              </Row>
            </Tab>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}

export default CustomTab;