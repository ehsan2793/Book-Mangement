import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { v4 as uuidv4 } from 'uuid';
const BookForm = (props) => {
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
        date: props.book ? props.book.date : ''
    });



    const [errorMsg, setErrorMsg] = useState('');
    const { bookname, author, price, quantity } = book;
const handleSubmit = (event) => {
    event.preventDefault()
    const values = [bookname, author, price, quantity];
    let errorMsg = '';
    const allFieldsFilled = values.every((field) => {
        const value = `${field}`.trim();
        return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
        const book = {
            id: uuidv4(),
            bookname,
            author,
            price,
            quantity,
            date: new Date()
        };
        props.handleOnSubmit(book);
    } else {
        errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);

}
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }

    }
    return (
        <div className={'main-form'}>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId={'name'}>
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control className={'input-control'} type={'text'} name={'bookname'} value={book.bookname} placeholder={'Enter book name'} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="author"
                        value={book.author}
                        placeholder="Enter name of author"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="quantity"
                        value={book.quantity}
                        placeholder="Enter available quantity"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Book Price</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="price"
                        value={book.price}
                        placeholder="Enter price of book"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {errorMsg && <p className={errorMsg}>{errorMsg}</p>}
                <Button variant = "primary" type="submit" className={'submit-btn'} > Submit</Button>


            </Form>

        </div>
    );
};

export default BookForm;

