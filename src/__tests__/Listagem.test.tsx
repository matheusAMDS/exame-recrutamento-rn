import React from 'react'
import { render, fireEvent, } from '@testing-library/react-native';
import Listagem from '../Components/Listagem/Listagem';

const DADOS = ['Brasil', 'China', 'Japão', 'México']

describe('Listagem', () => {
    test('Deve ser possível listar todos os itens', () => {
        const { debug, getByTestId, getByText, } = render(<Listagem dados={DADOS} />)

        DADOS.forEach(dado => {
            expect(getByText(dado)).toBeDefined();
        })
    });
});