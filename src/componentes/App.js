import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper.js';
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {
  state = {
    resultado : '',
    datos : {},
  }
  cotizarSeguro = (datos) => {
    const {marca, year, plan} = datos;
    //Agregar una base
    let resultado = 2000;
    //Obtener la diferencia de años
    const diferenciaAnio = obtenerDiferenciaAnio(year);
    //Por cada año restarle el 3% al valor del seguro
    resultado -= ((diferenciaAnio * 3) * resultado) / 100;
    // Americano 15%, Asiático 5% y Europeo 30% de incremento al valor
    resultado = calcularMarca(marca) * resultado;
    // el plan básico aumenta la tarifa en un 20%, y el completo en un 50%
    let incrementoPlan = obtenerPlan(plan);
    // dependiendo del plan, incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    //crear objeto para el resumen
    const datosAuto = {
      marca : marca,
      plan : plan,
      year: year
    }
    //ya tenemos el costo
    this.setState({
      resultado : resultado,
      datos : datosAuto
    })
  }

  render(){
    return (
      <div className="contenedor">
        <Header
          titulo = "Cotizador de Seguro de Auto"
        />
  
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
          <Resultado
          resultado={this.state.resultado}
          />
        </div>

      </div>
    );
  }
}

export default App;
