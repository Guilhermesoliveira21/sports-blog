import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/header';

export const AppRoutes = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route 
                    path='/'
                    element={'Pagina inicial'}
                />
                <Route 
                    path='/futebol'
                    element={'Futebol'}
                />
                <Route 
                    path='/corridas'
                    element={'Jogos'}
                />
                <Route 
                    path='/ultimas-noticias'
                    element={'Ultimas noticias'}
                />
            </Routes>
        </>
    )

}