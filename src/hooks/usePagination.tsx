import { useState } from 'react';
import { Data } from '../types';

const usePagination = (data: Data, itemsPerPage: number) => {

    const [currentPage, setCurrentPage] = useState(1)
    //retorna o menor número inteiro maior ou igual a data.length / itemsPerPage
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = () => {
        // índice do primeiro elemento do array no intervalo delimitado por itemsPerPage
        const start = (currentPage - 1) * itemsPerPage
        // indíce do último elemento do array no intervalo delimitado por itemsPerPage
        const end = start + itemsPerPage;
        // retorna os dados que estão entre o intervalo entre start e end
        return data.slice(start, end)
    }

    const next = () => {
        // seta  o menor valor passado como parâmetro na currentPage
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
    }
    const prev = () => {
        // seta  o maior valor passado como parâmetro na currentPage
        setCurrentPage((currentPage) => Math.max(currentPage - 1, maxPage))
    }
    const jump = (page: number) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    }
    return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination