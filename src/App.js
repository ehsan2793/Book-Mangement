import React from 'react';
import './App.css'
import {Route,Switch,Redirect} from "react-router-dom";
import Header from "./componet/Header";
import BooksContext from './context/BooksContext';
import AddBook from "./componet/AddBook";
import BookList from "./componet/BookList";
import EditBook from "./componet/EditBook";
import useLocalStorage from './hooks/useLocalStroge'
function App() {
    const [books, setBooks] = useLocalStorage('books', []);
    return (
        <div>
            <Header />
            <div className="main-content">
                <BooksContext.Provider value={{ books, setBooks }}>
                    <Switch>
                        <Route component={BookList} path="/" exact={true} />
                        <Route component={AddBook} path="/add" />
                        <Route component={EditBook} path="/edit/:id" />
                        <Route component={() => <Redirect to="/" />} />
                    </Switch>
                </BooksContext.Provider>
            </div>
                <h2>thank you  FreeCodeCamp</h2>
            <p>https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/</p>
        </div>
    );
}

export default App;
