import React , {useState, useEffect } from 'react'
import axios from 'axios'
import {server } from '../index.js'
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';
import Loader from './Loader.jsx';
import ErrorComponent from './ErrorComponent.jsx';



const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);




    useEffect(() => {

      const fetchExchanges = async () => {
        try {
          const {data} = await axios.get(`${server}/exchanges`)
          setExchanges(data)
          setLoading(false)
        } catch (error) {
          setError(true)
          setLoading(false)
          }

      };
      fetchExchanges()

    }, []);
    
    if (error) return <ErrorComponent />


      
    return(
      <Container maxW = {"container.xl"}>
        {loading ? <Loader />: <>
        
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {
            exchanges.map((exchange) => (

              <ExchangeCard 
              key={exchange.id} 
              name={exchange.name}
              img={exchange.image}
              rank={exchange.trust_score_rank}
              url={exchange.url}

              />

            ))

          }

        </HStack>
        
        </>}

      </Container>
    )
    
    
  }
  const ExchangeCard = ({name, img, rank, url  }) => 
    <a href={url} target={"blank"}>
      <VStack w={"52"} shadow={"lg"} p={"8"}  borderRadius={"lg"} transition={"all 0.3"} m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.05)",

        } 
      }}>
        <Image 
        src={img} 
        alt={'Excahnge'}
        w={"10"}
        h={"10"}
        objectFit={"cover"}
        />

        <Heading size={"md"} noOfLines={1}>{rank}</Heading>

        <Text noOfLines={1}>{name}</Text>


      </VStack> 


    </a>

  
  
export default Exchanges