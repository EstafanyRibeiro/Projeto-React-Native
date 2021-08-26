import React from "react";
import { Input, Center, NativeBaseProvider } from "native-base";

export const Teste = () => {
    return(
        <Input 
           w="100%"
           mx={3}
           placeholder="Default Input"
           _light={{
               placeholderTextColor: "blueGray.400",
           }}
           _dark={{
               placeholderTextColor: "blueGray.50",
           }}
        />
    )
}
export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Teste />
            </Center>
        </NativeBaseProvider>
    )

}