import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import React, { useState } from "react";

import logo from "../img/HurmonyTrans.png";

//Todo:一通り作ったらflex対応

const Signup = () => {
  const [passwordShow, setPassWordShow] = useState(false);
  const handlePasswordClick = () => setPassWordShow(!passwordShow);
  return (
    <Box display="flex" justifyContent="space-between" marginTop="100px">
      <Box boxSize="xl" bg="">
        <Box
          boxSize="-webkit-fit-content"
          mb="25px"
          display="flex"
          justifyContent="left"
        >
          <NextImage
            src={logo}
            className="HurmonyLogo"
            alt="HurmonyLogo"
            height="600"
            width="600"
          />
        </Box>
      </Box>
      <Box boxSize="xl" bg="#D5EEFF" borderRadius="5%" marginRight="1rem">
        <Box boxSize="-webkit-fit-content" mb="25px" marginLeft="130px">
          <FormControl>
            <Heading marginTop="5rem" fontSize="2xl">
              会員登録
            </Heading>
            <Input
              marginTop="1rem"
              pr="4.5rem"
              placeholder="ID(メールアドレス)"
              size="sm"
              width="auto"
              variant="filled"
            />
            <InputGroup size="md">
              <Input
                marginTop="10px"
                pr="4.5rem"
                placeholder="パスワード"
                type={passwordShow ? "text" : "password"}
                size="sm"
                width="auto"
                variant="filled"
              />
              <InputRightElement>
                <Button size="sm" onClick={handlePasswordClick}>
                  {passwordShow ? "隠す" : "確認"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Input
              marginTop="10px"
              pr="4.5rem"
              placeholder="ユーザー名"
              size="sm"
              width="auto"
              variant="filled"
            />
            <CheckboxGroup>
              <Stack
                spacing={[1, 5]}
                direction={["column", "row"]}
                marginTop="10px"
              >
                <Checkbox value="出演者">出演者</Checkbox>
                <Checkbox value="主催者">主催者</Checkbox>
                <Checkbox value="両方">両方</Checkbox>
              </Stack>
            </CheckboxGroup>
            <br />
            <Box marginLeft="3rem" display="contents">
              <Button marginTop="10px">登録</Button>
              <br />
              <Text marginTop="10px" fontSize="1xs">
                ログインはこちら
              </Text>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
