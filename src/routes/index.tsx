import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route 
                    path='/'
                    element={'Pagina inicial'}
                />
                <Route 
                    path='/jogos'
                    element={'Jogos'}
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