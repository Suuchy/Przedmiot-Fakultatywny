import { Http } from "@material-ui/icons"
import http from '../utilies/http';
import {omvApiKey} from '../key';

const movieService = {
    searchByName: async (name: string, page: number) => {
        try {
            const responce = await <any>Http.get('http://www.omdibapi.com/', {
                apikey = omdApiKey,
                s: name,
            });
            if(responce?.Error) {
                console.log(responce.Error);
                return null;

            } else{
                return{
                    totralResults: parseInt(reponce.totralResults, 10),
                    movies: responce.Search.map((movie:any) => ({
                        id:movie.imodID,
                        poster: movie.Poster,
                        title: movie.Title,
                        type: movie.Type,
                        year: movie.Year,
                    }))
                }
            }
        } catch (error) {
            console.log(error);
        }
    },
    getById: async (id:string) => {
        const responce = await <any>http.get(url, {
            apikey: omvApiKey,
            i: id,

        });
    }
};