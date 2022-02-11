import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from 'miragejs'
import { App } from "./App";

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          amount: 4000,
          type: 'deposit',
          category: 'Salário',  
          createdAt: new Date('2022-01-10 14:46:34')
        }
      ]
    })
  },
  
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
