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

    public BookEntity updateBookById(Long id, BookEntity bookEntity) {
        BookEntity updatedBookEntity = bookRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Error: Book not found")
        );

        if (updatedBookEntity != null) {
            updatedBookEntity.setTitle(bookEntity.getTitle());
            updatedBookEntity.setAuthor(bookEntity.getAuthor());
            updatedBookEntity.setPages(bookEntity.getPages());
            updatedBookEntity.setIsbn(bookEntity.getIsbn());
            updatedBookEntity.setDetails(bookEntity.getDetails());
            updatedBookEntity.setCoverUrl(bookEntity.getCoverUrl());

            return bookRepository.save(updatedBookEntity);
        }

        return null;
    }
}
