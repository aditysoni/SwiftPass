
// import react from 'react' ;


// const pagination = ({totalpasses , passesperpage ,setCurrentPage} , currentPage) => 
// {
//     let pages = [] ;
//     for (let i = 1 ; i <= Math.ceil(totalpasses / passesperpage) ; i ++ )
//     {
//         pages.push(i) ;
//     }

//     return (

//         <div> 
//         {pages.map((page , index) => 
//             {
//                 return <button key = {index} onClick={()=> setCurrentPage(page)} >{page}</button>
//             })}
//         </div>
//     )
// }

// export default pagination ;



// //////
// const [passess , setPassess ] = useState([]) ;
// const [currentPage , setcurrentpage] = useState(1) ;
// const [postsPerPage , setpostsperpage] = useState(15) ;

//  const lastPostIndex = currentPage * postsPerPage ;
//  const firstPostIndex = lastPostIndex - postsPerPage ; 


//  const currentpasses = passess.slice(firstPostIndex , lastPostIndex);
// <pagination totalpasses = {passess.length}
// postsPerPage = {postsPerPage}
// setCurrentPage = {setcurrentpage}
// currentPage= {currentPage} 
// >
// </pagination>
