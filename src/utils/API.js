import axios from "axios";

function search(){
  return axios.get('https://randomuser.me/api/?results=35')
}


export default {search}
