import { useEffect, useState } from "react";
import CardHome from "../../components/cardHome/CardHome";
import Header from "../../components/header/header";
import SideBar from "../../components/sideBar/sideBar";
import usersApi from "../../service/api";

function Home() {
  const [BooksNumber, setBookNumber] = useState<any>();
const [ReadsNumber, setReadsNumber] = useState<any>();

  useEffect(() => {
    const fetchBooksCount = async () => {
      try {
        let dadosPessoas = await usersApi.get("/pessoas/count");
        setReadsNumber(dadosPessoas.data); // Assuming dadosPessoas is an object with data property
      } catch (error) {
        console.error("Ops! Ocorreu um erro: " + error);
      }
      try {
        let dadosLivros = await usersApi.get("/books/count");
        setBookNumber(dadosLivros.data); // Assuming dadosLivros is an object with data property
      } catch (error) {
        console.error("Ops! Ocorreu um erro: " + error);
      }
    };
  
    fetchBooksCount();
  }, []); // empty dependency array to run useEffect only once

  return (
    <>
      <Header />
      <SideBar>
        {
          <>
            <div>
              <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 gap-5">
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-5">
                  <CardHome cor="#79b6c9" content={BooksNumber} title="Books " />
                  <CardHome cor="#79b6c9" content={ReadsNumber} title="Readers " />
                  <CardHome cor="#79b6c9" content="0" title="Authors " />
                </div>
                <div>
                <CardHome cor="#79b6c9" content="" title="" />
                </div>
              </div>
            </div>
          </>
        }
      </SideBar>
    </>
  );
}

export default Home;
