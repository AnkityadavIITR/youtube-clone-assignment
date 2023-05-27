import React from 'react'
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components'


const Page= ({slide,setSlide,}) => {
  const handlePageChange = (event, newPageNumber) => {
    setSlide(newPageNumber);
  };
  
  const paginationStyle = {
    '& .MuiPaginationItem-root': {
      borderRadius: '50%',
      margin: '0 5px',
      '&.Mui-selected': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
      },
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  };

  return (
    <PageContainer >
      <Pagination count={8} variant="outlined" style={paginationStyle} shape="rounded" onChange={handlePageChange} />
    </PageContainer>
  )
}
const PageContainer=styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 260px 10px 0px;
  background-color: #F9F9F9;


  @media (max-width: 688px){
    width: 90%;
    padding-left: 4%;
    align-self: center;
    align-content: center;
    position: static;
    z-index: 200;
  }
 
`


export default Page
