import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from "./Components/Layout";
import ArticleList from "./Components/ArticleList";


function App() {
  return (
    <div className="App">
        <CustomLayout>
            <ArticleList/>
        </CustomLayout>
    </div>
  );
}

export default App;
