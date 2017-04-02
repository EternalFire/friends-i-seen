import React from 'react';
import {Card, Row, Col, Modal} from 'antd';
import {images, imagesThumbnail, imagesMiddle} from '../utils/images';
import styles from './images.css'

function Images() {
  return (
    <div style={{
      overflow: 'hidden',
      padding: '10px 0',
      border: '5px dashed hsl(30, 100%, 60%)',
      borderRadius: '10px'
    }}>
      <Row type="flex" justify="center" gutter={8}>
      {
        imagesThumbnail.map((e, i) => {
          let filename = e.substr(e.lastIndexOf('/') + 1);
          
          return (          
            <Col key={i}>
              <img className={styles.pic}
                src={e} 
                onClick={() => {                  
                  Modal.success({
                    title: filename,
                    content: (
                      <div className={styles.modalPicWrapper}>
                        <img src={images[i]} className={styles.modalPic}/>
                      </div>
                    ),
                    width: '84%',
                    iconType: null,
                    maskClosable: true,
                    okText: 'OwO'
                  })
                }}
              /> 
            </Col>
          )
        })
      }
      </Row>
    </div>
  )
}

export default Images;