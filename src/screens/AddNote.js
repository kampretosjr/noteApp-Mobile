import React, { Component } from 'react'
import { Image, StyleSheet, ScrollView } from 'react-native'
import { Form, Item, Header, Left, Body, Right, Title, Subtitle, Input, Button, Text, Icon, CardItem, Container, Toast, Row, Picker, Textarea, View } from 'native-base'
import ImagePicker from 'react-native-image-picker'

// import redux
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
		

    handleChoosePhoto = () => {
			const options = { noData: true,}

			ImagePicker.launchImageLibrary(options, response => {
				if (response.uri) {
					this.setState({ image: response })
				}
			})
    }

    render() {
			
      return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add note</Title>
            <Subtitle>Add note juga</Subtitle>
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
              <Item floatingLabel regular>
              <Label>title</Label>
                <Input style={{  color: 'black' }} onChangeText={title => this.setState({ title: title })} />
              </Item>

              <Textarea style={{ marginTop: 10 }} onChangeText={text => this.setState({ text: text })} rowSpan={12} bordered placeholder=" add deskripsion" />

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
													<Picker.Item label={item.category_name} value={item.id_category} />
											))
									}
								</Picker>
              </Item>

              <Button  style={{ marginTop: 10,backgroundColor:'white' }} >
                <Text style={{ width: '100%', textAlign: 'center', }}></Text>
              </Button>
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
