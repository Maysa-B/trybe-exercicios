import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeClient } from '../redux/actions';

class Clients extends React.Component {
  // state = {
  //   isSorted: false,
  // }

  // handleOrder = () => {
  //   const { isSorted } = this.state;
  //   this.setState({ isSorted: !isSorted})
  // }

  render() {
    // const { isSorted } = this.state;
    const { isValid, clients, toDelete } = this.props;
    // const clientsSorted = clients.sort((a, b) => {
    //   const nameA = a.name.toUpperCase();
    //   const nameB = b.name.toUpperCase();

    //   if (nameA > nameB) {
    //    return 1;
    //   } else if (nameA < nameB) {
    //     return -1;
    //   }

    //   return 0;
    // })
    // const toBeRender = isSorted ? clientsSorted : clients;

    return (
      <section>
        {isValid ? (clients.length === 0 ? (
          <p>Nenhum cliente cadastrado</p>
        ) : (<>
          {clients.map((client) => (
            <div key={client.name}>
              <p>Nome: {client.name}</p>
              <p>Email: {client.email}</p>
              <p>Idade: {client.age}</p>
              <button onClick={ () => toDelete(client.name)}>X</button>
              <hr/>
            </div>
          ))}
          {/* <button onClick={this.handleOrder}>Ordenar</button> */}
          </>
        )) : (
          <p>Login não efetuado</p>
        )}
        <Link to="/cadastro">Ir à página de cadastrado</Link>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isValid: state.validEmail,
  clients: state.clientList,
})

const mapDispatchToProps = (dispatch) => ({
  toDelete: (name) => dispatch(removeClient(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);