import React from 'react';
import Card from '@material-ui/core/Card';
import './styles/style.css';

import SuccessButton from '../SuccessButton';
import DetailedButton from '../DetailedButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

export default class ModelExpanedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  showModeFunction = () => {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    //console.log(this.state.expanded);
      if(this.state.expanded === true){
        return (

          <div className="modelexpandedcard">
            <Card className="modelexpandedcardarea" raised>
            
              <Row>
                <Col sm={8}>
                  <div className="modelexpandedcardtitle">{this.props.title}</div>
      
                  <div className="modelexpandedcardsubtitle">Details:</div>
      
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Vender : </span><span className="catalogcontent">{this.props.vender}</span>
                  </div>
      
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Language : </span><span className="catalogcontent">{this.props.language}</span>
                  </div>
      
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Ability : </span><span className="catalogcontent">{this.props.ability}</span>
                  </div>
      
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Description : </span><br/><span className="catalogcontent">{this.props.description}</span>
                  </div>
      
                  <div className="modelexpandedcardsubtitle">Pricing</div>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Subscription model : </span><span className="catalogcontent"> {this.props.subscriptionmodel} </span>
                  </div>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Cost : </span><span className="catalogcontent"> {this.props.cost} </span>
                  </div>
      
                  <div className="modelexpandedcardsubtitle">Target audience</div>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Job Families / Waves : </span><span className="catalogcontent"> {this.props.jobfamilieswaves} </span>
                  </div>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Proficiency : </span><span className="catalogcontent"> {this.props.proficiency} </span>
                  </div>
      
                  <div className="modelexpandedcardsubtitle">Competency</div>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Type : </span><span className="catalogcontent"> {this.props.type} </span>
                  </div>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogtitle">Name : </span><span className="catalogcontent"> {this.props.name} </span>
                  </div>
      
                  <div className="modelexpandedcardsubtitle">Support</div>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogcontent"> {this.props.support} </span>
                  </div>
                  
                  <DetailedButton text="Show less" handleClick={this.showModeFunction}></DetailedButton>
                  <SuccessButton text="Open in SuccessFactors"></SuccessButton>
                  
      
                </Col>
                <Col sm={4}>
                  {/* <img src={this.props.imageurl} width="100%" className="topsideimg" alt="this.props1"/> */}
                  <img src={this.props.logourl + ".png"} width="100%" className="bottomsideimg" alt={'Vender Logo'}/>
                </Col>
              </Row>
      
            </Card>
          </div>
        )

      }else{
        return (

          <div className="modelexpandedcard">
            <Card className="modelexpandedcardarea" raised>
              <Row>
                <Col sm={8}>
                  <div className="modelexpandedcardtitle">{this.props.title}</div><br/>
                  <div className="modelexpandedcardcontentblock">
                    <span className="catalogcontent">{this.props.description}</span>
                  </div>
                  <DetailedButton text="See Details" handleClick={this.showModeFunction}></DetailedButton>
                  <SuccessButton text="Open in SuccessFactors" ></SuccessButton>
                </Col>
                <Col sm={4}>
                  {/* <img src={this.props.imageurl} width="100%" className="topsideimg" alt={'Img Logo'}/> */}
                  <img src={this.props.logourl + ".png"} width="100%" className="bottomsideimg" alt={'Vender Logo'}/>
                </Col>
              </Row>  
            </Card>
          </div>
        )
      }

    }
  }