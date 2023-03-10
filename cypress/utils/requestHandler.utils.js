/// <reference types="cypress" />

function requestHandler(path, methodParam, bodyParam = {}, header = 'default') {
    return cy.request({
        method: methodParam,
        url: path,
        failOnStatusCode: false,
        retryOnStatusCodeFailur: true,
        headers: headers[header],
        body: bodyParam,

    })
};


export default requestHandler;