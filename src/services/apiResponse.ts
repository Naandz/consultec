type Pagination = {
  total?: number;
  count?: number;
  per_page?: number;
  current_page?: number;
  total_pages?: number;
};

type SimpleResponse<T> = {
  data: T;
};

type ApiResponse<T> = SimpleResponse<T> & Pagination;

export default ApiResponse;
