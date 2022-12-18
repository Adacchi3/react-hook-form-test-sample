import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Form from '../Form'
import { RecoilRoot } from 'recoil'

describe('Form', () => {
  describe('登録ボタンの活性非活性', () => {
    test('未記入のとき', async () => {
      render(<Form />)
      expect(screen.getByTestId('submitButton')).toBeDisabled()
    })

    test('TODOのみを入力したとき', async () => {
      render(<Form />)
      await userEvent.type(screen.getByTestId('titleInputField'), 'Title')
      expect(screen.getByTestId('submitButton')).toBeEnabled()
    })

    describe('締切を入力したとき', () => {
      test('フォーマットが正しいとき', async () => {
        render(<Form />)
        await userEvent.type(screen.getByTestId('dateInputField'), '2022/01/01')
        await userEvent.type(screen.getByTestId('titleInputField'), 'Title')
        expect(screen.getByTestId('submitButton')).toBeEnabled()
      })
      test('フォーマットが誤っているとき', async () => {
        render(<Form />)
        await userEvent.type(screen.getByTestId('dateInputField'), '緊急')
        await userEvent.type(screen.getByTestId('titleInputField'), 'Title')
        expect(screen.getByTestId('submitButton')).toBeDisabled()
      })
    })
  })

  describe('バリデーションエラーのメッセージ', () => {
    test('緊急を入力するとき', async () => {
      const { rerender } = render(<Form />)
      await userEvent.type(screen.getByTestId('dateInputField'), '緊急')
      rerender(<Form />)
      expect(screen.getByTestId('dateErrorMessage')).toHaveTextContent(
        'Invalid',
      )
    })

    test('2022/01/01を入力するとき', async () => {
      const { rerender } = render(<Form />)
      await userEvent.type(screen.getByTestId('dateInputField'), '2022/01/01')
      rerender(<Form />)
      expect(screen.getByTestId('dateErrorMessage')).not.toHaveTextContent(
        'Invalid',
      )
    })
  })

  test('登録したら入力されていたデータはリセット', async () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    )
    await userEvent.type(screen.getByTestId('titleInputField'), 'Title')
    await userEvent.type(screen.getByTestId('descriptionTextArea'), '説明')
    await userEvent.type(screen.getByTestId('dateInputField'), '2022/01/01')
    await userEvent.click(screen.getByTestId('submitButton'))
    expect(screen.getByTestId('titleInputField')).toHaveValue('')
    expect(screen.getByTestId('descriptionTextArea')).toHaveValue('')
    expect(screen.getByTestId('dateInputField')).toHaveValue('')
  })
})
