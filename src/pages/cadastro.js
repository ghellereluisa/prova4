import React from 'react';
import './cadastro.css';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import {useState} from 'react';
import Data from '../JSON/cadastro.json';




function Cadastro(){

    const[nome, setNome] = useState("");
    const[idade, setIdade] = useState("");
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[cadastrados, setCadastrados] = useState( Data );
    const[id, setId] = useState( cadastrados.length+1);
    const[tipo, setTipo] = useState('password');
    const[checkbox, setCheckbox] = useState (false);


    function versenha (){
        if(!checkbox){
            setTipo('text')
            setCheckbox(true)
        }

        else{
            setTipo('password')
            setCheckbox(false)
        }
    }


    function handleSubmit( event ){
        const novoCadastro = {
            nome: nome,
            idade: idade,
            email: email,
            senha: senha,
        }

        setId( id+1 );
        setCadastrados([...cadastrados, novoCadastro]);
        setNome("");
        setIdade("");
        setEmail("");
        setSenha("");

        event.preventDefault();
    }

    const handleChangeNome = (e)=>{
        setNome(e.target.value);
        console.log(e.target.value);
    }

    const handleChangeIdade = (e)=>{
        setIdade(e.target.value);
        console.log(e.target.value);
    }

    const handleChangeEmail = (e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleChangeSenha = (e)=>{
        setSenha(e.target.value);
        console.log(e.target.value);
    }

    return(
        <div id="cadastro">
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="containerCadastro">
                <h1 className="cadastrese">Cadastre-se</h1>
                <form className="formulario" onClick={handleSubmit}>
                    <label>
                        Nome:
                        <input onChange={handleChangeNome} type="text" value={nome}/>
                    </label>

                    <label>
                        Idade:
                        <input onChange={handleChangeIdade} type="text" value={idade}/>
                    </label>

                    <label>
                        Email:
                        <input onChange={handleChangeEmail} type="text" value={email}/>
                    </label>

                    <label>
                        Senha:
                        <input onChange={handleChangeSenha} type={tipo} value={senha}/>
                    </label>

                    <div className="checkbox">
                        <input id="box" onClick={versenha} type="checkbox"/>
                        <label>
                            Mostrar senha
                        </label>
                    </div>

                    <button type="button">
                        Cadastrar-se
                    </button>

                </form>

            </div>

            <div className="footer">
                <Footer/>
            </div>
            
        </div>
    )
}


export default Cadastro;