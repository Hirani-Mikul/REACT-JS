import React, { useEffect, useState } from 'react';

import '../index.css';
import '../common.css';

import Card from '../Components/Card';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';

export default function HomeScreen() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProduct());
  }, []);

  return (
    <div className={loading ? 'row center v-center' : 'row center'}>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        products.map((product) => <Card key={product._id} data={product} />)
      )}
    </div>
  );
}
