import Image from "next/image";
import prisma from "../lib/prisma";
import Books from "./components/Books";

async function getBooks() {
  const books = await prisma.book.findMany({
  })
  return books;
}
export default async function Home() {
  const books = await getBooks();
  console.log(books)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to Saga</h1>
      <div className="flex flex-col gap-4">
        {books.map((book) => {
          return (
            <Books
              id={book.id}
              title={book.title}
              author={book.author}
              cover={book.cover}
              genre={book.genre}
              status={book.status}
            />
          )
        })}
      </div>

    </div>
  );
}
