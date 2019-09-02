import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View,Text , Image,ScrollView } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';
import { H1, Badge, Col, Row, Toast, Button, Content } from 'native-base'

export class Detail extends Component {

  constructor(props) {
    super();
    this.state = {
      books: props.navigation.getParam('data'),
    };
  }

  render() {
    const { books } = this.state
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{ marginBottom: 130 }}>

            <Image source={{ uri: `${books.foto_sampul}` }} resizeMode='cover' style={styles.imageBackground} />
            <Image source={{ uri: `${books.foto_sampul}` }} style={styles.imageCover} />

            <View style={{ marginTop: 120, marginHorizontal: 10 }}>

              <H1>{books.nama_buku}</H1>
              <Row  style={styles.judul}>
                <Col><Text>Category:</Text></Col>
                <Col><Badge success style={{ marginLeft: 'auto' }}><Text>{books.nama_kategori}</Text></Badge></Col>
              </Row>

              <Row style={styles.judul}>
                <Col><Text>Location:</Text></Col>
                <Col><Badge warning style={{ marginLeft: 'auto' }}><Text>{books.lokasi}</Text></Badge></Col>
              </Row>

              <Row style={styles.judul}>
                <Col><Text>Status:</Text></Col>
                <Col><Badge info style={{ marginLeft: 'auto' }}><Text>{ books.status_pinjam}</Text></Badge></Col>
              </Row>

              <Row style={styles.judul}>
                <Col><Text>Writer:</Text></Col>
                <Col><Badge info style={{ marginLeft: 'auto' }} ><Text>{books.pengarang}</Text></Badge></Col>
              </Row>

            </View>
              <Text style={styles.deskripsi}> {books.deskripsi} </Text>
            </View>

          </ScrollView >
            <Button style={{ position: "absolute",top: "93%",width: "100%", }} full primary>
              <Text style={{color:"white"}}>pinjam</Text>
            </Button>
        </View>
    )
  }
}

const mapStateToProps = state => {
  return {
      bookp: state.reBuku.ListBuku,
  }
}

export default connect(mapStateToProps)(Detail)
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  imageBackground: { 
    width: '100%',
    height: 200,
    opacity: 0.23
  },
  imageCover: {
    width: 150,
    height: 200,
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
    left: 100,
    top: 90,
    right: 100,
    borderRadius: 20
  },
  judul: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  status: {
    top: "47.26%",
    left: "6.08%",
    width: "39.438270395388066%",
    height: "4.7642310872185005%",
    color: "rgba(255,19,19,1)",
    position: "absolute",
    fontSize: 23
  },
  deskripsi: {
    marginTop:"10%",
    marginBottom:"-20%",
    textAlign: 'justify',
    alignContent: 'center',
    justifyContent: 'flex-end',
    letterSpacing: 1,
    marginHorizontal: 15
  }
});