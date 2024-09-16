import { type NextRequest } from "next/server";
import { books } from "../../../../_mock/books";

// export const dynamic ="force-dynamic";

export async function GET(
  _: NextRequest,
  { params }: { params: { bookName: string } },
) {
  // 🚧: DBに接続しレコードを取得する
  // const book = books.find(
  //   (book) => book.name === params.bookName,
  // );
  const book = books;
  if (!book) {
    return Response.json({ message: "Not Found" }, { status: 400 });
  }
  console.log(book);
  return Response.json({ book });
}
