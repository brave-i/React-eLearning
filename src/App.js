import React, { Component } from 'react';

import ModelExpandedCard from './components/ModelExpanedCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from 'material-ui-search-bar';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from "@material-ui/core/MenuItem";
import './css/styles.css';

import InfiniteScroll from 'react-infinite-scroller';

//const response = {}

class App extends Component{
   constructor (props){
      super(props);
      this.state = {
         jobfamilyselect: 'all',
         competencyselect: 'all',
         searchcontents: '',
         searchtext: '',

         // selectjobfamily: response.jobFamilies,
         // selectcompetency: response.competencies,
         // selectcourse: response.courses,

         selectjobfamily: [],
         selectcompetency: [],
         selectcourse: null,

         hasMoreItems: true,
         scrollingindex: 0,
         tempselectcourse: [],
         
         resp: [],
      }
   }

   componentDidMount() {

      let url = 'https://storage.googleapis.com/bc_elarning_catalog/catalog.json';

      fetch(url)
      .then(res => res.json())
      .then((out) => {
        console.log("Loading Json Done!");
        
        this.setState({resp : out});
        this.setState({selectjobfamily : out.jobFamilies});
        this.setState({selectcompetency : out.competencies});
        this.setState({selectcourse : out.courses});

      })
      .catch(err => { throw err })
   }

   onSelectJobfamily = (event) => {

      let search_results = [];

      this.setState({tempselectcourse : []});
      this.setState({hasMoreItems : true});
      this.setState({scrollingindex : 0});

      this.setState({jobfamilyselect: event.target.value});

      this.state.resp.courses.map( (item, i) => {

         if(event.target.value === 'all'){
            if(this.state.competencyselect === 'all'){
               if(this.state.searchtext === ''){
                  search_results.push(item);
               }else{
                  if ( (item.titel.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                     (item.jobFamilies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                     (item.competencies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ){

                     search_results.push(item);
                  }
               }
            }else{
               if ( item.competencies.toLowerCase().includes(this.state.competencyselect.toLowerCase()) ){
                  if(this.state.searchtext === ''){
                     search_results.push(item);
                  }else{
                     if ( (item.titel.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.jobFamilies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.competencies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ){

                        search_results.push(item);
                     }
                  }            
               }
            }
         }else{
            if ( item.jobFamilies.toLowerCase().includes(event.target.value.toLowerCase()) ){

               if(this.state.searchtext === ''){
                  if(this.state.competencyselect === 'all'){
                     search_results.push(item);   
                  }else{
                     if ( item.competencies.toLowerCase().includes(this.state.competencyselect.toLowerCase()) ){
                        search_results.push(item);
                     }
                  }
                  
               }else{
                  if ( (item.titel.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.jobFamilies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.competencies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ){

                        if(this.state.competencyselect === 'all'){
                           search_results.push(item);   
                        }else{
                           if ( item.competencies.toLowerCase().includes(this.state.selectcompetency.toLowerCase()) ){
                              search_results.push(item);
                           }
                        }
                     }
               }
            }
         }

         return true;
      });

      console.log("job family search count: " + search_results.length);   
      this.setState({ selectcourse : search_results});

      
      
   }

   onSelectCompetency=(event) =>{

      this.setState({tempselectcourse : []});
      this.setState({hasMoreItems : true});
      this.setState({scrollingindex : 0});
      
      

      let search_results = [];
      this.setState({competencyselect: event.target.value});
      console.log("search text of competency : " + event.target.value);

      this.state.resp.courses.map( (item, i) => {

         if(event.target.value === 'all'){
            if(this.state.jobfamilyselect === 'all'){
               if(this.state.searchtext === ''){
                  search_results.push(item);
               }else{
                  if ( (item.titel.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                     (item.jobFamilies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                     (item.competencies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ){

                     search_results.push(item);
                  }
               }
            }else{
               if ( item.jobFamilies.toLowerCase().includes(this.state.jobfamilyselect.toLowerCase()) ){
                  if(this.state.searchtext === ''){
                     search_results.push(item);
                  }else{
                     if ( (item.titel.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.jobFamilies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.competencies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ){

                        search_results.push(item);
                     }
                  }            
               }
            }
         }else{
            if ( item.competencies.toLowerCase().includes(event.target.value.toLowerCase()) ){

               if(this.state.searchtext === ''){
                  if(this.state.jobfamilyselect === 'all'){
                     search_results.push(item);   
                  }else{
                     if ( item.jobFamilies.toLowerCase().includes(this.state.jobfamilyselect.toLowerCase()) ){
                        search_results.push(item);
                     }
                  }
                  
               }else{
                  if ( (item.titel.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.jobFamilies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ||
                        (item.competencies.toLowerCase().includes(this.state.searchtext.toLowerCase())) ){

                        if(this.state.jobfamilyselect === 'all'){
                           search_results.push(item);   
                        }else{
                           if ( item.jobFamilies.toLowerCase().includes(this.state.jobfamilyselect.toLowerCase()) ){
                              search_results.push(item);
                           }
                        }
                     }
               }
            }
         }

         return true;
      });

      console.log("competiency search count: " + search_results.length);   
      this.setState({ selectcourse : search_results});

   }

   updateSearch = (searchtext) => {

      //this.setState({ search });
      //console.log(searchtext);
      
    };

    onRequestSearchFunction = (searchtext) =>{

      this.setState({tempselectcourse : []});
      this.setState({hasMoreItems : true});
      this.setState({scrollingindex : 0});
      
      //this.setState({ searchtext });
      let search_results = [];
      console.log("text for search : " + searchtext);

      this.state.resp.courses.map( (item, i) => {

         if(this.state.jobfamilyselect === 'all'){
            if(this.state.competencyselect === 'all'){
               if(searchtext === ''){
                  search_results.push(item);
               }else{
                  if ( (item.titel.toLowerCase().includes(searchtext.toLowerCase())) ||
                     (item.jobFamilies.toLowerCase().includes(searchtext.toLowerCase())) ||
                     (item.competencies.toLowerCase().includes(searchtext.toLowerCase())) ){

                     search_results.push(item);
                  }
               }
            }else{
               if ( item.competencies.toLowerCase().includes(this.state.competencyselect.toLowerCase()) ){
                  if(searchtext === ''){
                     search_results.push(item);
                  }else{
                     if ( (item.titel.toLowerCase().includes(searchtext.toLowerCase())) ||
                        (item.jobFamilies.toLowerCase().includes(searchtext.toLowerCase())) ||
                        (item.competencies.toLowerCase().includes(searchtext.toLowerCase())) ){

                        search_results.push(item);
                     }
                  }            
               }
            }
         }else{
            if ( item.jobFamilies.toLowerCase().includes(this.state.jobfamilyselect.toLowerCase()) ){

               if(searchtext === ''){
                  if(this.state.competencyselect === 'all'){
                     search_results.push(item);   
                  }else{
                     if ( item.competencies.toLowerCase().includes(this.state.competencyselect.toLowerCase()) ){
                        search_results.push(item);
                     }
                  }
                  
               }else{
                  if ( (item.titel.toLowerCase().includes(searchtext.toLowerCase())) ||
                        (item.jobFamilies.toLowerCase().includes(searchtext.toLowerCase())) ||
                        (item.competencies.toLowerCase().includes(searchtext.toLowerCase())) ){

                        if(this.state.competencyselect === 'all'){
                           search_results.push(item);   
                        }else{
                           if ( item.competencies.toLowerCase().includes(this.state.competencyselect.toLowerCase()) ){
                              search_results.push(item);
                           }
                        }
                     }
               }
            }
         }

         return true;
      });
     
      console.log("search count: " + search_results.length);   
      this.setState({ selectcourse : search_results});      
    }

    loadItems(page) {

      var tracks = [];
      var pageSize = 10;
      var trackscrollcount = 0;
      if(this.state.selectcourse !== null) {
        
         if( this.state.selectcourse.length < pageSize){

            trackscrollcount = this.state.selectcourse.length;
            for(var i=0; i < trackscrollcount; i++){
               var item = this.state.selectcourse[i];
               tracks.push(item);
            }

            this.setState({hasMoreItems: false});
            this.setState({tempselectcourse : tracks});
            
         }else{
            trackscrollcount = pageSize + this.state.scrollingindex;

            if(trackscrollcount>=this.state.selectcourse.length){
               this.setState({hasMoreItems: false});               
            }else{

               for( i=0; i < trackscrollcount; i++){
                  item = this.state.selectcourse[i];
                  tracks.push(item);
               }
               
               this.setState({tempselectcourse : tracks});
               this.setState({scrollingindex: trackscrollcount});
            }
         }   
      }   
   }

   render(){

      return(
         
         <Container>
               <Row>
                  <Col md={10}>
               
                     <div className="maintexttitle">eLearning Catalog</div>
                     <div className="maintextcontent">Filter eLearning modules and resources per Learning <br/> Journey/competency or search with free text</div>
                     <div align="center">
                        <SearchBar value={this.state.searchtext} onRequestSearch={this.onRequestSearchFunction} onChange={this.updateSearch} className="mainsearchbar" placeholder="Search for a Job Family, competency or topic" />
                     </div>

                     
                     <div className = "comboboxArea" align="center">
                        <Row>
                        
                           <Col md={6}>
                              <div className="selectbox">
                        
                              <Select className="mainselect" input={<OutlinedInput />} value={this.state.jobfamilyselect} onChange={this.onSelectJobfamily}>
                              <MenuItem value={"all"} key={-1}>All JobFamilies</MenuItem>

                                 {this.state.selectjobfamily.map( (item, i) => {
                                    return (<MenuItem value={item.value} key={i}>{item.label}</MenuItem>);
                                 })}
                              </Select>
                              </div>
                           </Col>

                           <Col md={6}>
                           <div className="selectbox">
                              <Select className="mainselect" input={<OutlinedInput />} value={this.state.competencyselect} onChange={this.onSelectCompetency} >
                              <MenuItem value={"all"} key={-1}>All Competencies</MenuItem>

                                 {this.state.selectcompetency.map( (item, i) => {
                                    return (<MenuItem value={item.value} key={i}>{item.label}</MenuItem>);
                                 })}
                              </Select>
                              </div>
                           </Col>
                        
                        </Row>
                     </div>

                     <div align="center">
                     <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadItems.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                     >

                           {this.state.tempselectcourse.map( (item, i) => {
                              return (<div key={i}><ModelExpandedCard 
                                 title={item.titel}
                                 vendor={item.vendor}
                                 language={item.languages}
                                 ability={item.availability}
                                 description={item.description}
                                 subscriptionmodel={item.subscriptionModel}
                                 cost={item.cost}
                                 jobfamilieswaves={item.jobFamiliesWaves}
                                 proficiency={item.proficiency}
                                 type={item.competencyType}
                                 name={item.competencies}
                                 support={item.supportLink}
                                 logourl={item.vendorLogo}
                                 imageurl={item.image}
                              /><br/></div>);
                        })}


                     </InfiniteScroll>              
                     </div>                     
                  </Col>             
               </Row>   
            </Container>         
      );
   }
}
export default App;