import { Component } from 'react';

class SectionItems extends Component {

/* aqi tendre un event.on para mostrar en el costado */
  
  render() { /* a los Item de aqui establecer el eventname en 'detail' para manejarlos diferentes eq en acordeonItems */
    return (
      <section className="Section">
        <h2 className="h2">seccion itens</h2>
        

<table class="main">
 
  <tr>
    <td class="w50">
        <table class="sub">
          <thead>
            <tr>
              <th colspan="2"><p>Recompensas disponibles</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
               <Item/>
              </td>
              <td>
                <p class="blue">Nombre del item</p>
              </td>
            </tr>

            <tr>
              <td>
                <Item/>
              </td>
              <td>
                <p class="green">Nombre del item</p>
              </td>
            </tr>

            <tr>
              <td>
                <Item/>
              </td>
              <td>
                <p class="orange">Nombre del item</p>
              </td>
            </tr>
          </tbody>
        </table>
    </td>

    <td class="w50 detail-item">
        <Hover/>
    </td>
  </tr>
</table>
      </section>
    );
  }
}

export default SectionItems;
