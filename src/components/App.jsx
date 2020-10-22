import React from 'react';
import './App.scss';

import CardsList from './CardsList/CardsList_container';

class App extends React.Component{

    constructor(props) {
        super(props);
        
    }
     //
    render() {
        return <div className='app'>
                <div className='app_shadow'>
                    <h2 className="app_title">Ты сегодня покормил кота?</h2>
                    <CardsList />
                </div>
            </div>
    }
}

export default App;