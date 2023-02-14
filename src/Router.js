import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './pages/Payment/Payment';
import ShoppingMall from './pages/ShoppingMall/ShoppingMall';
import PaymentClause from './pages/Payment/PaymentClause/PaymentClause';
import PaymentConfirm from './pages/Payment/PaymentConfirm/PaymentConfirm';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingMall />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Payment/:PaymentClause" element={<PaymentClause />} />
        <Route path="/Payment/:PaymentConfirm" element={<PaymentConfirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
