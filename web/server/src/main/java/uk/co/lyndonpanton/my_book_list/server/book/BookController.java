package uk.co.lyndonpanton.my_book_list.server.book;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

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
