class LS {
    getData(key){
        let data
        if(localStorage.getItem(key) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(key))
        }
        return data
    }

    setData(key, data){
        localStorage.setItem(key, JSON.stringify(data))
    }

    addBook(book){
        let books
        if(localStorage.getItem("books")=== null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.push(book)
        localStorage.setItem("books", JSON.stringify(books))
    }
}