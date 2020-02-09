import axios from "axios";

export  const  loadEducationList = ({commit}) => {
  let educationData = [];
  axios
    .get('https://api.myjson.com/bins/s1k00')
    .then(response => (educationData = response.data[0]))
    .then(response => {
        commit('loadEducationList', educationData);
      });
}

export  const  loadWorkList = ({commit}) => {
  let workData = [];
  axios
    .get('https://api.myjson.com/bins/14m4mg')
    .then(response => (workData = response.data[0]))
    .then(response => {
      commit('loadWorkList', workData);
    });
}
