import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Header from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";
import usersApi from "../../service/api.js";
import axios from "axios";
import AlertComponent from "../../components/Alerts/Alert.tsx";
import SearchNavBar from "../../components/SearchNavBar/SearchNavBar.tsx";

type Inputs = {
  nome: string;
  sobrenome: string;
  email: string;
  CPF: string;
  UserPhone: string;
  UserPhone2: string;
  UserAddress: string;
  UserAddress2: string;
  UserAddressComplement: string;
  UserAddressNumber: number;
  UserAddressZip: number;
  UserCity: string;
  UserState: string;
};

function Users() {
  const [users, setUsers]: any = useState([]);
  const [selectedButton, setSelectedButton] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [alertFlag, setAlertFlag] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let response;
        if (searchTerm === "") {
          response = await usersApi.get("/pessoas");
        } else {
          response = await usersApi.get(`/pessoas/nome/${searchTerm}`);
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

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const pessoa: Inputs = {
      nome: data.nome,
      sobrenome: data.sobrenome,
      email: data.email,
      CPF: data.CPF,
      UserPhone: data.UserPhone,
      UserPhone2: data.UserPhone2,
      UserAddress: data.UserAddress,
      UserAddress2: data.UserAddress2,
      UserAddressComplement: data.UserAddressComplement,
      UserAddressNumber: data.UserAddressNumber,
      UserAddressZip: data.UserAddressZip,
      UserCity: data.UserCity,
      UserState: data.UserState,
    };
    setAlertFlag(true)
    setTimeout(() => setAlertFlag(false), 3000);

    try {
      const response = await axios.post(
        "http://localhost:3000/pessoas",
        pessoa
      );
      console.log("Usuário criado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <>
      <Header />
      <SideBar>
        <div id="searchNavBar" className="d-flex align-items-center justify-content-between mb-5 mt-1">
          <div className="d-flex gap-5">
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClick(1)}
            >
              Create a new user
            </button>
          </div>
          <h1>Users</h1>

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
        {/* <SearchNavBar
        handleButtonClick={()=>handleButtonClick(1)}
        handleInputChange={()=>handleInputChange}
        onSearch={(searchTerm)=>{
          setSearchTerm(searchTerm);
          handleButtonClick(0)
        }}
        

        ></SearchNavBar> */}

        <AlertComponent alertFlag={alertFlag}>
          Usuario Criado com sucesso
        </AlertComponent>
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
                  id="nome"
                  {...register("nome")}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sobrenome"
                  {...register("sobrenome")}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  {...register("email")}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  CPF
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("CPF")}
                  id="CPF"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="UserAddress"
                  {...register("UserAddress")}
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-8">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="UserAddress2"
                  {...register("UserAddress2")}
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">
                  Complement
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="UserAddressComplement"
                  {...register("UserAddressComplement")}
                  placeholder="Next to..."
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  {...register("UserCity")}
                  className="form-control"
                  id="inputCity"
                />
              </div>
              <div className="col-md-1">
                <label htmlFor="inputCity" className="form-label">
                  number
                </label>
                <input
                  type="number"
                  {...register("UserAddressNumber")}
                  className="form-control"
                  id="inputCity"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select
                  id="inputState"
                  {...register("UserState")}
                  className="form-select"
                >
                  <option selected>Choose...</option>
                  <option value={"sp"}>Sp</option>
                  <option value={"es"}>Es</option>
                  <option value={"rj"}>Rj</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip/Cep
                </label>
                <input
                  type="text"
                  {...register("UserAddressZip")}
                  className="form-control"
                  id="UserAddressZip"
                />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputCity" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  {...register("UserPhone")}
                  className="form-control"
                  id="UserPhone"
                />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputCity" className="form-label">
                  Phone 2
                </label>
                <input
                  type="text"
                  {...register("UserPhone2")}
                  className="form-control"
                  id="UserPhone2"
                />
              </div>
              <div className="col-12 " style={{ textAlign: "end" }}>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        )}
        {selectedButton === 0 && (
          <div className="z-1" style={{ overflowY: "auto", maxHeight: "75vh" }}>
            {users.length != 0 ? (
              <table className="table table-striped  table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">Código Pessoa</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Sobrenome</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length >= 1 ? (
                    users.slice(0, 100).map((userData: any, index: number) => (
                      <tr key={index}>
                        <td>{userData.codPessoa}</td>
                        <td>{userData.nome}</td>
                        <td>{userData.sobrenome}</td>
                        <td>{userData.CPF}</td>
                        <td>{userData.email}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>{users.codPessoa}</td>
                      <td>{users.nome}</td>
                      <td>{users.sobrenome}</td>
                      <td>{users.CPF}</td>
                      <td>{users.email}</td>
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

export default Users;
