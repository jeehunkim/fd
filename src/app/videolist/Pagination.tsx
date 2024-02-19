import usePagination from './usePagination';
import Container from './Conatiner';

interface PaginationProps {
  currentPage: number;
  totalPageCount: number;
  limitPageCount: number;
  onChange: any;
}

const Pagination = ({
  currentPage = 1,
  totalPageCount,
  limitPageCount,
  onChange,
}: PaginationProps) => {
  const {
    pages,
    isFirstGroup,
    isLastGroup,
    handleClickPage,
    handleClickLeft,
    handleClickRight,
  } = usePagination({ totalPageCount, limitPageCount, currentPage, onChange });
  return (
    <Container>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickLeft}
        disabled={isFirstGroup}
      >
        Button
      </button>

      {pages.map((page) => (
        <Page
          key={page}
          selected={page === currentPage}
          disabled={page === currentPage}
          onClick={handleClickPage}
        >
          {page}
        </Page>
      ))}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClickRight}
        disabled={isLastGroup}
      >
        Button
      </button>
    </Container>
  );
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;
  & + & {
    margin-left: 4px;
  }
  &:disabled {
    cursor: default;
  }
`;

export default Pagination;
