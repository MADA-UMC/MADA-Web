import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { setValue } from '../../store/actions/custom1Actions';
import styles from '../App.module.css';
// import './ImageOverlay.module.css';

import BackBridS from '../../img/customBg/back_brid_s.svg'
import BackNS from '../../img/customBg/back_n_s.svg'
import BackWinS from '../../img/customBg/back_win_s.svg'
import MADACBack from '../../img/customBg/MADA_C_back 3.svg'
import BackStoreS from '../../img/customBg/back_store_s.svg'
import BackZzimS from '../../img/customBg/back_zzim_s.svg'
import BackSrS from '../../img/customBg/back_sr_s.svg'
import BackCinS from '../../img/customBg/back_cin_s.svg'
import BackSpS from '../../img/customBg/back_sp_s.svg'
import CustomLock from '../../img/customBg/Custom_lock.svg'

function CustomTabTable() {

  const dispatch = useDispatch();
  const handleImageClick = (value) => {
    // 이미지를 클릭했을 때 값을 전달하는 액션
    dispatch(setValue(value));

  };

  return (
    <Table>
      <thead>
        <tr>
          <td>1</td>
          <td>
            <div className={styles.container}>
		          <img src={BackBridS} onClick={() => 
                handleImageClick('BackBridS')} 
                style={{ cursor: 'pointer' }}
                alt='BackBridS' />
            </div>
          </td>
          <td>
            <div>
              <img src={BackNS} onClick={() => 
                handleImageClick('BackNS')} 
                alt='BackNS' />
            </div>
          </td>
        </tr>
      </thead>
      

      <tbody>
        <tr>
          <td>
            <img src={BackWinS} onClick={() => 
                handleImageClick('BackWinS')} 
                alt='BackWinS' />
           </td>
          <td>
            <div className={styles.container}
            onClick={() => handleImageClick('BackSpS')}>
               <img src={MADACBack} alt="BackSpS" className={styles.backgroundImage}/>
              <img src={CustomLock} alt="Lock" 
              className={`${styles.overlayImage} ${styles.imagePosition} ${styles.size}`} />
            </div>
          </td>
          <td>
            <div className={styles.container} 
            onClick={() => handleImageClick('BackStoreS')}>
               <img src={BackStoreS} alt="BackStoreS" className={styles.backgroundImage}/>
              <img src={CustomLock} alt="Lock" 
              className={`${styles.overlayImage} ${styles.imagePosition} ${styles.size}`}/>
            </div>
           </td>
        </tr>

        <tr>
          <td>
            <div className={styles.container} 
            onClick={() => handleImageClick('BackZzimS')}>
               <img src={BackZzimS} alt="BackZzimS" className={styles.backgroundImage}/>
              <img src={CustomLock} alt="Lock" 
              className={`${styles.overlayImage} ${styles.imagePosition} ${styles.size}`}/>
            </div>
           </td>
          <td>
            <div className={styles.container} 
            onClick={() => handleImageClick('BackSpS')}>
              <img src={BackSpS} alt="BackSpS" className={styles.backgroundImage}/>
              <img src={CustomLock} alt="Lock" 
              className={`${styles.overlayImage} ${styles.imagePosition} ${styles.size}`}/>
            </div>
          </td>
          <td>
            <div className={styles.container} 
            onClick={() => handleImageClick('BackCinS')}>
              <img src={BackCinS} alt="BackCinS" className={styles.backgroundImage}/>
              <img src={CustomLock} alt="Lock" 
              className={`${styles.overlayImage} ${styles.imagePosition} ${styles.size}`}/>
            </div>
           </td>
        </tr>

        <tr>
          <td>
            <div className={styles.container} 
            onClick={() => handleImageClick('BackSrS')}>
              <img src={BackSrS} alt="BackSrS" className={styles.backgroundImage}/>
              <img src={CustomLock} alt="Lock" 
              className={`${styles.overlayImage} ${styles.imagePosition} ${styles.size}`}/>

            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomTabTable;