import React,{Component} from 'react';
import Header from '../component/Header';
import Movies from '../component/Movies'
import Menu from '../component/Menu';
import MovieDetails from './MovieDetails';

class Home extends Component{
    render()
    {
        return(
            <div>
                <Header />
                <Menu />
                <Movies />
                <MovieDetails />
            </div>

        )
    }
}
export default Home;