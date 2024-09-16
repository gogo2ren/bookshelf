import { type NextRequest } from "next/server";
import { books } from "../../../../../_mock/books";

// export const dynamic ="force-dynamic";

export async function GET(
  _: NextRequest,
  // { params }: { params: { bookName: string } },
) {
  // 🚧: DBに接続しレコードを取得する
  const book = books
  //   const book = books.find(
  //   (book) => book.name === params.bookName,
  // );
  if (!book) {
    return Response.json({ message: "Not Found" }, { status: 400 });/* TODO:疎通確認できたら404に戻す */
  }
  return Response.json({ book });
}
