import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/logo.png";
import styles from "../../styles/Home.module.scss";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { FormEvent, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export default function SingUp() {

  const {singUp} = useContext(AuthContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSingUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.error('Preencha todos os campos.')
      
      return;
    }

    setLoading(true);

    let data = {
      name,
      email, 
      password
    }

    await singUp(data)

    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Pizzaria - Cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} width={100} height={100} alt="Logo Pizzaria" />

        <div className={styles.login}>
          <h1>Cadastro Pizzaria</h1>
          <form onSubmit={handleSingUp}>
            <Input
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Digite seu e-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </form>
          <Link href="/" legacyBehavior>
            <a className={styles.text}>Ja possui uma conta?</a>
          </Link>
        </div>
      </div>
    </>
  );
}
