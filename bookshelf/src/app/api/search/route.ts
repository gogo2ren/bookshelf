import { type NextRequest } from "next/server";
import { books } from "../../../../_mock/books";


export async function GET(
  _: NextRequest,
  // { params }: { params: { bookName: string } },
) {
  // 🚧: DBに接続しレコードを取得する
    const book = books
    // const book = books.find(
    // (book) => book.name === params.bookName,
  // );
  if (!books || books.length === 0) {
    return new Response(JSON.stringify({ message: "Not Found" }), { status: 404 });
  }

  return new Response(JSON.stringify(book), { status: 200 });
}
