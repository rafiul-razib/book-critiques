import toast from "react-hot-toast";

export const getReadBooks = ()=>{
    let books= [];
    const storedBooks = localStorage.getItem('readBooks');
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}

export const saveAsRead = (book) =>{
    let books = getReadBooks();
    const isExists = books.find(item => item.bookId === book.bookId);
    if(isExists){
        return toast.error('You Already Read This Book!!')
    }
    
        books.push(book);
        localStorage.setItem('readBooks', JSON.stringify(books));
        toast.success('Book added as Read!')
    
}

export const deleteReadBook = book =>{
    let books = getReadBooks();
    const remainingBooks = books.filter(item => item.id !== book.bookId);
    localStorage.setItem('readBooks', JSON.stringify(remainingBooks));
    toast.success('Book removed from read list!!')
}

export const getWishedBooks = ()=>{
    let books= [];
    const storedBooks = localStorage.getItem('wishedBooks');
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}

export const saveAsWished = (book) =>{
    let books = getWishedBooks();
    let readBooks = getReadBooks()
    const isExists = books.find(item => item.bookId === book.bookId);
    const isRead = readBooks.find(item => item.bookId === book.bookId);
    if(isExists){
        return toast.error('You Already added this Book to WishList!!')
    }

    else if(isRead){
        return toast.error('You already read this book!!')
    }
    
        books.push(book);
        localStorage.setItem('wishedBooks', JSON.stringify(books));
        toast.success('Book added to wishlist!')
    
}

export const deleteWishedBook = book =>{
    let books = getWishedBooks();
    const remainingBooks = books.filter(item => item.id !== book.bookId);
    localStorage.setItem('wishedBooks', JSON.stringify(remainingBooks));
    toast.success('Book removed from wishlist!!')
}





