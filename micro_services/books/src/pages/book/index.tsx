import BookListRow from 'books/components/BookListRow';

export default function BookPage() {
  return (
    <div className="absolute flex flex-col bg-gray30 gap-2 w-full h-full overflow-y-scroll scrollbar-hidden padding-layout">
      <BookListRow />
    </div>
  );
}
