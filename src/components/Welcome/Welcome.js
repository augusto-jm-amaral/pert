import React from 'react'
import logo from '../../assets/home.jpg';
import './Welcome.css'

const Welcome = ({ doBegin }) => {
  return (
    <div className="row">
      <div className="col s2 m3"/>
      <div className="col s8 m6">
        <div className="card">
          <div className="card-image">
            <img src={logo} alt="P.E.R.T."/>
            <span className="card-title">P.E.R.T.</span>
          </div>
          <div className="card-content readme">
            <p className="paragraph">Na administração, o Program Evaluation and Review Technique (PERT) é uma ferramenta utilizada no gerenciamento de projetos.</p>
            <p>Enquanto PERT é o cálculo a partir da média ponderada de 3 durações possíveis de uma atividade (otimista, mais provável e pessimista), CPM é um método de apuração do caminho crítico dada uma sequência de atividades, isto é, quais atividades de uma sequência não podem sofrer alteração de duração sem que isso reflita na duração total de um projeto. Desta maneira, classificando-os em função do tratamento, a rede PERT é probabilística e o CPM é determinístico.</p>
          </div>
          <div className="card-action">
            <a className="indigo-text btn-flat center-align begin" onClick={doBegin}>Vamos Começar</a>
          </div>
        </div>
      </div>
      <div className="col s2 m3"/>
    </div>
  )
}

export default Welcome
