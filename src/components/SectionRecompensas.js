import { Component } from 'react';

class SectionRecompensas extends Component {
  render() {
    return (
      <section className="Section Rewards">
        <h2 className="h2">Recompensas</h2>
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
                <Item />
              </td>
              <td>
                <ItemIcon/>
                <span>x420</span>
              </td>
            </tr>

            <tr>
              <td>
               <Item />
              </td>
              <td>
                <ItemIcon />
                <span>x36</span>
              </td>
            </tr>

            <tr>
              <td>
                <Item/>
              </td>
              <td>
                <ItemIcon/>
                <span>x8</span>
              </td>
            </tr>

          </tbody>
        </table>
    </td>

    <td class="w50">
      <img src="../src/assets/imgs/npc.jpg" alt="npc" class="npc" />
    </td>

  </tr>
</table>

<table class="main">
  <thead>
    <tr>
      <th>
        <ItemIcon/>
      </th>
      <th colspan="3"><p>caja de holy spirit</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Item/>
      </td>
      <td>
        <Item/>
      </td>
      <td>
        <Item/>
      </td>
      <td>
        <Item/>
      </td>
    </tr>
  </tbody>
  <tfoot>
            <tr>
              <td colspan="4"><p>Para conseguir los Holy Spirit en calidad dorada es necesario canjear 6 Holy Spirit del mismo tipo con el NPC. Se tomarán los primeros 6 que se encuentren en el inventario.</p></td>
            </tr>
          </tfoot>

</table>
      </section>
    );
  }
}

export default SectionRecompensas;
