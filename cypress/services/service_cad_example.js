/* import requestHandler from '../utils/requestHandler.utils';

class CadServices {
  constructor() {
    this.NS = Cypress.env('NS');
  }

  getAll(sv, ns = this.NS) {
    return requestHandler(/api/xxx/${ns}/servicesxapi/${sv}/xxxxxxxxxx, 'GET');
  }

  get(name, sv, ns = this.NS) {
    return requestHandler(/api/xxx/${ns}/servicesxapi/${sv}/xxxxxxxxxx/${name}, 'GET');
  }

  create(body, sv, ns = this.NS) {
    return requestHandler(/api/xnameapixx/${ns}/servicesxapi/${sv}/xxxxxxxxxx, 'POST', body);
  }

  update(name, body, sv, ns = this.NS) {
    return requestHandler(/api/xnameapixx/${ns}/servicesxapi/${sv}/xxxxxxxxxx/${name}, 'PUT', body);
  }

  delete(name, sv, ns = this.NS) {
    return requestHandler(/api/xnameapixx/${ns}/servicesxapi/${sv}/xxxxxxxxxx/${name}, 'DELETE');
  }
}

export default new CadServices(); */