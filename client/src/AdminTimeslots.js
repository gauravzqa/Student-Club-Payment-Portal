import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import './App.css';
import TsModal from'./AdminTsmodal';

// declaring variable for 
class Timeslots extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleButPush = this.handleButPush.bind(this);
    this.colhour = this.colhour.bind(this);
    this.handlePopoverList = this.handlePopoverList.bind(this);
    this.state = {
      show: false, 
      buttonPush: 'invalid',
      count : 0,
      result: [],  
      time : ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'],
      popoverlist : [{'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},
      {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available", 's4' : "Available", 's5' : "Available"},                    
     ],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    
    fetch("/mznFag7kV7")
    .then(res => res.json())
    .then(result => this.setState({ result }))
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleButPush(val,count) {
    this.setState({ buttonpush: val , count: count});
  }

  handlePopoverList(keeptime,butdisable, count) {
    const newList = this.state.popoverlist.slice();
    if(butdisable) {
      for (var i=0; i < butdisable.length; i++) {
        if(butdisable[i].TableTime === keeptime) {
          if(butdisable[i].TableType === 'Pool Table 1') {
            newList[count].p1 = 'Booked';
          }
          if(butdisable[i].TableType === 'Pool Table 2') {
            newList[count].p2 = 'Booked';
          }
          if(butdisable[i].TableType === 'Snooker Table 1') {
            newList[count].s1 = 'Booked';
          }
          if(butdisable[i].TableType === 'Snooker Table 2') {
            newList[count].s2 = 'Booked';
          }
          if(butdisable[i].TableType === 'Snooker Table 3') {
            newList[count].s3 = 'Booked';
          }
          if(butdisable[i].TableType === 'Snooker Table 4') {
            newList[count].s4 = 'Booked';
          }
          if(butdisable[i].TableType === 'Snooker Table 5') {
            newList[count].s5 = 'Booked';
          }
        }
      }
      this.setState({popoverlist : newList});
    }

  }

  popoverHoverFocus(count) {
  return(
  <Popover id="popover-trigger-hover-focus" title="Table status">
    <strong >P1 -> {this.state.popoverlist[count].p1}</strong> <br />
    <strong >P2 -> {this.state.popoverlist[count].p2}</strong> <br />
    <strong >S1 -> {this.state.popoverlist[count].s1}</strong> <br />
    <strong >S2 -> {this.state.popoverlist[count].s2}</strong> <br />
    <strong >S3 -> {this.state.popoverlist[count].s3}</strong> <br />
    <strong >S4 -> {this.state.popoverlist[count].s4}</strong> <br />
    <strong >S5 -> {this.state.popoverlist[count].s5}</strong> <br />
  </Popover>
  );
  } 
  
  
  colhour(keeptime,butdisable,count) {
    return(  
        <Col className='halfhour' xs={4} md={1}>
          <TsModal modalid = {this.state.buttonpush} popoverlist = {this.state.popoverlist} count = {this.state.count} show={this.state.show} onhide={this.handleClose} onclick={this.handleClose}   />
            <OverlayTrigger overlay = {this.popoverHoverFocus(count)}>
              <Button bsStyle="primary" bsSize="small" onMouseEnter={() => {this.handlePopoverList(keeptime, butdisable, count);}} onClick={() => { this.handleShow(); this.handleButPush({keeptime},count); }}>
                {keeptime} 
              </Button>
            </OverlayTrigger>
        </Col>
    );
  }

  render() { 
    const { result } = this.state;
    if(result) {
    var slot = result;
    } 
    var time = this.state.time;
    return (
    <Grid>
     <br></br>
      <Row className="timeslot">
        {this.colhour(time[0],slot,0)}
        {this.colhour(time[1],slot,1)}
        {this.colhour(time[2],slot,2)}
        {this.colhour(time[3],slot,3)}
        {this.colhour(time[4],slot,4)}
        {this.colhour(time[5],slot,5)}
        {this.colhour(time[6],slot,6)}
      </Row>
      <Row className="timeslot">
        {this.colhour(time[7],slot,7)}
        {this.colhour(time[8],slot,8)}
        {this.colhour(time[9],slot,9)}
        {this.colhour(time[10],slot,10)}
        {this.colhour(time[11],slot,11)}
        {this.colhour(time[12],slot,12)}
        {this.colhour(time[13],slot,13)}
      </Row>
      <Row className="timeslot">
        {this.colhour(time[14],slot,14)}
        {this.colhour(time[15],slot,15)}
        {this.colhour(time[16],slot,16)}
        {this.colhour(time[17],slot,17)}
        {this.colhour(time[18],slot,18)}
        {this.colhour(time[19],slot,19)}
        {this.colhour(time[20],slot,20)}
      </Row>
      <Row className="timeslot">
        {this.colhour(time[21],slot,21)}
        {this.colhour(time[22],slot,22)}
        {this.colhour(time[23],slot,23)}
        {this.colhour(time[24],slot,24)}
        {this.colhour(time[25],slot,25)}
      </Row>
    </Grid>
      
    );
  }
}

export default Timeslots; 