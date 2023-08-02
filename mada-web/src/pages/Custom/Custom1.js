import React from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { setValue } from '../../store/actions/custom1Actions';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../App.module.css';
import CustomTab from './CustomTab';

import Cramdy from '../../img/C_ramdy.svg'

import BackBrid from '../../img/customBg/back_brid.svg'
import BackN from '../../img/customBg/back_n_s.svg'
import BackWin from '../../img/customBg/back_win.svg'


import BackNomal from '../../img/customBg/back_nomal.svg'
import BackStore from '../../img/customBg/back_store.svg'
import BackZzim from '../../img/customBg/back_zzim.svg'
import BackUni from '../../img/customBg/back_uni.svg'
import BackCin from '../../img/customBg/back_cin.svg'
import BackSum from '../../img/customBg/back_sum.svg'




function Custom1() {

  const value = useSelector((state) => state.custom1.value);
  const dispatch = useDispatch();
  
  const selectImage = () => {
    switch (value) {
      case 'BackBridS':
        return BackBrid;
      case 'BackNS':
        return BackN;
      case 'BackWinS':
        return BackWin;
      case 'MADACBack':
        return BackNomal;
      case 'BackStoreS':
        return BackStore;
      case 'BackZzimS':
        return BackZzim;
      case 'BackSpS':
        return BackUni;
      case 'BackCinS':
        return BackCin;
      case 'BackSrS':
          return BackSum;
      default:
        return null;
    }
  };


    return (
      <div className={styles.Frame}>
          <Container>
              <Row>My Character</Row>
              <Row>
                <Col>
                <div>
                  <img src={Cramdy}/>
                {selectImage() && <img src={selectImage()} 
                className={styles.backgroundImage}
                alt={`Image ${value}`} />}
                </div>
                
                
                
                
                
                
                
                
                
                </Col>
                <Col><CustomTab/></Col>
                <Col>CustomTabTable에서 전달받은 값: {value}</Col>
              </Row>
          </Container>
  
      </div>
      
    );
  }
  
  export default Custom1;