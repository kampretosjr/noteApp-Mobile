import React, { Component } from 'react'
import { Image, StyleSheet, ScrollView } from 'react-native'
import { Form, Item, Container, Input, Button, Text, Header, Left, Body, Right, Title, Subtitle, Icon, Picker, Label, View } from 'native-base'
import ImagePicker from 'react-native-image-picker'

// import redux
import { connect } from 'react-redux'
import { getColor } from '../public/redux/actions/kategori'

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
			await this.props.dispatch( getColor() )
			
			this.setState({	kategoriS: this.props.kategoriP })
		}
		

    handleChoosePhoto = () => {
			const options = { noData: true,}

			ImagePicker.launchImageLibrary(options, response => {
				if (response.uri) {
					this.setState({ image: response })
				}
			})
    }


    render() {
			
		console.log('id', this.state.id_category)
      return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add kategori</Title>
            <Subtitle>Add kategori juga</Subtitle>
          </Body>
          <Right>
            <Button onPress={() => alert("asd")} transparent>
              <Icon name='checkmark-circle-outline' />
            </Button>
          </Right>
        </Header>
        <View style={styles.root} >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Form style={{ marginHorizontal: 20, marginVertical: 20 }}>
              <Item regular>
                <Input style={{  color: 'black' }} onChangeText={title => this.setState({ title: title })} placeholder="title" placeholderTextColor="black" />
              </Item>
              <Item regular style={{ marginTop: 10 }}>
								<Picker
									mode="dropdown"
									placeholder="Pilih kategori..."
									placeholderStyle="black"
									placeholderIconColor="black"
									style={{ paddingLeft: 20, color: 'black' }}
									selectedValue={this.state.id_category}
									onValueChange={(selected) => {
                    this.setState({
                        id_category: selected
                    })
									}}
							  >
									{
										this.state.kategoriS.map(item => (
													<Picker.Item label={item.color_name + ' colour'} value={item.id_color} />
											))
									}
								</Picker>
              </Item>
              {
                this.state.image != null ?
                <>
                <Button  style={{ marginTop: 10 }} success onPress={this.handleChoosePhoto}>
                  <Text style={{ textAlign: 'center', width: '100%' }}>change Image</Text>
                </Button>
                  <Image style={styles.staticImage} source={this.state.image}/>
                </>
                : 
                <Button  style={{ marginTop: 10 }} success onPress={this.handleChoosePhoto}>
                  <Text style={{ textAlign: 'center', width: '100%' }}>Choose Image</Text>
                </Button>
              }
              
              
            </Form>
          </ScrollView>
        </View>
        </Container>
      )
    }
}

const mapStateToProps = state => {
    return {
        kategoriP: state.reKategori.ListKategori.result
    }
}

export default connect(mapStateToProps)(Register)
const styles = StyleSheet.create({
  root:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  staticImage:{
    width: "100%",
    height:200,
    marginTop: 10,
		justifyContent: 'center',
    alignItems: 'center',
  }
})
