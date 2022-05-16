import React from 'react';

class User extends React.Component {

  state = {
    loading: true,
    perfil:'',
  }

  componentDidMount = async () => {
    const URL = 'https://api.randomuser.me/';
    const fetchApi = await fetch(URL);
    const result = await fetchApi.json();
    this.setState({ perfil: result.results }, () => this.setState({loading: false}));
  }

  shouldComponentUpdate = (_nextProps, nextState) => {
    const AGE = 50;
    if (nextState.perfil[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  render() {

    const { loading, perfil } = this.state;

    return (
      <>
        {loading === true ? (
          <div>Carregando...</div>) : (
            <div>
              <h2>{perfil[0].name.first}</h2>
              <img src={perfil[0].picture.medium} alt={perfil[0].name.first} />
              <p>{perfil[0].email}</p>
              <p>{perfil[0].dob.age} anos</p>
            </div>
          )
        }
      </>
    )
  }
}

export default User;