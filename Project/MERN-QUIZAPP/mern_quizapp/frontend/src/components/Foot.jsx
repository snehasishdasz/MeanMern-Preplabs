import { Container, Text, Link } from "@nextui-org/react";
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillInstagram,
    AiFillLinkedin,
  } from "react-icons/ai";

const Foot = () => {
  return (
 
      <Container paddingY={2}>
        <hr/>
        <Text >
          © 2023 Quizer. All rights reserved.
          <br/>
          <Link href="#" color="secondary">
              
                <AiFillFacebook size={20} />
              
            </Link>
            <Link href="#" color="secondary">
              
                <AiFillTwitterSquare size={20} />
              
            </Link>
            <Link href="#" color="secondary">
              
                <AiFillInstagram size={20} />
              
            </Link>
            <Link href="#" color="secondary">
              
                <AiFillLinkedin size={20} />
              
            </Link>
        </Text>
      </Container>
  );
};

export default Foot;
