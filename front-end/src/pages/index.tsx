import Head from "next/head";
import Image from "next/image";
import logoImg from "../../public/logo.png";
import styles from "../styles/Home.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";

import { canSSRGuest } from "@/utils/canSSRGuest";

import { useContext, FormEvent, useState } from "react";

import { AuthContext } from "@/pages/contexts/AuthContext";

export default function Home() {
  const { singIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if(email === '' || password === '' ){
      toast.warning('Usuario invalido.')
      
      return 
    }

    setLoading(true)

    let data = {
      email,
      password
    };

    await singIn(data);

    setLoading(false)
  }
  return (
    <>
      <Head>
        <title>Pizzaria - Login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} width={300} height={300} alt="Logo Pizzaria" />

        <div className={styles.login}>
          <h1>Login Pizzaria</h1>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu e-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input placeholder="Digite sua senha" type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>
          <Link href="/singup" legacyBehavior>
            <a className={styles.text}>Nao possui uma conta? Cadastre-se.</a>
          </Link>
        </div>
      </div>
    </>
  );
}


export const getServerSideProps = canSSRGuest(async (ctx)=> {
 return{
  props: {}
 }
})
