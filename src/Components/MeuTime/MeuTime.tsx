import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface MeuTimeProps {
  time: string;
}

const MeuTime: React.FC<MeuTimeProps> = ({ time }) => {
  const [nomeTime, setNomeTime] = useState(time);
  const [mostrarNomeTime, setMostrarNomeTime] = useState(false);

  const handleButtonClick = () => {
    setMostrarNomeTime(true)
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o nome do time"
        value={nomeTime}
        onChangeText={(text) => setNomeTime(text)}
      />
      <Button
        testID="botaoMostrarTime"
        title="Exibir nome do time"
        onPress={handleButtonClick}
      />
        
      {mostrarNomeTime && <Text>{nomeTime}</Text>}
      
    </View>
  );
};

export default MeuTime;
