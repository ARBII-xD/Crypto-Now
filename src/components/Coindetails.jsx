import { Badge, Box, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import Loader from './Loader';
import {server} from '../index.js'
import { useParams } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';





const Coindetails = () => {

  const [coins, setCoins] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency , setCurrency] = useState("pkr");

  const params = useParams();
  const currencySymbol= currency==="pkr"? "₨": currency === "eur" ? "€" :"$ ";

  useEffect(() => {

    const fetchCoins = async () => {
      try {
        const {data} = await axios.get(`${server}/coins/${params.id}`)
        console.log(data);
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
        }

    };
    fetchCoins()

  }, [params.id]);


  if (error) return <ErrorComponent message={'Error whille fetching coins'}/>



  return (
    <Container maxW={"container.xl"}>
      {
        loading ? <Loader /> :
        (
          <>
          <Box width={"full"} borderWidth={"1"}> asdasd </Box>

          

          <RadioGroup value={currency} onChange={setCurrency}>
          <HStack spacing={"10"}>
            <Radio value={"pkr"}>₨ PKR</Radio>
            <Radio value={"eur"}>€ EUR</Radio>
            <Radio value={"usd"}>$ USDT</Radio>
          </HStack>
        </RadioGroup>

        <VStack spacing={"10"} p="16" alignItems={"flex-start"} >
          <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
            last Updated on {Date(coins.market_data.last_updated).split("G")[0]}
          </Text>

          <Image 
          src={coins.image.large}
          w={"16"}
          h={"16"}
          objectFit={"contain"}
          
          />
          <Stat>

            <StatLabel>{coins.name}</StatLabel>
            <StatNumber>{currencySymbol} {coins.market_data.current_price["pkr"]}</StatNumber>
            <StatHelpText>
              <StatArrow type= {coins.market_data.price_change_percentage_24h > 0 ? "increase" :"decrease" }/>
              {coins.market_data.price_change_percentage_24h}%
            </StatHelpText>
          </Stat>



          <Badge fontSize={"2x1"} bgColor={"blackAlpha.900"} color={"white"}>
            {`#${coins.market_data.market_cap_rank}`}
          </Badge>
 
          <CustomBar   
          high={`${currencySymbol}${coins.market_data.high_24h[currency]}`} 
          low={`${currencySymbol}${coins.market_data.low_24h[currency]}`} 
          /> 
        </VStack>

          </>
        )
        

      }
 
    </Container>
  )
}

const CustomBar = ({high, low}) => (
  <VStack w={"full"} >
    <Progress value={50} colorScheme={"teal"} w={"full"}   />
    <HStack w={"full"} justifyContent={"space-between"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>

)

export default Coindetails