import api from './api';

const CategoryApi = {
  get: <TResponse>() =>
    api<TResponse>('categories/', 'GET'),
  post: <TBody extends BodyInit, TResponse>(body: TBody) =>
    api<TResponse>('categories/', 'POST', body),
}

export default CategoryApi