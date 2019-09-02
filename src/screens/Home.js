import React, { Component } from 'react'
import { TouchableOpacity, Image, View, AsyncStorage as storage, ActivityIndicator, StyleSheet, BackHandler, Alert } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { Input, Item, Card, CardItem, Icon, Fab, Text, Toast } from 'native-base';
import DonateBook from './AddNote'

//import redux
import { connect } from 'react-redux'
import {  getBuku } from '../public/redux/actions/book'

class Home extends Component {
    constructor(props) {
			super(props)

			this.state = {
				isLoading: true,
				books: [],
				iduser: '',
				name: '',
			}

        storage.getItem('name', (error, result) => {
					if (result) {
						this.setState({	name: result })
					}
        })

        storage.getItem('iduser', (error, result) => {
					if (result) {
						this.setState({	iduser: result	})
					}
        })
    }


    componentDidMount = async () => {
        await this.makeRequest()
    }

    makeRequest = () => {
        const { page } = this.state
        this.props.dispatch(getBuku())
            .then(res => {
                this.setState({
                    isLoading: false,
										books: this.props.books
                })
            }).catch(() => {
                this.setState({ isLoading: false })
            })
        }

    pullDownRefresh = async () => {
        await this.setState({ isLoading: true })
        await this.props.dispatch(getBuku())
            .then(() => {
                this.setState({ page: 1, books: this.props.books, isLoading: false })
            })
    }

    render() {

        return (
            <>
                <FlatGrid
									itemDimension={130}
									items={this.state.books}
									style={styles.gridView}
									keyExtractor={item => item.id_library}
									refreshing={this.state.isLoading}
									onRefresh={this.pullDownRefresh}
									renderItem={({ item, index }) => {
									return (
										<TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailBook', { data: item })}>
											<Card>
												<CardItem cardBody>
													<Image source={{ uri: `${item.foto_sampul}` }} resizeMode='cover' style={{ height: 230, width: 'auto', flex: 1 }} />
												</CardItem>
											</Card>
										</TouchableOpacity>
												);
											}}
										/>

                <Fab	style={{ backgroundColor: '#5067FF' }}	onPress={() => this.props.navigation.navigate('Donate')}>
									<Icon name="add" />
                </Fab>
            </>
        )
    }
}
const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
const mapStateToProps = state => {
    return {
        books: state.reBuku.ListBuku,
    }
}

export default connect(mapStateToProps)(Home)