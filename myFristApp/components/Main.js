/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 18th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: React_Native
 * @Filename: Main.js
 * @Last modified by:   JDure
 * @Last modified time: "January 9th 2018"
 */

import React, { Component } from 'react';
import Restolist from "./Restolist";
import {getCurrentLocation} from "../actions";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { connect } from "react-redux";

class Main extends Component {
   render() {
     return (
       <Container>
         <Header>
           <Left>
             <Button transparent>
               <Icon name='menu'/>
             </Button>
           </Left>
           <Body>
             <Title>Resto's</Title>
           </Body>
           <Right />
           <Button transparent onPress= {this.props.restoLocation} >
              <Text>Fetch</Text>
            </Button>
         </Header>
         <Content>
             <Restolist/>
         </Content>
         <Footer>
           <FooterTab>
             <Button full>
               <Text>Footer</Text>
             </Button>
           </FooterTab>
         </Footer>
       </Container>
     );
   }
 }


 const mapDispatchToProps = (dispatch) => {
     return {
         restoLocation: (e) => dispatch(getCurrentLocation())
     };
 };

 export default connect(undefined, mapDispatchToProps)(Main);
