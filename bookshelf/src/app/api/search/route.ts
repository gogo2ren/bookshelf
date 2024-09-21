import { type NextRequest } from "next/server";
import { books } from "../../../../_mock/books";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(query)
  );

  if (filteredBooks.length === 0) {
    return new Response(JSON.stringify({ message: "Not Found" }), { status: 404 });
  }

  return new Response(JSON.stringify(filteredBooks), { status: 200 });
}
