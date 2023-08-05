import BookListRow from 'books/components/BookListRow';

export default function BookPage() {
  return (
    <div className="flex flex-col bg-gray30 gap-2 w-full h-full">
      <BookListRow />
      <BookListRow />
      <BookListRow />
      <BookListRow />
      <div className="text-center">북 리스트</div>
    </div>
  );
}
