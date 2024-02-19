import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Container from "./Conatiner";
import Pagination from "./Pagination";

interface Product {
    name:string;
}

const PaginationPage: NextPage = () => {
    const router = useRouter();
    const { page } = router.query;
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    

    // 컨텐츠 데이터를 불러오는 함수
    const fetchProducts = async (page: number) => {
      // ...
    };
  
   //  페이지 버튼 클릭 시 url 변경
    const handleChangePage = (page: number) => {
      router.push(`pagination?page=${page}`, undefined, { shallow: true, scroll: true });
    };
  
    useEffect(() => {
      // 페이지 변경 시 
      if (!page) return;
      setCurrentPage(Number(page)); // 현재 페이지 상태 변경 -> Pagination리렌더링
      fetchProducts(Number(page));  // 컨텐츠 데이터 새롭게 불러와 상태 변경 -> ProductList리렌더링
    }, [page]);
  
    return (
       <Container>
           {/* <ProductList products={products} /> */}
           <Pagination
                  totalPageCount={Math.round(allProducts.length / PRODUCTS_LENGTH)}
                  limitPageCount={5}
                  currentPage={currentPage}
                  onChange={handleChangePage}
                />
       </Container>
    );
  };
  
  export default PaginationPage;
  }