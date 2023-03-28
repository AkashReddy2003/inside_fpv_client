import React,{useState} from 'react';
import {
  ChakraProvider,
  Text,
  theme,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
  Grid,
  GridItem,
  Slider,
  SliderMark,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  Center,
  AbsoluteCenter,
  Badge
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from "axios";


function App() {
  const [nd, setNd] = React.useState(0);
  const [nm, setNm] = React.useState(0);
  const [nf, setNf] = React.useState(0);
  const [showd, setShowd] = React.useState(false);
  const [showm, setShowm] = React.useState(false);
  const [showf, setShowf] = React.useState(false);
  

  const sub=async()=>{
    await axios.post("https://inside-fpv-server-production.up.railway.app/orders",{drones:nd,motors:nm,frames:nf}).then((res)=>{
      console.log({drones:nd,motors:nm,frames:nf});
      alert(res.data.message);
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Center><Heading padding="20px">Inside FPV</Heading></Center>
      <Center>
        
      <Grid templateColumns='repeat(3, 1fr)' gap={3}>
        <GridItem area={'header'}>Hi</GridItem>
  <GridItem>
  <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://i0.wp.com/insidefpv.com/wp-content/uploads/2022/12/3-9.jpg?fit=1080%2C1080&ssl=1'
      alt='QTWhoop – for Beginners'
      borderRadius='lg'
      height="300px"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>QTWhoop – for Beginners</Heading>
      
      <Text>
        Price = ₹28,999.00 incl GST<br/>
        Amount = ₹{28999*nd}
      </Text>
      
      <Slider
      id='slider'
      defaultValue={0}
      min={0}
      max={5}
      colorScheme='teal'
      onChange={(v) => setNd(v)}
      onMouseEnter={() => setShowd(true)}
      onMouseLeave={() => setShowd(false)}
    >
      <SliderMark value={1} mt='1' ml='-2.5' fontSize='sm'>
        1
      </SliderMark>
      <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm'>
        2
      </SliderMark>
      <SliderMark value={3} mt='1' ml='-2.5' fontSize='sm'>
        3
      </SliderMark>
      <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm'>
        4
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showd}
        label={`${nd}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
    <br/>
      <br/>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
    
      <Button variant='solid' colorScheme='blue' onClick={sub}>
        Buy now
      </Button>
      
      
    
  </CardFooter>
  </Center>
</Card>
  </GridItem>
  <GridItem>
  <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://i0.wp.com/insidefpv.com/wp-content/uploads/2022/12/hglrc-kt20-2-inch-fpv-traversing-machine-frame-289903.jpg?resize=768%2C768&ssl=1'
      alt='HGLRC KT20 2 inch FPV'
      borderRadius='lg'
      height="300px"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>iFlight Xing 1507 Unibell Motor</Heading>
      <Text>
      Price = ₹2,600 incl GST<br/>
      Amount = ₹{2600*nm}
      </Text>
      <Slider
      id='slider'
      defaultValue={0}
      min={0}
      max={5}
      colorScheme='teal'
      onChange={(v) => setNm(v)}
      onMouseEnter={() => setShowm(true)}
      onMouseLeave={() => setShowm(false)}
    >
      <SliderMark value={1} mt='1' ml='-2.5' fontSize='sm'>
        1
      </SliderMark>
      <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm'>
        2
      </SliderMark>
      <SliderMark value={3} mt='1' ml='-2.5' fontSize='sm'>
        3
      </SliderMark>
      <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm'>
        4
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showm}
        label={`${nm}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
    <br/>
      <br/>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
    
      <Button variant='solid' colorScheme='blue' onClick={sub}>
        Buy now
      </Button>
      
    
  </CardFooter>
  </Center>
</Card>
  </GridItem>
  <GridItem>
  <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://i0.wp.com/insidefpv.com/wp-content/uploads/2022/12/XING2-31103-1000x1000-1.jpg?resize=768%2C768&ssl=1'
      alt='XING2 3110 900KV'
      borderRadius='lg'
      height="300px"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>XING2 3110 900KV</Heading>
      
      <Text>
      Price = ₹4,125.68 incl GST<br/>
      Amount = ₹{4125.68*nf}
      </Text>
      <Slider
      id='slider'
      defaultValue={0}
      min={0}
      max={5}
      colorScheme='teal'
      onChange={(v) => setNf(v)}
      onMouseEnter={() => setShowf(true)}
      onMouseLeave={() => setShowf(false)}
    >
      <SliderMark value={1} mt='1' ml='-2.5' fontSize='sm'>
        1
      </SliderMark>
      <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm'>
        2
      </SliderMark>
      <SliderMark value={3} mt='1' ml='-2.5' fontSize='sm'>
        3
      </SliderMark>
      <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm'>
        4
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showf}
        label={`${nf}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
    <br/>
      <br/>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
    
      <Button variant='solid' colorScheme='blue' onClick={sub}>
        Buy now
      </Button>
      
    
  </CardFooter>
  </Center>
</Card>
  </GridItem>

</Grid>
      
</Center>
    </ChakraProvider>
  );
}

export default App;
