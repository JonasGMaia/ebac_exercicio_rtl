import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('textareaComentario'), {
            target: {
                value: 'Comentário 1',
            }
        });

        fireEvent.click(screen.getByTestId('botaoComentarioSubmit'));

        fireEvent.change(screen.getByTestId('textareaComentario'), {
            target: {
                value: 'Comentário 2',
            }
        });

        fireEvent.click(screen.getByTestId('botaoComentarioSubmit'));

        expect(screen.getAllByTestId('itemComentario')).toHaveLength(2)
    });
});