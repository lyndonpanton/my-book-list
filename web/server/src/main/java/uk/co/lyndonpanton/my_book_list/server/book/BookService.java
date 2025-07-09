package uk.co.lyndonpanton.my_book_list.server.book;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public BookEntity createBook(BookEntity bookEntity) {
        return bookRepository.save(bookEntity);
    }

    public List<BookEntity> readAllBooks() {
        return bookRepository.findAll();
    }

    public BookEntity readBookById(Long id) {
        return bookRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Error: Book not found")
        );
    }
}
