import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log({
    //   [ name ] : value
    // })
    this.setState({
      [ name ] : value
    });
  };

   getBooks = q => {
    // console.log(q)
     API.getBooks(q)
      .then(res => 
        // console.log({ books: res.data.items })
          this.setState({ books: res.data.items })
      )
      .catch(
        () =>
          this.setState({
            books: [],
            message: "No New Books Found, Try a Different Query"
          })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.q);
    this.getBooks(this.state.q);
  };

  handleBookSave = id => {
    // find the book with id
    const book = this.state.books.find(book => book.id === id);
    // find all books in this.state.books
    const booksArray = this.state.books;
    // find the index of the saved book
    const index = booksArray.indexOf(book);
    // remove saved book from the booksArray and setState
    if (index > -1) { booksArray.splice(index, 1);
      this.setState({
        books: booksArray
      })
     }

    // call API and save the book to backend
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
  };

  render() {
    return (
      <Container >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      // authors={book.volumeInfo.authors.join(", ")}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center" style={{padding:'25px'}}>{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
