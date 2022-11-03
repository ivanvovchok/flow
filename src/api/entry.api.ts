import api from './api';

const EntryApi = {
  get: <TResponse>() =>
    api<TResponse>('entries/', 'GET'),
  post: <TBody extends BodyInit, TResponse>(body: TBody) =>
    api<TResponse>('entries/', 'POST', body),
}

export default EntryApi