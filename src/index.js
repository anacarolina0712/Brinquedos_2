import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./components/conteudo";
import Planejamento from "./components/pages/administrativo/planejamento_estrategico";
import Consultoria from "./components/pages/administrativo/consultoria";
import Comercio from "./components/pages/administrativo/comercio";

import Comercial from "./components/pages/comercial/comercial";

import Gestao from "./components/pages/financeiro/gestão";
import Controle from "./components/pages/financeiro/controle"

import Pesquisa from "./components/pages/marketing/pesquisa_mercado";
import Analise from "./components/pages/marketing/analise_de_marketing";
import Ferramentas from './components/pages/marketing/gestao_ferramentas';

import Producao from "./components/pages/producao/producao";
import Vendas from "./components/pages/vendas/vendas";
import Contabilidade from './components/pages/contabilidade/contabilidade';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './components/style/header.css';
import './components/style/conteudo.css';
import'./components/style/footer.css';


const rotas = (
  <Router>
    <Switch>
      <Route exact path = "/Home" component = {Home}/>
      <Route exact path = "/planejamento_estratégico" component = {Planejamento}/>
      <Route exact path = "/Consultoria" component = {Consultoria}/>
      <Route exact path = "/Comercio" component = {Comercio} />
      <Route exact path = "/Comercial" component = {Comercial}/>

      <Route exact path = "/Controle_financeiro" component = {Controle} />
      <Route exact path = "/Gestão_de_tesouraria" component = {Gestao} />

      <Route exact path = "/Pesquisa_de_mercado" component = {Pesquisa} />
      <Route exact path = "/Analise_do_marketing" component = {Analise}/>
      <Route exact path = "/Gestão_de_ferramentas" component = {Ferramentas}/>
      <Route exact path = "/Producao" component = {Producao}/>
      <Route exact path = "/Vendas" component = {Vendas}/>
      <Route exact path = "/Contabilidade" component = {Contabilidade}/>
      <Redirect to="/Home" />
    </Switch>
  </Router>
)
ReactDOM.render(rotas, document.getElementById('root'));