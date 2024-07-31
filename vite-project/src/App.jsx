import * as React from 'react'
import { useState } from 'react'
import { TextField, createTheme, ThemeProvider, Button, ToggleButton, ToggleButtonGroup  } from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import './App.css'

const TemaInput = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: 'Arial',
  },
  palette: {
    text: {
      primary: '#3C4048',
    },
    primary: {
      main: '#35374B',
    },
  },
})

function App()  {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <div className="app">
      <img className='imagem' src="https://www.figma.com/file/EyxBJzSpCmJOKyxhrbcnjL/image/ce147169723164efecc8f221f932c09cde34a7d0" alt="Logo" />

      <section>
        <div className='login'>

          <h1>LOGO</h1>

          <ToggleButtonGroup className='botao'
            orientation='horizontal' 
            value={view} 
            exclusive 
            onChange={handleChange}
            size='small'
          >
            <ToggleButton value="left" aria-label="left aligned">
              <HowToRegIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <VpnKeyIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <h2>Bem-vindo ao LOGIN</h2>

          <ThemeProvider theme={TemaInput}>
            <TextField label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Senha" variant="standard" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </ThemeProvider>

          <Button id='esqueceu' variant="text">Esqueceu sua senha?</Button>
          <Button id='entrar' variant="contained">Entrar</Button>
        </div>
      </section>
    </div>
  );
}

export default App
