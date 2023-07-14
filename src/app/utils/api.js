import axois from 'axios'

const base_url = 'https://api.themoviedb.org/3'
const tmdb_token = process.env.ACCESS_TOKEN_AUTH

const headers = {
     Authorization: 'bearer ' + tmdb_token
}

export const fetchDataFromApi = async (url, params) => {
     try {
          const { data } = await axois.get(base_url + url, {
               headers,
               params
          })
          return data
     } catch (error) {
          console.log(error)
          return error
     }
}