import React, { Component } from 'react';
import { FlatList, StyleSheet } from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Title, Button } from 'native-base';
import { connect } from 'react-redux'
import { getKategory } from '../public/redux/actions/kategori'

class Register extends Component {

  constructor(props) {
      super(props)

      this.state = {
          text: '',
          title:'',
          id_category: '',
          selected: undefined,
          kategoriS:[]
      }
  }

  componentDidMount = async () => {
    await this.props.dispatch( getKategory() )
    
    this.setState({	kategoriS: this.props.kategoriP })
  }
  



  render() {
    return (
      <Container>
         <Header>
          <Body>
            <Title>kategori</Title>
          </Body>
         
        </Header>
        <Content>
          <List>
            <FlatList
              data={this.state.kategoriS}
              renderItem={({ item: rowData }) => {
                return (
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={{ uri: `${rowData.icon}` }} />
                    </Left>
                    <Body>
                      <Text>{rowData.category_name}</Text>
                    </Body>
                  </ListItem>
                  );
                }}
                keyExtractor={(item, index) => index}
              />
            </List>
          </Content>

        <ListItem style={{top:'0%'}} thumbnail>
          <Left>
            <Thumbnail square source={{ uri: `http://pluspng.com/img-png/a-plus-logo-vector-png-free-vector-plus-icon-png-560.png` }} />
          </Left>
          <Body>
            <Text>Add categroy</Text>
          </Body>
        </ListItem>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
      kategoriP: state.reKategori.ListKategori.result
  }
}

export default connect(mapStateToProps)(Register)