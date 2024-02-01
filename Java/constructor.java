

    class Book {

        String title;
        String author;
        String pubdate;
        double price;

        public Book( String title, 
        String author, 
        String pubdate,
        double price){
            this.title = title;
            this.author = author;
            this.pubdate = pubdate;
            this.price = price; 
        }

        public void displayDetails(){

        System.out.println(title + author + pubdate + price );
        
        }

    

    public static void main(String[] args) {

        Book book = new Book("Satvik", "abya", "12/01/24", 2000.00);

        book.displayDetails();
    }

    }
