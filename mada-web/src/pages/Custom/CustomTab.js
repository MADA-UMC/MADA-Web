import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import styles from '../App.module.css';
import CustomTabTable from './CustomTabTable';

function CustomTab() {
    return (
        <Tabs
        defaultActiveKey="color"
        id=""
        className="">
          <Tab eventKey="color" title="색깔">
    
          </Tab>
          <Tab eventKey="hat" title="모자">
            Tab content for hat
          </Tab>
          <Tab eventKey="item" title="소품">
         Tab content for item
          </Tab>
          <Tab eventKey="bg" title="배경">
            <CustomTabTable />
          </Tab>
        </Tabs>
    );
  }
  
  export default CustomTab;

