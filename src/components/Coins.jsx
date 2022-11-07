import { Button, Container, Heading, HStack, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import axios from 'axios';
import Loader from './Loader';
import { useState, useEffect } from 'react';
import { server } from '../index.js';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency , setCurrency] = useState("pkr");

  const currencySymbol= currency==="pkr"? "₨": currency === "eur" ? "€" :"$ ";


    const changePage = (page) => {
      setPage(page);
      setLoading(true)
    }


    const btns= new Array(132).fill(1) 


    useEffect(() => {

      const fetchCoins = async () => {
        try {
          const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)

          setCoins(data)
          setLoading(false)
        } catch (error) {
          setError(true)
          setLoading(false)
          }

      };
      fetchCoins()

    }, [currency, page]);
    
    if (error) return <ErrorComponent message={'Error whille fetching coins'}/>


      
    return(
      <Container maxW = {"container.xl"}>
        {loading ? <Loader />: <>

        <RadioGroup value={currency} onChange={setCurrency}>
          <HStack spacing={"10"}>
            <Radio value={"pkr"}>₨ PKR</Radio>
            <Radio value={"eur"}>€ EUR</Radio>
            <Radio value={"usd"}>$ USDT</Radio>
          </HStack>
        </RadioGroup>
        
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {
            coins.map((coin) => (

              <CoinCard 
              id={coin.id} 
              name={coin.name}
              img={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              currencySymbol={currencySymbol}
              />

            ))

          }

        </HStack>

        <HStack w={"full"} overflowX={"auto"} p={"8"}>

          {

            btns.map((btn, index) => (
              <Button
              onClick={() => changePage(index+1)}
              colorScheme={page === index+1 ? "blue" : "gray"}
              >
                {index+1}
              </Button>
              
            ))
          }




          {/* <Button 
          bgColor={"blackAlpha.900"}
          color={"white"}
          onClick={() => changePage(2)}
          >2</Button> */}


        </HStack>




        
        </>}

      </Container>
    )
    
    
  }


export default Coins