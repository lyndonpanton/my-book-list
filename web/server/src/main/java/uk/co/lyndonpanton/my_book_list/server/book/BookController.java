package uk.co.lyndonpanton.my_book_list.server.book;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @PostMapping("/books")
    public ResponseEntity<BookEntity> createBook(
            @RequestBody BookEntity bookEntity) {
        BookEntity createdBook = bookService.createBook(bookEntity);

        return ResponseEntity.created(
                URI.create("/books/" + createdBook.getId())
        ).body(createdBook);
    }

    @GetMapping("/books")
    public ResponseEntity<List<BookEntity>> readAllBooks() {
        return ResponseEntity.ok(bookService.readAllBooks());
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<BookEntity> readBookById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(bookService.readBookById(id));
    }
}
