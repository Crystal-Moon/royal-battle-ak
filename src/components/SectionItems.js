import { Component } from 'react';

class SectionItems extends Component {
  render() {
    return (
      <section className="Section">
        <h2 className="h2">seccion itens</h2>
        <table>
          <caption>table  title='' and/or explanatory text</caption>
          <thead>
            <tr>
              <th>header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default SectionItems;
