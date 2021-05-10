import { Search } from '@material-ui/icons';
import React from 'react';
import NavPanel from '../../components/NavPanel';
import http from '../../utilies/http';

const Home = () => {
    const [serach, setSearch] = React.usetState('harry potter');

    React.useEffect(()) =>{
        const makeRequest = async () => {
            try {
                const makeRequest = await http.get('http://www.ombapi.com,' {
                    apikey: imdiApiKey,
                    s: Search,
                    plot : 'full',

                });
                setMovie(responce);
            } catch (error)
                console.log(error);
        };
        makeRequest();
    }, [search]);
    return (
        <div>
            <NavPanel />
            <div>This is home page</div>
        </div>
    );
}

export default Home;