import { type NextRequest } from "next/server";
import { books } from "../../../../_mock/books";

// export const dynamic ="force-dynamic";

export async function GET(
  _: NextRequest,
  // { params }: { params: { bookName: string } },
) {
  // 🚧: DBに接続しレコードを取得する
  // const book = books
  const book = 
  [
    {
      id: "1",
      name: "ネットワーク技術入門",
      author: "みやたひろし",
      label: "4",
      state: "貸出中",
    },
    {
      id: "2",
      name: "独習C++",
      author: "あああ",
      label: "1",
      state: "貸出中",
    },
    {
      id: "3",
      name: "ソフトウェアのテスト技法",
      author: "いいいい",
      label: "5",
      state: "利用可能",
    },
  ];
  //   const book = books.find(
  //   (book) => book.name === params.bookName,
  // );
  if (!book) {
    return Response.json({ message: "Not Found" }, { status: 400 });/* TODO:疎通確認できたら404に戻す */
  }
  return Response.json({ book });
}
