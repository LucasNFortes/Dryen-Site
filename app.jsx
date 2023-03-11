import React, { useState, useEffect } from "react";

document.getElementById("year").innerHTML = new Date().getFullYear();

const navigation =
  document.querySelector(".primary-navigation");

const navigationHeight =
  navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

/*Formulário*/
class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      Email: '',
      Mensagem: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const endpoint = 'https://formsubmit.co/dryen.nascimento.galvao@gmail.com';
    const data = new FormData();
    data.append('Nome', this.state.Nome);
    data.append('Email', this.state.Email);
    data.append('Mensagem', this.state.Mensagem);

    fetch(endpoint, {
      method: 'POST',
      body: data
    })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <header> {/* Adiciona o elemento header aqui */}
          <nav className="primary-navigation">
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </header>
        <div id="my-form">
          <div className="form">
            <h6>MENSAGEM DIRETA</h6>
            <h1>Mande uma mensagem</h1>
            <form onSubmit={this.handleSubmit}>
              <input className="nome" name="nome" placeholder="Nome" value={this.state.nome} onChange={this.handleChange} />
              <br />
              <input className="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
              <br />
              <input className="mensagem" name="mensagem" placeholder="Mensagem" value={this.state.mensagem} onChange={this.handleChange} />
              <br />
              <button id="send-msg" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
/*End Formulário*/
