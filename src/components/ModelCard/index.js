import React from 'react';
import Card from '@material-ui/core/Card';
import './styles/style.css';

import SuccessButton from '../SuccessButton';
import DetailedButton from '../DetailedButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';


const ModelCard  = () => {
  return (

    <div className="modelcard">
      <Card className="modelcardarea" raised>
      
        <Row>
          <Col sm={8}>
            <div className="modelcardtitletext">FP&A Monthly Cash Flow Forecast Model</div>
            <div className="modelcardcontenttext"> Part 1 - Introduction; Bookkeeping: Past and Present<br/> Part 2 - Accrual Method<br/> Part 3 - Double-Entry, Debits and Credits<br/> Part 4 - General Ledger Accounts<br/> Part 5 - Debits and Credits in the Accounts<br/> Part 6 - Asset Accounts<br/> Part 7 - Liability and Stockholders' Equity Accounts<br/> Part 8 - Income Statement Accounts<br/> Part 9 - Recording Transactions; Bank Reconciliation<br/> Part 10 - Adjusting Entries; Reversing Entries<br/> Part 11 - Balance Sheet; Income Statement; Balance Sheet and Income Statement are Linked<br/> Part 12 - Cash Flow Statement<br/> Part 13 - Statement of Stockholders' Equity; Closing Cut-Off; Importance of Controls</div>
            
            <DetailedButton text="See Details"></DetailedButton>
            <SuccessButton text="Open in SuccessFactors"></SuccessButton>
            

          </Col>
          <Col sm={4}>
            <img src="https://imgur.com/l6W3yQg.jpeg" width="220px;" className="topsideimg"/>
            <img src="https://imgur.com/tluUkpk.png" width="220px;" className="bottomsideimg"/>
          </Col>
        </Row>

      </Card>
    </div>

  )
}

export default ModelCard