import React, { useContext, useState } from 'react';
import './LeftSide.css';
//CONTEXT
import { FinanceContext } from '../../../context/FinanceContext';
//IMAGES
import plus from '../../../images/plus.png';
import minus from '../../../images/minus.png';

function LeftSide() {

  const {
    handlePopup,
    popup,
    dataType,
    handleAmount,
    handleExplanation,
    handleDatas,
    totalIncome,
    amount,
    explanation,
    rates,
    handleCurrencyType,
    totalExpense } = useContext(FinanceContext)



  return (
    <div className='LeftSide'>

      <div className="BTNcontainer">
        <button className='DataBTNS' style={{ backgroundColor: 'lightgreen' }} value='Income' onClick={handlePopup}>
          <img src={plus} style={{ width: '15px' }} alt="" />
          Income</button>
        <button className='DataBTNS' style={{ backgroundColor: 'pink' }} value='Expense' onClick={handlePopup}>
          <img src={minus} style={{ width: '15px' }} alt="" />
          Expense</button>
      </div>


      <div className="totalBalanceContainer">
        <h3>Total Income: {Number(totalIncome).toLocaleString()}</h3>
        <h3>Total Expense: {Number(totalExpense).toLocaleString()}</h3>
      </div>


      {
        popup
          ? <div className="popupdiv">
            <div className="overlay" onClick={handlePopup}></div>
            <div className="popupcontent">
              <h1>{dataType}</h1>
              <label htmlFor="amount">Amount</label>
              <input type="number" id='amount' className='dataInputs' value={amount} placeholder='Amount..' onChange={handleAmount} />
              <label>Currency Type</label>
              <select className='dataInputs' onChange={handleCurrencyType}>
                <option selected value="">Select Currency Type</option>
                {
                  Object.keys(rates)?.map((rate, index) => <option key={index} value={rate}>{rate}</option>)
                }
              </select>
              <label htmlFor="amount">Explanation</label>
              <input type="text" id='explanation' className='dataInputs' value={explanation} placeholder='Your note..' onChange={handleExplanation} maxLength={50} />
              <button onClick={handleDatas} className='submitBTN'>Submit</button>
            </div>
          </div>
          : null
      }
    </div>
  )
}

export default LeftSide