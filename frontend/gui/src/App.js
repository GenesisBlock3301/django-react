import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from "./Components/Layout";
import ArticleList from "./Components/ArticleList";
import {BrowserRouter,Route} from 'react-router-dom'
import ArticleDetail from "./Components/ArticleDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CustomLayout>
                    <div>
                        <Route exact path='/' component={ArticleList}/>
                        <Route  path='/:articleID' component={ArticleDetail}/>
                    </div>
                </CustomLayout>
            </BrowserRouter>
        </div>
    );
}

export default App;
