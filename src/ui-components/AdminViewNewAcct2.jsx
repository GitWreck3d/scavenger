/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function AdminViewNewAcct2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="472px"
      height="806px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AdminViewNewAcct2")}
    >
      <View
        width="450px"
        height="790px"
        position="absolute"
        top="5.5px"
        left="10.5px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component1")}
      >
        <Card
          display="flex"
          gap="0"
          position="absolute"
          top="-0.76%"
          bottom="0.89%"
          left="-2.45%"
          right="2.45%"
          direction="column"
          width="449px"
          height="788px"
          justifyContent="center"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          opacity="0.4699999988079071"
          variation="default"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="32px"
          position="absolute"
          top="94.07%"
          bottom="2.77%"
          left="calc(50% - 16px - -1.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2/2"
          {...getOverrideProps(overrides, "label351912591")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(48,64,80,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="1.32%"
          bottom="92.89%"
          left="25.17%"
          right="20.49%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create New Account"
          {...getOverrideProps(overrides, "label351912592")}
        ></Text>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="10.98%"
          bottom="79.89%"
          left="13.14%"
          right="11.8%"
          direction="column"
          width="337px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Order"
          placeholder="Enter order "
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912593")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="71.19%"
          bottom="19.68%"
          left="13.14%"
          right="11.8%"
          direction="column"
          width="337px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Comments"
          placeholder="Enter comments "
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912594")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="58.81%"
          bottom="32.06%"
          left="13.14%"
          right="11.8%"
          direction="column"
          width="337px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Account Creation"
          placeholder="MM/DD/YYY hh:mm:ss"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912595")}
        ></TextField>
        <View
          width="377px"
          height="210px"
          position="absolute"
          top="167px"
          left="46px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "Listbox Component/Statement Dropdown"
          )}
        ></View>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="31.18%"
          bottom="59.7%"
          left="14.48%"
          right="49%"
          direction="column"
          width="164px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Debit"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912596")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="31.18%"
          bottom="59.7%"
          left="53.01%"
          right="10.47%"
          direction="column"
          width="164px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Credit"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912597")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="43.73%"
          bottom="47.15%"
          left="52.34%"
          right="11.8%"
          direction="column"
          width="161px"
          height="72px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Ending Balance"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912598")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="43.73%"
          bottom="47.15%"
          left="13.36%"
          right="50.11%"
          direction="column"
          width="164px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Beginning Balance"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912599")}
        ></TextField>
        <Flex
          gap="0"
          position="absolute"
          top="87.85%"
          bottom="6.83%"
          left="8.46%"
          right="57.68%"
          width="152px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(0,85,102,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          {...getOverrideProps(overrides, "Button351912600")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,85,102,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cancel"
            {...getOverrideProps(overrides, "label351912602")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          position="absolute"
          top="694px"
          left="255px"
          width="150px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "Button351912604")}
        >
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="25.5px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="118px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Submit"
            {...getOverrideProps(overrides, "label351912606")}
          ></Text>
        </Flex>
      </View>
    </View>
  );
}
