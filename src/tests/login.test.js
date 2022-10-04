import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes: Requisito 5', () => {
  it('Teste se a pagina de login é renderizada:', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const email = screen.getByPlaceholderText('Email');
    const senha = screen.getByPlaceholderText('Senha');
    const btn = screen.getByRole('button');

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    userEvent.type(email, 'teresa@gmail.com');
    userEvent.type(senha, '123456');
    userEvent.click(btn);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
  it('Testando a carteira', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const textInput = screen.getByRole('textbox');
    const selects = screen.getAllByRole('combobox');
    const btn = screen.getByRole('button', {
      name: /adicionar despesas/i,
    });
    const brlTexto = screen.getByText(/brl/i);
    const valorInput = screen.getByPlaceholderText(/valor/i);

    expect(valorInput).toBeInTheDocument();
    expect(brlTexto).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(selects.length).toBe(3);
    expect(btn).toBeInTheDocument();

    userEvent.type(valorInput, '1');
    userEvent.click(btn);
  });
});
