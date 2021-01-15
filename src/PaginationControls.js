import Pagination from "react-bootstrap/Pagination";


function PaginationControls({nextPage, previousPage, page, total}) {
    const items = [];
    for(let i = 0; i < total; i++) {
        items.push(
          <Pagination.Item
            onClick={() => nextPage(i)}
            key={i}
            active={i === page}
          >
            {i+1}
          </Pagination.Item>
        );
    }
  return (
    <Pagination>
      <Pagination.First onClick={() => previousPage(0)} />
      <Pagination.Prev onClick={() => previousPage(page - 1)} />
        {items}
      <Pagination.Next onClick={() => nextPage(page + 1)} />
      <Pagination.Last onClick={() => nextPage(total-1)} />
    </Pagination>
  );
}

export default PaginationControls;
