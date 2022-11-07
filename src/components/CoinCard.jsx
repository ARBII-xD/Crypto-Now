import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";



const CoinCard = ({id, name, img, price , symbol , currencySymbol="₨" }) => 
    <Link to={`/coin/${id}`} target={"blank"}>
      <VStack w={"52"} shadow={"lg"} p={"8"}  borderRadius={"lg"} transition={"all 0.3"} m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.05)",

        } 
      }}>
        <Image 
        src={img} 
        name-coin={name}
        alt={'Excahnge'}
        w={"10"}
        h={"10"}
        objectFit={"cover"}
        />

        <Heading size={"md"} noOfLines={1}>{symbol}</Heading>

        <Text noOfLines={1}>{price ? `${currencySymbol} ${price}`: "NA" }</Text>


      </VStack> 


    </Link>


export default CoinCard