import React from 'react'
import { render, fireEvent, } from '@testing-library/react-native';
import Contador from '../Components/Contador/Contador';

describe('Contador', () => {
    test('Deve ser possível que a contagem funcione corretamente', () => {
        const { debug, getByTestId, getByText, } = render(<Contador />)

        const botaoIncrementar = getByTestId('botaoIncrementar');

        fireEvent.press(botaoIncrementar);

        const reusltadoContador = getByText('Contador: 1');

        expect(reusltadoContador).toBeTruthy()
    });
});