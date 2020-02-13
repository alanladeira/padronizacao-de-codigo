# Ambiente Configurado
## Sobre
Ambiente de desenvolvimento ja pré-configurado com Eslint, Prettier, Sucrase e Nodemon.
Desenvolvido para começar a codar a partir desta estrutura inicial.

### Instalação
- Instalar a extensão eslint no vsCode.
- Adicionar as linhas a seguir dentro do settings.json do vsCode

 
    "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },

    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    }
    
    
- Configurar o launch.json
{
"type": "node",
"request": "attach",
"name": "Launch Program",
"restart": true,
"protocol": "inspector",
}

### Iniciar o projeto
- git clone https://github.com/alanladeira/padronizacao-de-codigo.git
- cd padronizacao-de-codigo
- yarn
