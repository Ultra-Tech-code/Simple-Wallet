import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";


// const MySwal = withReactContent(Swal);

export const showConfirmModal = ({ 
    title,
    text,
    icon,
    confirmButtonText,
    showConfirmButton = true,
    showCancelButton = true,
    cb,
}) => {
    
Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    showConfirmButton,
    showCancelButton,
    cb
  }).then((res) => {
    if (res.isConfirmed) {
        if(cb){
         cb();
        }
    Swal.fire(`${title}`, `Your file has been ${title}.`, "success" );

    } else {
    Swal.fire("Cancelled!", "Your file is safe :)", "error");
    }
  });

}

// // function to update description and alseo serves as a todo list update function
// export const showUpdateModal = ({ 
//     title,
//     text,
//     icon,
//     confirmButtonText,
//     showConfirmButton = true,
//     showCancelButton = true,
//     cb,
// }) => {




