import Head from "next/head";
import { Header } from "@/components/ui/header";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";

import { setupApiClient } from "@/services/api";
import { toast } from "react-toastify";

import { canSSRAuth } from "@/utils/canSRRAuth";

export default function Category() {
  const [name, setName] = useState("");

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (name === "") {
      return;
    }

    const apiClient = setupApiClient();
    await apiClient.post("/category", { name: name });
    toast.success("Categoria cadastrada com sucesso!");
    setName("");
  }

  return (
    <>
      <Head>
        <title>Nova categoria - Pizzaria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar Categorias</h1>
          <form className={styles.form} onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button type="submit" className="buttonAdd">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}


export const getServerSideProps = canSSRAuth(async(ctx)=>{

    return {
        props:{
            
        }
    }
})
