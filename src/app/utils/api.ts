import axois from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN_AUTH

const headers = {
     Authorization: 'bearer ' + TMDB_API_ACCESS_TOKEN
}

export const fetchDataFromApi = async (url: string, params?: string) => {
     try {
          const { data } = await axois.get(BASE_URL + url, {
               headers,
               params,
          })
          return data.results
     } catch (error) {
          console.log(error)
          return error
     }
}