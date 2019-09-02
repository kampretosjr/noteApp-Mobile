import axios from 'axios';
import URL from "../URL";

//let URL = 'http://localhost:5000'

export const getKategory= () => {
  return {
    type: 'GET_KATEGORI',
    payload: axios.get(URL+'/category'),
  };
};
/////////////////////////////////////////////
export const getColor = () => {
  return {
    type: 'GET_COLOR',
    payload: axios.get(URL+'/category/color'),
  };
};

/////////////////////////////////////////////

export const getBukuLimit = (param) =>{
	return{
    type: 'GET_BOOKS_LIMIT',
		payload: axios.get(URL +`/bukuLimit?page=${param}`)
	}
}
/////////////////////////////////////////////

export const postBuku = (data) => {
  return {
    type: "POST_BOOK",
    // payload: axios.post(URL+'/buku', data[0])
    payload: axios.post(URL+'/buku', data,{})
  };
};
/////////////////////////////////////////////

export const deleteBuku = (param) =>{
	return{
    type: 'DELETE_BOOK',
		payload: axios.delete(URL +`/buku/${param}`)
	}
}
/////////////////////////////////////////////

export const getBuku1 = (bookid) => {
  console.log("book id: " + bookid)
  return {
      type: 'GET_BOOK1',
      payload: axios.get(URL +`/buku/${bookid}`)
  }
}
/////////////////////////////////////////////

export const updateBuku = (bookid, data) => {
  return {
      type: 'UPDATE_BOOK',
      payload: axios.patch(URL +`/buku/${bookid}`, data)
  }
}