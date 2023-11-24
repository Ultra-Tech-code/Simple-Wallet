export const inputModal = () => {
    MySwal.fire({
      title: "Delete!",
      text: "Do you want to Delete",
      icon: "error",
      confirmButtonText: "Yes",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");

        // Remove the to-do item from the array and update local storage
        todoDB = todoDB.filter((todo) => todo.id !== id);
        setTodos(todoDB);
        setLocalStorage(todo_storage_name, todoDB);
      } else {
        MySwal.fire("Cancelled!", "Your file is safe :)", "error");
      }
    });
  }