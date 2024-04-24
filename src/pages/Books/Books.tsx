import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Header from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";
import usersApi from "../../service/api.js";

type Inputs = {
  BookName: string;
  BookAuthorName: string;
  BookPublisher: string;
  BookYear: string;
  ISBN: number;
  QuantityNumber: number;
};

function Books() {
  const [Books, setUsers]: any = useState([]);
  const [selectedButton, setSelectedButton] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let response;
        if (searchTerm === "") {
          response = await usersApi.get("/books");
        } else {
          response = await usersApi.get(`/books/${searchTerm}`);
        }
        setUsers(response.data);
      } catch (error) {
        console.error("Ops! Ocorreu um erro: " + error);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const handleButtonClick = (buttonNumber: any) => {
    setSelectedButton(buttonNumber);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <Header />
      <SideBar>
        <div className="d-flex align-items-center justify-content-between mb-5">
          <div className="d-flex gap-5">
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClick(1)}
            >
              Add a new Book
            </button>
          </div>
          <h1>Books</h1>

          <div className="d-flex align-items-baseline">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search by user name"
            />
            <button
              onClick={() => {
                setSearchTerm(searchTerm);
                handleButtonClick(0);
              }}
              className="d-flex justify-content-center "
            >
              Search
            </button>
          </div>
        </div>
        {selectedButton === 1 && (
          <div
            style={{
              width: "65%",
              margin: "13vh auto",
              backgroundColor: "#ffffff",
              boxShadow: "20px 20px 60px #d9d9d9",
            }}
            className="p-3 rounded"
          >
            <form
              className="row g-3"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="BookName"
                  {...register("BookName")}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="BookAuthorName"
                  {...register("BookAuthorName")}
                />
              </div>

              <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">
                  Book publisher
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="BookPublisher"
                  {...register("BookPublisher")}
                  placeholder="Next to..."
                />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputCity" className="form-label">
                  Book Year
                </label>
                <input
                  type="date"
                  {...register("BookYear")}
                  className="form-control"
                  id="BookYear"
                />
              </div>
              <div className="col-md-1">
                <label htmlFor="inputCity" className="form-label">
                  ISBN
                </label>
                <input
                  type="ISBN"
                  {...register("ISBN")}
                  className="form-control"
                  id="inputCity"
                />
              </div>

              <div className="col-md-1">
                <label htmlFor="inputCity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  {...register("QuantityNumber")}
                  className="form-control"
                  id="QuantityNumber"
                />
              </div>
              <div className="col-12 " style={{ textAlign: "end" }}>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        )}
        {selectedButton === 0 && (
          <div style={{ overflowY: "auto", maxHeight: "75vh" }}>
            {Books.length != 0 ? (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Código Livro</th>
                    {/* <th scope="col">Código Editora</th> */}
                    <th scope="col">Titulo</th>
                    <th scope="col">Edição</th>
                    <th scope="col">Ano</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {Books.length >= 1 ? (
                    Books.slice(0, 100).map((bookData: any, index: number) => (
                      <tr key={index}>
                        <td>{bookData.codLivro}</td>
                        {/* <td>{bookData.codEditora}</td> */}
                        <td>{bookData.titulo}</td>
                        <td>{bookData.edicao}</td>
                        <td>{bookData.ano}</td>
                        <td>{bookData.ISBN}</td>
                        <td>{bookData.quantidade}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>{Books.codLivro}</td>
                      <td>{Books.codEditora}</td>
                      <td>{Books.titulo}</td>
                      <td>{Books.edicao}</td>
                      <td>{Books.ano}</td>
                      <td>{Books.ISBN}</td>
                      <td>{Books.quantidade}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) : (
              <></>
            )}
          </div>
        )}
      </SideBar>
    </>
  );
}

export default Books;
